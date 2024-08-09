import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  ColDef,
  SelectionChangedEvent,
  RowClickedEvent,
  IRowNode,
} from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ThemeService } from '../theme/theme-service.service';
import { Subscription } from 'rxjs';

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
      [rowSelection]="rowSelection"
      [rowMultiSelectWithClick]="rowMultiSelectWithClick"
      [suppressRowDeselection]="suppressRowDeselection"
      [suppressRowClickSelection]="suppressRowClickSelection"
      (selectionChanged)="onSelectionChanged($event)"
      (rowClicked)="onRowClicked($event)"
      [isRowSelectable]="isRowSelectable"
    >
    </ag-grid-angular>
  `,
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
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
  @Input() rowSelection: 'single' | 'multiple' = 'single';
  @Input() rowMultiSelectWithClick = false;
  @Input() suppressRowDeselection = false;
  @Input() suppressRowClickSelection = false;
  @Input() isRowSelectable: (params: IRowNode<any>) => boolean = () => true;

  @Output() selectionChanged = new EventEmitter<any[]>();
  @Output() rowClicked = new EventEmitter<any>();

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

  onSelectionChanged(event: SelectionChangedEvent): void {
    const selectedRows = event.api.getSelectedRows();
    this.selectionChanged.emit(selectedRows);
  }

  onRowClicked(event: RowClickedEvent): void {
    this.rowClicked.emit(event.data);
  }
}
