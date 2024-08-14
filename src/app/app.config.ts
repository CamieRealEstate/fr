import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { statusInterceptor, provideTranslate } from '../lib';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([statusInterceptor])),
    provideRouter(appRoutes), 
    provideTranslate(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
