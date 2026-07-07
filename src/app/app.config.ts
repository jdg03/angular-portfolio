import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideAngularQuery, QueryClient } from '@tanstack/angular-query-experimental';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(), // Map route path and query parameters to component Inputs/signals automatically
      withInMemoryScrolling({
        anchorScrolling: 'enabled',          // Native viewport scroll to anchors like #experiencia
        scrollPositionRestoration: 'enabled' // Restore user scroll position upon page navigation
      })
    ),
    provideAngularQuery(new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // Cache is fresh for 5 minutes
          gcTime: 1000 * 60 * 10,   // Cache stays in memory for 10 minutes after going unused
          refetchOnWindowFocus: false, // Turn off automatic refetch on window focus since this is a portfolio
        }
      }
    }))
  ]
};
