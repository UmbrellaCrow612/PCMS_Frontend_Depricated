import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Case } from '../../interfaces';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-create-report-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  templateUrl: './create-report-page.component.html',
  styleUrl: './create-report-page.component.scss',
})
export class CreateReportPageComponent {
  @ViewChild('caseInput')
  caseInput!: ElementRef<HTMLInputElement>;

  cases: Case[] = [
    {
      id: 123,
      name: 'One Case',
    },
    {
      id: 321,
      name: 'Two Case',
    },
  ];
  filteredCasesOptions: Case[] = [];

  reportForm = new FormGroup({
    case: new FormControl('', [Validators.required]),
    occurrenceDate: new FormControl(new Date(), [Validators.required]),
    incident: new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      occurrenceDate: new FormControl(new Date(), [Validators.required]),
      location: new FormControl('', [Validators.required]),
    }),
    details: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.filteredCasesOptions = this.cases.slice();
  }

  filterCases() {
    const filterValue = this.caseInput.nativeElement.value.toLowerCase();
    this.filteredCasesOptions = this.cases.filter((o) =>
      o.name.toLowerCase().includes(filterValue)
    );
  }
}
