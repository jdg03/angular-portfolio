import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './nav-bar.html'
})
export class NavBarComponent {
  private readonly router = inject(Router);
  protected readonly translationService = inject(TranslationService);

  // Active classes with premium glow-dot indicators
  protected readonly activeClasses = "text-label-mono font-mono text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full after:shadow-[0_0_8px_#d2bbff] transition-all hover:opacity-80 cursor-pointer";
  // Inactive classes
  protected readonly inactiveClasses = "text-label-mono font-mono text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer";

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

    const sections = ['inicio', 'experiencia', 'proyectos', 'tecnologias', 'certificaciones', 'lecturas'];
    const scrollPosition = window.scrollY + 200; // Offset for trigger

    // If we are at the very top, highlight "inicio"
    if (window.scrollY < 50) {
      this.activeSection.set('inicio');
      return;
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
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
    this.isMenuOpen.update(prev => !prev);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
