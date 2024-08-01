import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHomePageComponent } from './home/dashboard-home-page.component';
import { MyDashboardPageComponent } from './my-dashboard/my-dashboard-page.component';
import { IncidentAnalysisPageComponent } from './incident-analysis/incident-analysis-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'PCMS - Dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        component: DashboardHomePageComponent,
      },
      {
        path: 'my-dashboard',
        component: MyDashboardPageComponent,
      },
      {
        path: 'incident-analysis',
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
