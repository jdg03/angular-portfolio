import { Component, HostListener, computed, signal, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge';
import { GlowingButtonComponent } from '../../shared/components/glowing-button/glowing-button';
import { ExperienceComponent } from '../experience/experience';
import { ProjectsComponent } from '../projects/projects';
import { TechnologiesComponent } from '../technologies/technologies';
import { CertificationsComponent } from '../certifications/certifications';
import { ReadingsComponent } from '../readings/readings';
import { Technology } from '../../core/models/technology.model';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink, 
    GlassCardComponent, 
    TechBadgeComponent, 
    GlowingButtonComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    TechnologiesComponent,
    CertificationsComponent,
    ReadingsComponent
  ],
  templateUrl: './landing.html'
})
export class LandingComponent implements OnInit {
  private readonly translationService = inject(TranslationService);
  private readonly meta = inject(Meta);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Portafolio profesional de José González, Ingeniero en Sistemas. Soluciones en desarrollo de software, bases de datos y computación en la nube.' });
    this.meta.updateTag({ property: 'og:title', content: 'José González | Ingeniero en Sistemas' });
    this.meta.updateTag({ property: 'og:description', content: 'Portafolio profesional de José González. Conoce mi experiencia, proyectos y biblioteca técnica de lecturas.' });
  }

  // Signals capturing normalized mouse coordinates (from 0.0 to 1.0)
  private readonly mouseX = signal<number>(0.5);
  private readonly mouseY = signal<number>(0.5);

  // HostListener capturing cursor movements on the Landing viewport
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    this.mouseX.set(x);
    this.mouseY.set(y);
  }

  // Computed Signal: Generates smooth parallax translate properties for the background glow
  protected readonly glowTransform = computed(() => {
    const xOffset = (this.mouseX() - 0.5) * 35; // Maximum 35px translation
    const yOffset = (this.mouseY() - 0.5) * 35;
    return `translate(${xOffset}px, ${yOffset}px)`;
  });

  // Mock technologies data for the Data Management Bento card
  protected readonly dbTechs: Technology[] = [
    { name: 'PostgreSQL', class: 'border-cyan-500/20 text-cyan-300 bg-cyan-500/5', icon: '' },
    { name: 'MongoDB', class: 'border-green-500/20 text-green-300 bg-green-500/5', icon: '' }
  ];

  // Mock technologies data for the Backend Development Bento card
  protected readonly devTechs: Technology[] = [
    { name: 'Node.js', class: 'border-emerald-500/20 text-emerald-300 bg-emerald-500/5', icon: 'NodeJs' },
    { name: 'Go', class: 'border-blue-500/20 text-blue-300 bg-blue-500/5', icon: '' }
  ];
}
