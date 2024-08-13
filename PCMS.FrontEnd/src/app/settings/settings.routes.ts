import { Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsPageComponent,
    title: 'PCMS - Settings',
  },
  // This will be the wrapper around every page and render children inside
];
