import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LoginPageComponent } from './views/login/login-page.component';
import { SearchCasesPageComponent } from './views/search/search-cases-page.component';
import { HomePageComponent } from './views/home/home-page.component';
import { NotFoundPageComponent } from './views/not-found/not-found-page.component';
import { ErrorDialogComponent } from './errors/error-dialog.component';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { errorHandlerFactory } from './errors/error-handler.factory';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchCasesPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ErrorDialogComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    GlobalErrorHandler,
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory,
      deps: [GlobalErrorHandler],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
