import { Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsPageComponent,
    children: [
      {
        path: '',
        component: ProfilePageComponent,
        title: 'PCMS - Profile',
      },
    ],
  },
];
