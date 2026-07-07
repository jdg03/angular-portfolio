import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../core/constants/projects';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from './project-card';

import { inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Signal base with all projects
  private readonly allProjects = signal<Project[]>(PROJECTS);

  // Reactive signal for selected filter ('ALL', 'React', 'Angular', 'Node.js', etc.)
  protected readonly activeFilter = signal<string>('ALL');

  // Static list of filter options displayed in the UI
  protected readonly filterOptions = ['ALL', 'Angular', 'React', 'TypeScript', 'Node.js', 'Python', '.NET'];

  // Computed Signal: Recalculates and filters projects list when activeFilter changes
  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.allProjects();

    if (filter === 'ALL') {
      return list;
    }

    const filterLower = filter.toLowerCase();

    return list.filter(project => 
      project.technologies.some(tech => {
        const techNameLower = tech.name.toLowerCase();
        
        // Custom robust mapping for .NET filter
        if (filterLower === '.net') {
          return techNameLower.includes('.net') || techNameLower.includes('net core');
        }
        
        return techNameLower === filterLower;
      })
    );
  });

  // Tailored aesthetic filter classes
  protected readonly activeFilterClasses = 'px-5 py-2.5 rounded-full bg-primary text-background font-sans text-[11px] font-bold tracking-wide shadow-[0_0_15px_rgba(210,187,255,0.4)] transition-all duration-300 cursor-pointer';
  protected readonly inactiveFilterClasses = 'px-5 py-2.5 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant font-sans text-[11px] font-semibold tracking-wide hover:text-white hover:border-primary/40 transition-all duration-300 cursor-pointer';

  // Toggle active filter state
  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
