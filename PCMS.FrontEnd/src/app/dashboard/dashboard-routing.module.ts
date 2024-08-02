import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHomePageComponent } from './home/dashboard-home-page.component';
import { MyDashboardPageComponent } from './my-dashboard/my-dashboard-page.component';
import { IncidentAnalysisPageComponent } from './incident-analysis/incident-analysis-page.component';

const routes: Routes = [
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
        component: IncidentAnalysisPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
