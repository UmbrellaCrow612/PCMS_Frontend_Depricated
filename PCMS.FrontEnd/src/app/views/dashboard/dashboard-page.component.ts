import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent implements OnInit {
  isSideNavOpen = true;

  ngOnInit(): void {
    this.setSideNavPrefOption();
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
}
