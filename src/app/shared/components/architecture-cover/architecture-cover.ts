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
import { ARCHITECTURE_FLOWS, ArchitectureKind } from './architecture-flows';

@Component({
  selector: 'app-architecture-cover',
  templateUrl: './architecture-cover.html',
  styleUrl: './architecture-cover.css',
})
export class ArchitectureCover {
  readonly kind = input<ArchitectureKind>('cloud');
  readonly paused = input(false);
  readonly allowMotion = input(false);
  readonly motionPreference = output<boolean>();
  protected readonly flow = computed(() => ARCHITECTURE_FLOWS[this.kind()]);
  protected readonly source = computed(() => '/covers/animated/' + this.kind() + '-small.webp');
  protected readonly sources = computed(
    () => this.source() + ' 851w, /covers/animated/' + this.kind() + '-large.webp 2061w',
  );
  private readonly imageKind = signal<ArchitectureKind | null>(null);
  private readonly systemReduced = signal(true);
  private readonly ready = signal(false);
  private readonly inView = signal(false);
  private readonly pageVisible = signal(true);
  private readonly reduced = computed(() => this.systemReduced() && !this.allowMotion());
  protected readonly running = computed(
    () =>
      this.ready() &&
      this.imageKind() === this.kind() &&
      !this.reduced() &&
      !this.paused() &&
      this.inView() &&
      this.pageVisible(),
  );
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private animations: Animation[] = [];

  constructor() {
    afterNextRender(() => {
      const media = this.document.defaultView!.matchMedia('(prefers-reduced-motion: reduce)');
      const preference = () => {
        this.systemReduced.set(media.matches);
        this.motionPreference.emit(media.matches);
      };
      const visibility = () => this.pageVisible.set(!this.document.hidden);
      preference();
      visibility();
      this.imageLoaded();
      const observer = new IntersectionObserver(([entry]) => this.inView.set(entry.isIntersecting));
      observer.observe(this.host);
      media.addEventListener('change', preference);
      this.document.addEventListener('visibilitychange', visibility);
      this.ready.set(true);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        media.removeEventListener('change', preference);
        this.document.removeEventListener('visibilitychange', visibility);
      });
    });
    afterRenderEffect(() => {
      if (!this.ready()) return;
      this.kind();
      this.imageKind();
      this.reduced();
      untracked(() => this.buildAnimation());
    });
    afterRenderEffect(() => {
      const running = this.running();
      untracked(() =>
        this.animations.forEach((animation) => (running ? animation.play() : animation.pause())),
      );
    });
    this.destroyRef.onDestroy(() => this.clear());
  }
  protected imageLoaded() {
    const image = this.host.querySelector('img');
    if (
      image?.complete &&
      image.naturalWidth > 0 &&
      image.currentSrc.includes('/animated/' + this.kind() + '-')
    ) {
      this.imageKind.set(this.kind());
    }
  }
  private clear() {
    this.animations.forEach((animation) => animation.cancel());
    this.animations = [];
  }
  private buildAnimation() {
    this.clear();
    if (this.reduced() || this.imageKind() !== this.kind()) return;
    const period = 18.5;
    for (const route of this.flow().routes) {
      const packet = this.host.querySelector('[data-message="' + route.id + '"]')!;
      this.animations.push(
        packet.animate(
          [
            { opacity: 0, offsetDistance: '0%', offset: 0 },
            { opacity: 1, offsetDistance: '0%', offset: 0.004 },
            { opacity: 1, offsetDistance: '100%', offset: route.duration / period },
            { opacity: 0, offsetDistance: '100%', offset: (route.duration + 0.1) / period },
            { opacity: 0, offsetDistance: '100%', offset: 1 },
          ],
          {
            duration: period * 1000,
            delay: route.start * 1000,
            iterations: Infinity,
            easing: 'linear',
          },
        ),
      );
    }
    for (const module of this.flow().modules) {
      const outline = this.host.querySelector('[data-module="' + module.id + '"]')!;
      this.animations.push(
        outline.animate(
          [
            { opacity: 0, offset: 0 },
            { opacity: 0.9, offset: 0.015 },
            { opacity: 0.9, offset: 0.045 },
            { opacity: 0, offset: 0.08 },
            { opacity: 0, offset: 1 },
          ],
          { duration: period * 1000, delay: module.start * 1000, iterations: Infinity },
        ),
      );
    }
    this.animations.forEach((animation) => (this.running() ? animation.play() : animation.pause()));
  }
}
