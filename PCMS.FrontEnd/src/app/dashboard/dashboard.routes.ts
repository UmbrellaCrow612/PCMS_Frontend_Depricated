import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHomePageComponent } from './home/dashboard-home-page.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        title: 'PCMS - Dashboard',
        component: DashboardHomePageComponent,
      },
      {
        path: 'my-dashboard',
        title: 'PCMS - My Dashboard',
        loadComponent: () =>
          import('./my-dashboard/my-dashboard-page.component').then(
            (m) => m.MyDashboardPageComponent
          ),
      },
      {
        path: 'incident-analysis',
        title: 'PCMS - Incident-analysis',
        loadComponent: () =>
          import('./incident-analysis/incident-analysis-page.component').then(
            (m) => m.IncidentAnalysisPageComponent
          ),
      },
    ],
  },
];
