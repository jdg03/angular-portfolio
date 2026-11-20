import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'laboratorio/portadas',
    loadComponent: () => import('./features/cover-lab/cover-lab').then((m) => m.CoverLab),
    title: 'Portadas en movimiento | José González',
  },
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then((m) => m.LandingComponent),
    title: 'José González | Systems Engineer Portfolio',
  },
  {
    path: 'lecturas',
    loadComponent: () => import('./features/readings/readings').then((m) => m.ReadingsComponent),
    title: 'Biblioteca | José González',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
