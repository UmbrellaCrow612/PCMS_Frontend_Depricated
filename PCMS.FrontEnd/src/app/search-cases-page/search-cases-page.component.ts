import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface CaseStatusOption {
  status: string;
}

interface CasePriorityOption {
  level: string;
}

interface IncidentTypeOption {
  type: string;
}

interface CityOption {
  city: string;
}

@Component({
  selector: 'app-search-cases-page',
  templateUrl: './search-cases-page.component.html',
  styleUrl: './search-cases-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class SearchCasesPageComponent implements OnInit {
  ngOnInit() {
    this.IncidentTypeFilteredOptions =
      this.IncidentTypeAutoCompleteControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const searchValue =
            typeof value === 'string' ? value : value?.type || '';
          return this._IncidentTypeFilter(searchValue);
        })
      );

    this.CityFilteredOptions = this.CityAutoCompleteControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const searchValue =
          typeof value === 'string' ? value : value?.city || '';
        return this._CityFilter(searchValue);
      })
    );
  }

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

  IncidentTypeOptions: IncidentTypeOption[] = [
    { type: 'Theft' },
    { type: 'Burglary' },
    { type: 'Robbery' },
    { type: 'Assault' },
    { type: 'Homicide' },
    { type: 'Sexual Assault' },
    { type: 'Domestic Violence' },
    { type: 'Vandalism' },
    { type: 'Fraud' },
    { type: 'Drug-related Offense' },
    { type: 'Traffic Violation' },
    { type: 'Disorderly Conduct' },
    { type: 'Cybercrime' },
    { type: 'Kidnapping' },
    { type: 'Arson' },
    { type: 'Trespassing' },
    { type: 'Missing Person' },
    { type: 'Identity Theft' },
    { type: 'Public Intoxication' },
    { type: 'Hate Crime' },
    { type: 'Stalking' },
    { type: 'Child Abuse' },
    { type: 'Elder Abuse' },
    { type: 'Animal Cruelty' },
    { type: 'White-collar Crime' },
  ];

  IncidentTypeFilteredOptions: Observable<IncidentTypeOption[]> | undefined;

  IncidentTypeAutoCompleteControl = new FormControl<
    IncidentTypeOption | string
  >(this.IncidentTypeOptions[0].type);

  private _IncidentTypeFilter(value: string): IncidentTypeOption[] {
    const filterValue = value.toLowerCase();

    return this.IncidentTypeOptions.filter((option) =>
      option.type.toLowerCase().includes(filterValue)
    );
  }

  CityOptions: CityOption[] = [
    {
      city: 'Sheffield',
    },
    {
      city: 'London',
    },
  ];

  CityFilteredOptions: Observable<CityOption[]> | undefined;

  CityAutoCompleteControl = new FormControl<CityOption | string>(
    this.CityOptions[0].city
  );

  private _CityFilter(value: string): CityOption[] {
    const filterValue = value.toLowerCase();

    return this.CityOptions.filter((option) =>
      option.city.toLowerCase().includes(filterValue)
    );
  }

  ClearForm() {
    this.SearchCaseNumberInput.setValue('');
    this.CaseStatusSelectControl.setValue(this.CaseStatusOptions[0].status);
    this.CaseRangeDate.setValue({
      start: this.getYesterday(),
      end: new Date(),
    });
    this.CasePrioritySelectControl.setValue(this.CasePriorityOptions[0].level);
    this.IncidentTypeAutoCompleteControl.setValue(
      this.IncidentTypeOptions[0].type
    );
    this.CityAutoCompleteControl.setValue(this.CityOptions[0].city);
  }
}
