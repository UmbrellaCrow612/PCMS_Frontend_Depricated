import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login/login-page.component';
import { SearchCasesPageComponent } from './views/search/search-cases-page.component';
import { HomePageComponent } from './views/home/home-page.component';
import { NotFoundPageComponent } from './views/not-found/not-found-page.component';
import { DashboardPageComponent } from './views/dashboard/dashboard-page.component';
import { DashboardHomePageComponent } from './views/dashboard/home/dashboard-home-page.component';
import { MyDashboardPageComponent } from './views/dashboard/my-dashboard/my-dashboard-page.component';
import { IncidentAnalysisPageComponent } from './views/dashboard/incident-analysis/incident-analysis-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'dashboard',
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
  { path: 'login', component: LoginPageComponent, title: 'PCMS - Login' },
  {
    path: 'search',
    component: SearchCasesPageComponent,
    title: 'PCMS - Search Cases',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'PCMS - 404 Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
