import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from '../../../../grid/grid.component';
import { ColDef } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-department-assign-page',
  standalone: true,
  imports: [GridComponent, MatButtonModule],
  templateUrl: './department-assign-page.component.html',
  styleUrl: './department-assign-page.component.scss',
})
export class DepartmentAssignPageComponent implements OnInit {
  departmentId: any;

  columnDefs: ColDef[] = [
    { headerCheckboxSelection: true, checkboxSelection: true },
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Rank', field: 'rank' },
  ];

  rowData = [
    { id: 1, name: 'Officer John Doe', rank: 'Sergeant' },
    { id: 2, name: 'Officer Jane Smith', rank: 'Lieutenant' },
    { id: 3, name: 'Officer Emily Davis', rank: 'Officer' },
  ];

  selectedOfficers: any[] = [];

  handleSelectionChanged(selectedOfficers: any[]): void {
    this.selectedOfficers = selectedOfficers;
    console.log('Selected Officers:', this.selectedOfficers);
  }
  
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.departmentId = params.get('id');
    });
    this.titleService.setTitle(
      'PCMS - Assign Officers for ' + this.departmentId
    );
  }
}
