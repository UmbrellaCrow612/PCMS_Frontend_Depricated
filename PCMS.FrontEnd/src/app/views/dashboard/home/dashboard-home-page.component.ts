import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent implements OnInit, OnDestroy {
  isLoading = true;
  destroyed = new Subject<void>();
  cols: number = 3;
  rowHeight: string | number = '25em';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        if (result.matches) {
          this.cols = 1;
          this.rowHeight = '27em';
        } else {
          this.cols = 3;
          this.rowHeight = '25em';
        }
      });
  }

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  loadDashboardHomePageData() {
    this.isLoading = false;
  }
}
