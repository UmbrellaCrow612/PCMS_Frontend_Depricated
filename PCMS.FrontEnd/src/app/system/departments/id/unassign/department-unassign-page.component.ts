import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../../../grid/grid.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-department-unassign-page',
  standalone: true,
  imports: [GridComponent, MatButtonModule],
  templateUrl: './department-unassign-page.component.html',
  styleUrl: './department-unassign-page.component.scss',
})
export class DepartmentUnassignPageComponent implements OnInit {
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
      'PCMS - Unassign Officers for ' + this.departmentId
    );
  }
}
