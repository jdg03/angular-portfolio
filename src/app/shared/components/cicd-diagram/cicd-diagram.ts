import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { createGraph, DiagramVariant } from './cicd-graph';

interface Playback {
  play(): void;
  pause(): void;
  destroy(): void;
}
@Component({
  selector: 'app-cicd-diagram',
  templateUrl: './cicd-diagram.html',
  styleUrl: './cicd-diagram.css',
})
export class CicdDiagram {
  readonly variant = input<DiagramVariant>('css');
  readonly paused = input(false);
  readonly restartToken = input(0);
  readonly allowMotion = input(false);
  readonly labelLanguage = input<'auto' | 'es' | 'en'>('auto');
  readonly motionPreference = output<boolean>();
  readonly unavailable = output<boolean>();
  protected readonly lang = inject(TranslationService).lang;
  protected readonly diagramLanguage = computed(() => {
    const language = this.labelLanguage();
    return language === 'auto' ? this.lang() : language;
  });
  protected readonly graph = computed(() => createGraph(this.variant()));
  private readonly systemReduced = signal(true);
  protected readonly reduced = computed(() => this.systemReduced() && !this.allowMotion());
  private readonly ready = signal(false);
  private readonly inView = signal(false);
  private readonly pageVisible = signal(true);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly running = computed(
    () => this.ready() && !this.reduced() && !this.paused() && this.inView() && this.pageVisible(),
  );
  private playback?: Playback;
  private generation = 0;

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView!;
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      const preference = () => {
        this.systemReduced.set(media.matches);
        this.motionPreference.emit(media.matches);
      };
      const visibility = () => this.pageVisible.set(!this.document.hidden);
      preference();
      visibility();
      media.addEventListener('change', preference);
      this.document.addEventListener('visibilitychange', visibility);
      const observer = new IntersectionObserver(([entry]) => this.inView.set(entry.isIntersecting));
      observer.observe(this.host);
      this.ready.set(true);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        media.removeEventListener('change', preference);
        this.document.removeEventListener('visibilitychange', visibility);
      });
    });
    afterRenderEffect(() => {
      if (!this.ready()) return;
      this.variant();
      this.restartToken();
      this.reduced();
      untracked(() => void this.buildAnimation());
    });
    afterRenderEffect(() => {
      const running = this.running();
      untracked(() => (running ? this.playback?.play() : this.playback?.pause()));
    });
    this.destroyRef.onDestroy(() => {
      ++this.generation;
      this.playback?.destroy();
    });
  }

  private async buildAnimation() {
    const generation = ++this.generation;
    this.playback?.destroy();
    this.playback = undefined;
    this.unavailable.emit(false);
    if (this.reduced()) return;
    const svg = this.host.querySelector('svg')!;
    if (this.variant() === 'css') {
      // Angular owns the CSS classes; restart the existing keyframes in place.
      svg.getAnimations({ subtree: true }).forEach((animation) => {
        animation.currentTime = 0;
      });
      this.playback = { play() {}, pause() {}, destroy() {} };
    } else if (this.variant() === 'native') {
      const animations: Animation[] = [];
      for (const edge of this.graph().edges) {
        const packet = svg.querySelector('[data-packet="' + edge.id + '"]')!;
        animations.push(
          packet.animate(
            [
              { opacity: 0, offsetDistance: '0%', offset: 0 },
              { opacity: 1, offsetDistance: '0%', offset: 0.005 },
              { opacity: 1, offsetDistance: '100%', offset: edge.duration / 14 },
              { opacity: 0, offsetDistance: '100%', offset: (edge.duration + 0.1) / 14 },
              { opacity: 0, offsetDistance: '100%', offset: 1 },
            ],
            { duration: 14000, delay: edge.start * 1000, iterations: Infinity, easing: 'linear' },
          ),
        );
      }
      for (const node of this.graph().nodes) {
        const shape = svg.querySelector('[data-node="' + node.id + '"] .node-shape')!;
        animations.push(
          shape.animate(
            [
              { fill: '#ffffff', stroke: '#c0cde0', offset: 0 },
              { fill: '#dceaff', stroke: '#245ca8', offset: 0.025 },
              { fill: '#dceaff', stroke: '#245ca8', offset: 0.085 },
              { fill: '#ffffff', stroke: '#c0cde0', offset: 0.12 },
              { fill: '#ffffff', stroke: '#c0cde0', offset: 1 },
            ],
            { duration: 14000, delay: node.start * 1000, iterations: Infinity },
          ),
        );
      }
      animations.forEach((animation) => animation.pause());
      this.playback = {
        play: () => animations.forEach((animation) => animation.play()),
        pause: () => animations.forEach((animation) => animation.pause()),
        destroy: () => animations.forEach((animation) => animation.cancel()),
      };
    } else {
      try {
        const [{ gsap }, { MotionPathPlugin }] = await Promise.all([
          import('gsap'),
          import('gsap/MotionPathPlugin'),
        ]);
        if (generation !== this.generation || this.destroyRef.destroyed) return;
        gsap.registerPlugin(MotionPathPlugin);
        let timeline!: gsap.core.Timeline;
        const context = gsap.context(() => {
          timeline = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: 'none' } });
          timeline.to({}, { duration: 14 }, 0);
          for (const edge of this.graph().edges) {
            const packet = svg.querySelector('[data-packet="' + edge.id + '"]')!;
            const path = svg.querySelector<SVGPathElement>('[data-edge="' + edge.id + '"]')!;
            timeline.set(packet, { autoAlpha: 0 }, 0);
            timeline.set(packet, { autoAlpha: 1 }, edge.start);
            timeline.to(
              packet,
              {
                duration: edge.duration,
                motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
              },
              edge.start,
            );
            timeline.set(packet, { autoAlpha: 0 }, edge.start + edge.duration);
          }
          for (const node of this.graph().nodes) {
            const shape = svg.querySelector('[data-node="' + node.id + '"] .node-shape')!;
            timeline.to(shape, { fill: '#dceaff', stroke: '#245ca8', duration: 0.25 }, node.start);
            timeline.to(
              shape,
              { fill: '#ffffff', stroke: '#c0cde0', duration: 0.4 },
              node.start + 1,
            );
          }
        }, svg);
        this.playback = {
          play: () => {
            timeline.play();
          },
          pause: () => {
            timeline.pause();
          },
          destroy: () => context.revert(),
        };
      } catch {
        // The complete static diagram remains readable if the optional engine cannot load.
        if (generation !== this.generation || this.destroyRef.destroyed) return;
        this.unavailable.emit(true);
        return;
      }
    }
    this.running() ? this.playback?.play() : this.playback?.pause();
  }
}
