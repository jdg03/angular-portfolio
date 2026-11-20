import { Component, computed, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ExperienceComponent } from '../experience/experience';
import { ProjectsComponent } from '../projects/projects';
import { TechnologiesComponent } from '../technologies/technologies';
import { CertificationsComponent } from '../certifications/certifications';
import { ReadingsComponent } from '../readings/readings';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon';
import { TranslationService } from '../../core/services/translation.service';
import { EXPERIENCE } from '../../core/constants/experience';
import { CREDENTIALS } from '../../core/constants/credentials';
import { Credentials } from '../credentials/credentials';
import { BadgeArtwork } from '../../shared/components/badge-artwork/badge-artwork';
import { Appearance } from '../../core/services/appearance';
import { CicdDiagram } from '../../shared/components/cicd-diagram/cicd-diagram';
import { ArchitectureCover } from '../../shared/components/architecture-cover/architecture-cover';
import { ArchitectureKind } from '../../shared/components/architecture-cover/architecture-flows';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    SvgIconComponent,
    ExperienceComponent,
    ProjectsComponent,
    TechnologiesComponent,
    CertificationsComponent,
    ReadingsComponent,
    Credentials,
    BadgeArtwork,
    CicdDiagram,
    ArchitectureCover,
  ],
  templateUrl: './landing.html',
})
export class LandingComponent implements OnInit {
  private readonly appearance = inject(Appearance);
  protected readonly isCicdCover = computed(() => this.appearance.theme() === 'light');
  protected readonly architectureKind = computed<ArchitectureKind>(() => {
    const theme = this.appearance.theme();
    return theme === 'purple' ? 'events' : theme === 'black' ? 'agents' : 'cloud';
  });
  private readonly translationService = inject(TranslationService);
  private readonly meta = inject(Meta);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = this.translationService.translate.bind(this.translationService);
  protected readonly currentExperience = EXPERIENCE[0];
  protected readonly featuredCredentials = CREDENTIALS.slice(0, 4);
  protected readonly credentialCount = CREDENTIALS.length;
  ngOnInit() {
    this.meta.updateTag({
      name: 'description',
      content:
        'Portafolio profesional de José González, Ingeniero en Sistemas. Desarrollo de software, bases de datos y computación en la nube.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'José González | Ingeniero en Sistemas' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Experiencia, proyectos y lecturas técnicas de José González.',
    });
  }
}
