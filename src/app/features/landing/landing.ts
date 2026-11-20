import { Component, computed, inject, OnInit } from '@angular/core';
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
import { SeoService } from '../../core/services/seo.service';

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
  private readonly seo = inject(SeoService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = this.translationService.translate.bind(this.translationService);
  protected readonly currentExperience = EXPERIENCE[0];
  protected readonly featuredCredentials = CREDENTIALS.slice(0, 4);
  protected readonly credentialCount = CREDENTIALS.length;
  ngOnInit() {
    this.seo.updatePage({
      path: '/',
      title: 'José González | Ingeniero en Sistemas y desarrollador cloud',
      description:
        'Portafolio profesional de José González, Ingeniero en Sistemas. Desarrollo de software, agentes de IA, integraciones, CI/CD, Docker, Python y Google Cloud.',
    });
  }
}
