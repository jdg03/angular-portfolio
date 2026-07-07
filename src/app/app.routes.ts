import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then(m => m.LandingComponent),
    title: 'José González | Systems Engineer Portfolio'
  },
  {
    path: 'lecturas',
    loadComponent: () => import('./features/readings/readings').then(m => m.ReadingsComponent),
    title: 'Mis Lecturas | José González'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
