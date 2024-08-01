import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
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
    this.isLoading = false;
  }
}
