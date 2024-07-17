import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchCasesPageComponent } from './search-cases-page/search-cases-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, title: "PCMS - Login"},
  { path: 'search', component: SearchCasesPageComponent,  title: "PCMS - Search Cases" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
