import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ThemeService } from '../theme/theme-service.service';
import { Subscription } from 'rxjs';

/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-material.css';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [class]="themeClass"
      [pagination]="pagination"
      [style]="gridStyles"
    >
    </ag-grid-angular>
  `,
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    flex: 1,
  };
  @Input() gridStyles: { [key: string]: string } = {
    width: '100%',
    height: '100%',
  };
  @Input() pagination: boolean = true;

  themeClass: string = 'ag-theme-material';
  private themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Subscribe to the theme service to apply the correct theme
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(
      (isDarkMode) => {
        this.themeClass = isDarkMode
          ? 'ag-theme-material-dark'
          : 'ag-theme-material';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
