import { Routes } from '@angular/router';
import { DepartmentsPageComponent } from './departments-page.component';

export const DEPARTMENTS_ROUTES: Routes = [
  {
    path: '',
    component: DepartmentsPageComponent,
    title: 'PCMS - Departments',
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create-department-page.component').then(
        (m) => m.CreateDepartmentPageComponent
      ),
    title: 'PCMS - Create A Department',
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./id/id-routes.routes').then((m) => m.DEPARTMENT_ID_ROUTES),
  },
];
