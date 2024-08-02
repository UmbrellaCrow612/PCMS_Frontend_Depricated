import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  MatDrawerMode,
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {
  MatMenuTrigger,
  MatMenu,
  MatMenuContent,
  MatMenuItem,
} from '@angular/material/menu';
import { MatBadge } from '@angular/material/badge';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  standalone: true,
  imports: [
    MatProgressSpinner,
    MatDrawerContainer,
    MatDrawer,
    MatIconButton,
    MatIcon,
    MatAnchor,
    RouterLink,
    MatDrawerContent,
    MatToolbar,
    MatBadge,
    MatMenuTrigger,
    MatMenu,
    MatMenuContent,
    MatMenuItem,
    RouterOutlet,
  ],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  isSideNavOpen = true;
  destroyed = new Subject<void>();
  drawerMode: MatDrawerMode = 'side';
  isLoading = true;

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
    this.loadDashboardData();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  setSideNavPrefOption() {
    const pref = localStorage.getItem('sideNavOpenPref');

    if (pref !== null) {
      this.isSideNavOpen = pref === 'true';
    } else {
      localStorage.setItem('sideNavOpenPref', this.isSideNavOpen.toString());
    }
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    localStorage.setItem('sideNavOpenPref', this.isSideNavOpen.toString());
  }

  loadDashboardData() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
}
