import { Routes } from '@angular/router';
import { SystemPageComponent } from './system-page.component';
import { SystemHomePageComponent } from './home/system-home-page.component';

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    component: SystemPageComponent,
    children: [
      {
        path: '',
        title: 'PCMS - System',
        component: SystemHomePageComponent,
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('./departments/departments.routes').then(
            (m) => m.DEPARTMENTS_ROUTES
          ),
      },
      {
        path: 'officers',
        loadChildren: () =>
          import('./officers/officers.routes').then((m) => m.OFFICERS_ROUTES),
      },
    ],
  },
];
