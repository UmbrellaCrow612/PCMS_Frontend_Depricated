import { Routes } from '@angular/router';
import { DepartmentIdPageComponent } from './department-id-page.component';

export const DEPARTMENT_ID_ROUTES: Routes = [
  {
    path: '',
    component: DepartmentIdPageComponent,
  },
  {
    path: 'assign',
    loadComponent: () =>
      import('./assign/department-assign-page.component').then(
        (m) => m.DepartmentAssignPageComponent
      ),
  },
  {
    path: 'unassign',
    loadComponent: () =>
      import('./unassign/department-unassign-page.component').then(
        (m) => m.DepartmentUnassignPageComponent
      ),
  },
];
