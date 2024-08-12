/// <reference types="@angular/localize" />

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { errorHandlerFactory } from './app/errors/error-handler.factory';
import { ErrorHandler, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { GlobalErrorHandler } from './app/errors/global-error-handler';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    GlobalErrorHandler,
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory,
      deps: [GlobalErrorHandler],
    },
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
}).catch((err) => console.error(err));
