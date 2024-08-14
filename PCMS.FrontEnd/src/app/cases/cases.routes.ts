import { Routes } from '@angular/router';
import { CasesHomePageComponent } from './home/cases-home-page.component';

export const CASES_ROUTES: Routes = [
  {
    path: '',
    component: CasesHomePageComponent,
    title: 'PCMS - Cases',
  },
];
