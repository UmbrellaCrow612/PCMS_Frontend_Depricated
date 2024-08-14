import { Routes } from '@angular/router';
import { ReportsPageComponent } from './reports-page.component';
import { CreatePageComponent } from './create/create-page.component';

export const REPORT_ROUTES: Routes = [
  {
    path: '',
    component: ReportsPageComponent,
    title: 'PCMS - Reports',
  },
  {
    path: 'create',
    component: CreatePageComponent,
    title: 'PCMS - Create A Report',
  },
];
