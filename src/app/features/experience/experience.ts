import { Component, HostListener, computed, signal } from '@angular/core';
import { EXPERIENCE } from '../../core/constants/experience';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';

import { TranslationService } from '../../core/services/translation.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [GlassCardComponent],
  templateUrl: './experience.html'
})
export class ExperienceComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Reactive signal containing the structured experiences array
  protected readonly experiences = signal(EXPERIENCE);

  // Normalized mouse cursor positions (from 0.0 to 1.0)
  private readonly mouseX = signal<number>(0.5);
  private readonly mouseY = signal<number>(0.5);

  // Listen to cursor movements in the Experience section viewport
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    this.mouseX.set(x);
    this.mouseY.set(y);
  }

  // Computed Signal: Generates translation values for the first slow background sphere
  protected readonly glow1Transform = computed(() => {
    const x = (this.mouseX() - 0.5) * 20; // Subtle drift up to 10px
    const y = (this.mouseY() - 0.5) * 20;
    return `translate(${x}px, ${y}px)`;
  });

  // Computed Signal: Generates translation values for the second faster background sphere
  protected readonly glow2Transform = computed(() => {
    const x = (this.mouseX() - 0.5) * 40; // Wider drift up to 20px
    const y = (this.mouseY() - 0.5) * 40;
    return `translate(${x}px, ${y}px)`;
  });
}
