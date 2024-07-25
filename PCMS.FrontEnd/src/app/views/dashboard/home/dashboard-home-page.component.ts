import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrl: './dashboard-home-page.component.css',
})
export class DashboardHomePageComponent implements OnInit {
  isLoading = true;

  loadDashboardHomePageData() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.loadDashboardHomePageData();
  }
}
