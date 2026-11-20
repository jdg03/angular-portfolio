import { afterNextRender, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { CicdDiagram } from '../../shared/components/cicd-diagram/cicd-diagram';
import { DiagramVariant } from '../../shared/components/cicd-diagram/cicd-graph';

@Component({
  selector: 'app-cover-lab',
  imports: [RouterLink, CicdDiagram],
  templateUrl: './cover-lab.html',
  styleUrl: './cover-lab.css',
})
export class CoverLab {
  protected readonly lang = inject(TranslationService).lang;
  protected readonly selected = signal<DiagramVariant>('css');
  protected readonly paused = signal(false);
  protected readonly restartToken = signal(0);
  protected readonly expanded = signal(false);
  protected readonly showOriginal = signal(false);
  protected readonly reduced = signal(false);
  protected readonly motionAllowed = signal(false);
  protected readonly staticPreview = computed(() => this.reduced() && !this.motionAllowed());
  protected readonly engineUnavailable = signal(false);
  private readonly meta = inject(Meta);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly variants: {
    id: DiagramVariant;
    name: { es: string; en: string };
    tool: string;
    description: { es: string; en: string };
  }[] = [
    {
      id: 'css',
      name: { es: 'Secuencia esencial', en: 'Essential sequence' },
      tool: 'SVG + CSS',
      description: {
        es: 'Un cambio recorre las etapas de integración, despliegue y monitoreo. Una lectura sencilla y cercana a la portada original.',
        en: 'A change travels through integration, deployment and monitoring. A simple sequence close to the original cover.',
      },
    },
    {
      id: 'gsap',
      name: { es: 'Pruebas en paralelo', en: 'Parallel tests' },
      tool: 'SVG + GSAP',
      description: {
        es: 'Las pruebas unitarias, de integración y seguridad se ejecutan en paralelo. El flujo se reúne antes de pasar a staging y producción.',
        en: 'Unit, integration and security tests run in parallel. The flow rejoins before staging and production.',
      },
    },
    {
      id: 'native',
      name: { es: 'Ciclo de entrega', en: 'Delivery cycle' },
      tool: 'SVG + Web Animations API',
      description: {
        es: 'El recorrido regresa al código con feedback: integrar, validar, entregar y observar como un proceso continuo.',
        en: 'The journey returns to code with feedback: integrate, validate, deliver and observe as a continuous process.',
      },
    },
  ];
  protected current() {
    return this.variants.find((item) => item.id === this.selected())!;
  }
  constructor() {
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    this.destroyRef.onDestroy(() => {
      // The prerendered lab already contains this tag when hydration starts.
      this.meta.removeTag('name="robots"');
    });
    afterNextRender(() => {
      const media = matchMedia('(prefers-reduced-motion: reduce)');
      const update = () => this.reduced.set(media.matches);
      update();
      media.addEventListener('change', update);
      this.destroyRef.onDestroy(() => media.removeEventListener('change', update));
    });
  }
  protected select(id: DiagramVariant) {
    this.selected.set(id);
    this.restartToken.update((value) => value + 1);
  }
  protected togglePlayback() {
    if (this.staticPreview()) {
      this.motionAllowed.set(true);
      this.paused.set(false);
    } else {
      this.paused.update((value) => !value);
    }
  }
  protected restart() {
    if (this.reduced()) {
      this.motionAllowed.set(true);
      this.paused.set(false);
    }
    this.restartToken.update((value) => value + 1);
  }
  protected useDevicePreference() {
    this.motionAllowed.set(false);
    this.paused.set(false);
  }
}
