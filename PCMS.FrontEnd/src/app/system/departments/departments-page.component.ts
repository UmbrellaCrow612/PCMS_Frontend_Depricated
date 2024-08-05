import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../grid/grid.component';

@Component({
  selector: 'app-departments-page',
  standalone: true,
  imports: [MatProgressSpinnerModule, GridComponent],
  templateUrl: './departments-page.component.html',
  styleUrl: './departments-page.component.scss',
})
export class DepartmentsPageComponent implements OnInit {
  isPageLoading: boolean = true;

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  ngOnInit(): void {
    this.loadDepartmentsPageData();
  }

  loadDepartmentsPageData() {
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000);
  }
}
