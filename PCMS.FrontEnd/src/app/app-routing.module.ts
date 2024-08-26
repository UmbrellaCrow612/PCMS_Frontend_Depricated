import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./cases/cases.routes').then((m) => m.CASES_ROUTES),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
  },
  {
    path: 'system',
    loadChildren: () =>
      import('./system/system.routes').then((m) => m.SYSTEM_ROUTES),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.routes').then((m) => m.SETTINGS_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./errors/not-found/not-found-page.component').then(
        (m) => m.NotFoundPageComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
