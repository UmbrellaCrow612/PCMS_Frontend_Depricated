import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-departments-page',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './departments-page.component.html',
  styleUrl: './departments-page.component.scss',
})
export class DepartmentsPageComponent implements OnInit {
  isPageLoading: boolean = true;
  
  ngOnInit(): void {
    this.loadDepartmentsPageData();
  }

  loadDepartmentsPageData() {
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000);
  }
}
