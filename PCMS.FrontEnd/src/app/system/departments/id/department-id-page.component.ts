import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GridComponent } from '../../../grid/grid.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-department-id-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    GridComponent,
    RouterLink
  ],
  templateUrl: './department-id-page.component.html',
  styleUrl: './department-id-page.component.scss',
})
export class DepartmentIdPageComponent implements OnInit {
  isPageLoading: boolean = true;
  // Have states for different views like error , not found etc
  departmentId: any; // set the dep name to the title
  department: any;

  editedDepartmentForm = new FormGroup({
    name: new FormControl('123456', [
      Validators.minLength(5),
      Validators.maxLength(55),
      Validators.required,
    ]),
    description: new FormControl('123456', [
      Validators.minLength(5),
      Validators.maxLength(150),
      Validators.required,
    ]),
    shortCode: new FormControl('1234', [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
  });

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  };

  officers = [
    { id: 1, name: 'John Doe', badgeNumber: '12345' },
    { id: 2, name: 'Jane Smith', badgeNumber: '67890' },
    // Add more officer data as needed
  ];

  columns = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Badge Number', field: 'badgeNumber' },
  ];

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.isPageLoading = false;
    this.route.paramMap.subscribe((params) => {
      this.departmentId = params.get('id');
    });
    this.titleService.setTitle(this.departmentId);
  }

  onSubmit() {}
}
