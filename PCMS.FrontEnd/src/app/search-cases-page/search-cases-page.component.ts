import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

interface CaseStatusOption {
  status: string;
}

interface CasePriorityOption {
  level: string;
}

@Component({
  selector: 'app-search-cases-page',
  templateUrl: './search-cases-page.component.html',
  styleUrl: './search-cases-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class SearchCasesPageComponent {
  SearchCaseNumberInput = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern(/^CA/),
  ]);

  /* Form group for optional fields  */

  CaseStatusOptions: CaseStatusOption[] = [
    { status: 'Open' },
    { status: 'Closed' },
    { status: 'Pending' },
    { status: 'Under Investigation' },
  ];

  CaseStatusSelectControl = new FormControl<CaseStatusOption | string>(
    this.CaseStatusOptions[0].status
  );

  CaseRangeDateFilter = (d: Date | null): boolean => {
    const date = d || new Date();
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();

    // Allow dates from 2020 up to and including the current year
    return year >= 2020 && year <= currentYear;
  };

  readonly CaseRangeDate = new FormGroup({
    start: new FormControl<Date>(this.getYesterday()),
    end: new FormControl<Date>(new Date()),
  });

  private getYesterday(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  CasePriorityOptions: CasePriorityOption[] = [
    {
      level: 'Low',
    },
    {
      level: 'Medium',
    },
    {
      level: 'High',
    },
    {
      level: 'Critical',
    },
  ];

  CasePrioritySelectControl = new FormControl<CasePriorityOption | string>(
    this.CasePriorityOptions[0].level
  );

  ClearForm() {
    this.SearchCaseNumberInput.setValue('');
    this.CaseStatusSelectControl.setValue(this.CaseStatusOptions[0].status);
    this.CaseRangeDate.setValue({
      start: this.getYesterday(),
      end: new Date(),
    });
    this.CasePrioritySelectControl.setValue(this.CasePriorityOptions[0].level);
  }
}
