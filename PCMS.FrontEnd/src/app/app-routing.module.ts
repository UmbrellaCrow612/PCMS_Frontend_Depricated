import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login/login-page.component';
import { SearchCasesPageComponent } from './views/search/search-cases-page.component';
import { DashBoardPageComponent } from './views/dashboard/dash-board-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, title: 'PCMS - Login' },
  {
    path: 'search',
    component: SearchCasesPageComponent,
    title: 'PCMS - Search Cases',
  },
  {
    path: 'dashboard',
    component: DashBoardPageComponent,
    title: 'PCMS - Personal Dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
