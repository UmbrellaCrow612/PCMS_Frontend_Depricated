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
];
