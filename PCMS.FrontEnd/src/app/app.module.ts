import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LoginPageComponent } from './views/login/login-page.component';
import { SearchCasesPageComponent } from './views/search/search-cases-page.component';
import { HomePageComponent } from './views/home/home-page.component';
import { NotFoundPageComponent } from './views/not-found/not-found-page.component';
import { DashboardPageComponent } from './views/dashboard/dashboard-page.component';
import { DashboardHomePageComponent } from './views/dashboard/home/dashboard-home-page.component';
import { ErrorDialogComponent } from './errors/error-dialog.component';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { errorHandlerFactory } from './errors/error-handler.factory';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MyDashboardPageComponent } from './views/dashboard/my-dashboard/my-dashboard-page.component';
import { IncidentAnalysisPageComponent } from './views/dashboard/incident-analysis/incident-analysis-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchCasesPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    DashboardPageComponent,
    DashboardHomePageComponent,
    ErrorDialogComponent,
    ConfirmationComponent,
    MyDashboardPageComponent,
    IncidentAnalysisPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    GlobalErrorHandler,
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory,
      deps: [GlobalErrorHandler]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
