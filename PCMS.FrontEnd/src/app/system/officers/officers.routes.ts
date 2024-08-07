import { Routes } from '@angular/router';
import { OfficersPageComponent } from './officers-page.component';

export const OFFICERS_ROUTES: Routes = [
  {
    path: '',
    component: OfficersPageComponent,
    title: 'PCMS - Officers',
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create-officer-page.component').then(
        (m) => m.CreateOfficerPageComponent
      ),
    title: 'PCMS - Create A Officer',
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./id/id-routes.routes').then((m) => m.OFFICERS_ID_ROUTES),
  },
];
