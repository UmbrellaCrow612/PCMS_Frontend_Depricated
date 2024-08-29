import { Routes } from '@angular/router';
import { ReportsPageComponent } from './reports-page.component';

export const REPORT_ROUTES: Routes = [
  {
    path: '',
    component: ReportsPageComponent,
    title: 'PCMS - Reports',
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create-report-page.component').then(
        (m) => m.CreateReportPageComponent
      ),
    title: 'PCMS - Create A Report',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search-reports-page.component').then(
        (m) => m.SearchReportsPageComponent
      ),
    title: 'PCMS - Search For A Report',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./id/report-id-page.component').then(
        (m) => m.ReportIdPageComponent
      ),
  },
];
