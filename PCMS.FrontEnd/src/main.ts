import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { errorHandlerFactory } from './app/errors/error-handler.factory';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { GlobalErrorHandler } from './app/errors/global-error-handler';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideNativeDateAdapter(),
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    GlobalErrorHandler,
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory,
      deps: [GlobalErrorHandler],
    },

  ],
}).catch((err) => console.error(err));
