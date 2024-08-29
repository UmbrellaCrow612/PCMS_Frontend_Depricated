import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-profile-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './nav-profile-menu.component.html',
  styleUrl: './nav-profile-menu.component.scss',
})
export class NavProfileMenuComponent {
  constructor(private router: Router) {}

  isCurrentUrl(url: string): boolean {
    return this.router.url === url;
  }
}
