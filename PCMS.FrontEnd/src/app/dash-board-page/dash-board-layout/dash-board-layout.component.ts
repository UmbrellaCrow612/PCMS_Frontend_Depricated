import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-layout',
  templateUrl: './dash-board-layout.component.html',
  styleUrl: './dash-board-layout.component.css',
})
export class DashBoardLayoutComponent implements OnInit {
  isSideNavOpen = true;

  ngOnInit() {
    const savedState = localStorage.getItem('isSideNavOpen');
    this.isSideNavOpen = savedState !== null ? JSON.parse(savedState) : true;
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    localStorage.setItem('isSideNavOpen', JSON.stringify(this.isSideNavOpen));
  }
}
