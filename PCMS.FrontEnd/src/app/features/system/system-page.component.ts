import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { NavProfileMenuComponent } from '../../shared/nav-profile-menu/nav-profile-menu.component';

@Component({
  selector: 'app-system-page',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
    NavProfileMenuComponent,
    MatBadgeModule,
    RouterLinkActive
  ],
  templateUrl: './system-page.component.html',
  styleUrl: './system-page.component.scss',
})
export class SystemPageComponent implements OnInit {
  isSideNavOpen = true;
  isLoading: boolean = true;
  drawerMode: MatDrawerMode = 'side';
  destroyed = new Subject<void>();

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        if (result.matches) {
          this.drawerMode = 'over';
        } else {
          this.drawerMode = 'side';
        }
      });
  }

  ngOnInit(): void {
    this.setSideNavPrefOption();
    this.loadSystemData();
  }

  setSideNavPrefOption() {
    const pref = localStorage.getItem('SystemSideNavOpenPref');

    if (pref !== null) {
      this.isSideNavOpen = pref === 'true';
    } else {
      localStorage.setItem(
        'SystemSideNavOpenPref',
        this.isSideNavOpen.toString()
      );
    }
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    localStorage.setItem(
      'SystemSideNavOpenPref',
      this.isSideNavOpen.toString()
    );
  }

  loadSystemData() {
    this.isLoading = false;
  }
}
