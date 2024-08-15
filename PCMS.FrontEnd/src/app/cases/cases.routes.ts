import { Routes } from '@angular/router';
import { CasesHomePageComponent } from './home/cases-home-page.component';
import { CasesPageComponent } from './cases-page.component';

export const CASES_ROUTES: Routes = [
  {
    path: '',
    component: CasesPageComponent,
    children: [
      {
        path: '',
        component: CasesHomePageComponent,
        title: 'PCMS - Cases',
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.routes').then((m) => m.REPORT_ROUTES),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search-page.component').then(
            (m) => m.SearchPageComponent
          ),
        title: 'PCMS - Search',
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./create/create-case-page.component').then(
            (m) => m.CreateCasePageComponent
          ),
        title: 'PCMS - Create A Case',
      },
    ],
  },
];
