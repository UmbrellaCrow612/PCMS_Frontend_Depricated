import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../grid/grid.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [MatButtonModule, GridComponent, RouterLink],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.scss',
})
export class ReportsPageComponent {
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
}
