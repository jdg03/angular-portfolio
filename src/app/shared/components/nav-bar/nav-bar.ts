import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon';
import { TranslationService } from '../../../core/services/translation.service';
import { BackgroundSwitcherComponent } from '../backgrounds/background-switcher/background-switcher';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, SvgIconComponent, BackgroundSwitcherComponent],
  templateUrl: './nav-bar.html',
})
export class NavBarComponent {
  protected readonly navItems = [
    { id: 'inicio', icon: 'person', label: 'navInicio' },
    { id: 'experiencia', icon: 'work', label: 'navExperiencia' },
    { id: 'proyectos', icon: 'grid_view', label: 'navProyectos' },
    { id: 'tecnologias', icon: 'code', label: 'navTecnologias' },
    { id: 'certificaciones', icon: 'workspace_premium', label: 'navCertificaciones' },
    { id: 'credenciales', icon: 'verified', label: 'navCredenciales' },
    { id: 'lecturas', icon: 'menu_book', label: 'navLecturas' },
  ] as const;
  private readonly router = inject(Router);
  protected readonly translationService = inject(TranslationService);

  // Active section inside the Landing page or general route
  protected readonly activeSection = signal<string>('inicio');

  // Mobile menu control state
  protected readonly isMenuOpen = signal<boolean>(false);

  // Shortcuts for templates
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Only track scroll section if we are on the landing page (url is '/' or empty)
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl !== '/' && currentUrl !== '') {
      this.activeSection.set('');
      return;
    }

    const sections = [
      'inicio',
      'experiencia',
      'proyectos',
      'tecnologias',
      'certificaciones',
      'credenciales',
      'lecturas',
    ];
    const scrollPosition = window.scrollY + 200; // Offset for trigger

    // If we are at the very top, highlight "inicio"
    if (window.scrollY < 50) {
      this.activeSection.set('inicio');
      return;
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  // Check if a section is active
  isSectionActive(section: string): boolean {
    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === '/lecturas') {
      return section === 'lecturas';
    }

    return this.activeSection() === section;
  }

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (!this.isMenuOpen()) return;
    this.closeMenu();
    document.querySelector<HTMLButtonElement>('.mobile-bar button')?.focus();
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
