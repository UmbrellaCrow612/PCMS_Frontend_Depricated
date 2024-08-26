import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../../core/grid/grid.component';

@Component({
  selector: 'app-officers-page',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    GridComponent,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './officers-page.component.html',
  styleUrl: './officers-page.component.scss',
})
export class OfficersPageComponent {
  isPageLoading: boolean = true;

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Mike Jhon', model: '1234', price: 321 },
    { make: 'Mike Jhon', model: '1234', price: 321 },
    { make: 'Mike Jhon', model: '1234', price: 321 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onRowClicked(rowData: any): void {
    this.router.navigate([rowData.make], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.loadOfficersPageData();
  }

  loadOfficersPageData() {
    this.isPageLoading = false;
  }
}
