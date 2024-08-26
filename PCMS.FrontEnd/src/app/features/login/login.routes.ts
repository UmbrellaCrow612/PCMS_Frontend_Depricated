import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    title: 'PCMS - Login'
  },
];