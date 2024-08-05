import { Routes } from '@angular/router';
import { DepartmentsPageComponent } from './departments-page.component';

export const DEPARTMENT_ROUTES: Routes = [
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
    loadComponent: () =>
      import('./id/department-id-page.component').then(
        (m) => m.DepartmentIdPageComponent
      ),
    title: `PCMS - Department`,
  },
];
