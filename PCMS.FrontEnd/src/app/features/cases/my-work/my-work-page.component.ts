import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../../core/grid/grid.component';
@Component({
  selector: 'app-my-work-page',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './my-work-page.component.html',
  styleUrl: './my-work-page.component.scss',
})
export class MyWorkPageComponent {
  columnDefs: ColDef[] = [
    { field: 'caseNumber' },
    { field: 'caseType' },
    { field: 'dateOpened' },
  ];

  rowData = [
    { caseNumber: 'CA32134', caseType: 'Homicide', dateOpened: '2024-08-15' },
    { caseNumber: 'CA334', caseType: 'Theft', dateOpened: '2024-08-17' },
    { caseNumber: 'CA2134', caseType: 'Assault', dateOpened: '2024-08-18' },
    {
      caseNumber: 'CA4532',
      caseType: 'Missing Person',
      dateOpened: '2024-08-19',
    },
    { caseNumber: 'CA6789', caseType: 'Burglary', dateOpened: '2024-08-20' },
  ];
}
