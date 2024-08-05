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
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() gridOptions: GridOptions = {};
  @Input() gridStyles: { [key: string]: string } = {};
  @Input() pagination: boolean = true;
 
  

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    flex: 1,
  };

  defaultGridStyles: { [key: string]: string } = {
    width: '100%',
    height: '100%',
  };

  themeClass: string = 'ag-theme-material';
  private themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Customize or extend the gridOptions here if necessary
    if (!this.gridOptions.defaultColDef) {
      this.gridOptions.defaultColDef = this.defaultColDef;
    }
    // Apply default styles if no gridStyles are provided
    this.gridStyles = { ...this.defaultGridStyles, ...this.gridStyles };

    // Subscribe to the theme service to apply the correct theme
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(isDarkMode => {
      this.themeClass = isDarkMode ? 'ag-theme-material-dark' : 'ag-theme-material';
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
