import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { PROJECTS } from '../../core/constants/projects';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from './project-card';

import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  private readonly track = viewChild<ElementRef<HTMLElement>>('projectTrack');
  private readonly destroyRef = inject(DestroyRef);
  protected readonly canPrevious = signal(false);
  protected readonly canNext = signal(false);

  // Signal base with all projects
  private readonly allProjects = signal<Project[]>(PROJECTS);

  // Reactive signal for selected filter ('ALL', 'React', 'Angular', 'Node.js', etc.)
  protected readonly activeFilter = signal<string>('ALL');

  // Static list of filter options displayed in the UI
  protected readonly filterOptions = [
    'ALL',
    'Angular',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    '.NET',
  ];

  // Computed Signal: Recalculates and filters projects list when activeFilter changes
  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.allProjects();

    if (filter === 'ALL') {
      return list;
    }

    const filterLower = filter.toLowerCase();

    return list.filter((project) =>
      project.technologies.some((tech) => {
        const techNameLower = tech.name.toLowerCase();

        // Custom robust mapping for .NET filter
        if (filterLower === '.net') {
          return techNameLower.includes('.net') || techNameLower.includes('net core');
        }

        return techNameLower === filterLower;
      }),
    );
  });

  constructor() {
    afterRenderEffect(() => {
      this.filteredProjects();
      const track = this.track()?.nativeElement;
      if (!track) return;
      track.scrollTo({ left: 0, behavior: 'instant' });
      untracked(() => this.updateNavigation());
    });
    afterNextRender(() => {
      const track = this.track()?.nativeElement;
      if (!track) return;
      const observer = new ResizeObserver(() => this.updateNavigation());
      observer.observe(track);
      this.destroyRef.onDestroy(() => observer.disconnect());
      this.updateNavigation();
    });
  }

  protected updateNavigation() {
    const track = this.track()?.nativeElement;
    if (!track) return;
    this.canPrevious.set(track.scrollLeft > 2);
    this.canNext.set(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  }

  protected move(direction: -1 | 1) {
    const track = this.track()?.nativeElement;
    const card = track?.querySelector('app-project-card');
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    this.scrollTo((Math.round(track.scrollLeft / step) + direction) * step);
  }

  protected onTrackKey(event: KeyboardEvent) {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.move(event.key === 'ArrowLeft' ? -1 : 1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      this.scrollTo(event.key === 'Home' ? 0 : this.track()!.nativeElement.scrollWidth);
    }
  }

  private scrollTo(left: number) {
    const track = this.track()?.nativeElement;
    if (!track) return;
    const reduce = track.ownerDocument.defaultView?.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    track.scrollTo({ left, behavior: reduce ? 'instant' : 'smooth' });
  }

  // Toggle active filter state
  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
