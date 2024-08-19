import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    CommonModule,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class SearchPageComponent {
  caseStatusOptions = [
    'Any',
    'Open',
    'Closed',
    'Pending',
    'Under Investigation',
  ];

  casePriorityOptions = ['Any', 'Low', 'Medium', 'High', 'Critical'];

  incidentTypeOptions = [
    'Any',
    'Theft',
    'Burglary',
    'Robbery',
    'Assault',
    'Homicide',
    'Sexual Assault',
  ];

  cityOptions = ['Any', 'Sheffield', 'London'];

  caseNumberForm = new FormGroup({
    caseNumber: new FormControl('', [Validators.required]),
  });

  caseFilterForm = new FormGroup({
    caseStatus: new FormControl<string>(this.caseStatusOptions[0], [
      Validators.required,
    ]),
    dateRange: new FormGroup({
      start: new FormControl<Date>(this.getYesterday(), [Validators.required]),
      end: new FormControl<Date>(new Date(), [Validators.required]),
    }),
    priority: new FormControl<string>(this.casePriorityOptions[0], [
      Validators.required,
    ]),
    incidentType: new FormControl<string>(this.incidentTypeOptions[0], [
      Validators.required,
    ]),
    city: new FormControl<string>(this.cityOptions[0], [Validators.required]),
  });

  onCaseNumberFormSubmit() {}

  onCaseFilterFormSubmit() {}

  private getYesterday(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  private readonly _currentDate = new Date();
  readonly dateRangeMinDate = new Date(
    this._currentDate.getFullYear() - 20,
    this._currentDate.getMonth(),
    this._currentDate.getDate()
  );
  readonly dateRangeMaxDate = new Date(this._currentDate);
}
