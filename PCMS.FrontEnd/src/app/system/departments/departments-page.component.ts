import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../grid/grid.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-departments-page',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    GridComponent,
    MatButtonModule,
    RouterLink,
  ],
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  onRowClicked(rowData: any): void {
    this.router.navigate([rowData.make], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.loadDepartmentsPageData();
  }

  loadDepartmentsPageData() {
    this.isPageLoading = false;
  }
}
