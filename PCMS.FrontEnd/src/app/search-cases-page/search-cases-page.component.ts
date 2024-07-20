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
    this.IncidentTypeFilteredOptions = this.SearchCaseFiltersForm.get(
      'IncidentTypeAutoCompleteControl'
    )?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const searchValue = typeof value === 'string' ? value : '';
        return this._IncidentTypeFilter(searchValue);
      })
    );

    this.CityFilteredOptions = this.SearchCaseFiltersForm.get(
      'CityAutoCompleteControl'
    )?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const searchValue = typeof value === 'string' ? value : '';
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
    { status: 'Any' },
    { status: 'Open' },
    { status: 'Closed' },
    { status: 'Pending' },
    { status: 'Under Investigation' },
  ];

  CaseRangeDateFilter = (d: Date | null): boolean => {
    const date = d || new Date();
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();

    // Allow dates from 2020 up to and including the current year
    return year >= 2020 && year <= currentYear;
  };

  private getYesterday(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  CasePriorityOptions: CasePriorityOption[] = [
    {
      level: 'Any',
    },
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

  IncidentTypeOptions: IncidentTypeOption[] = [
    { type: 'Any' },
    { type: 'Theft' },
    { type: 'Burglary' },
    { type: 'Robbery' },
    { type: 'Assault' },
    { type: 'Homicide' },
    { type: 'Sexual Assault' },
  ];

  IncidentTypeFilteredOptions: Observable<IncidentTypeOption[]> | undefined;

  private _IncidentTypeFilter(value: string): IncidentTypeOption[] {
    const filterValue = value.toLowerCase();

    const values = this.IncidentTypeOptions.filter((option) =>
      option.type.toLowerCase().includes(filterValue)
    );

    if (values.length == 0) {
      this.SearchCaseFiltersForm.get(
        'IncidentTypeAutoCompleteControl'
      )?.setErrors({
        inValidIncidentTypeOption: true,
      });
    }

    return values;
  }

  CityOptions: CityOption[] = [
    {
      city: 'Any',
    },
    {
      city: 'Sheffield',
    },
    {
      city: 'London',
    },
  ];

  CityFilteredOptions: Observable<CityOption[]> | undefined;

  private _CityFilter(value: string): CityOption[] {
    const filterValue = value.toLowerCase();

    const values = this.CityOptions.filter((option) =>
      option.city.toLowerCase().includes(filterValue)
    );

    if (values.length == 0) {
      this.SearchCaseFiltersForm.get('CityAutoCompleteControl')?.setErrors({
        inValidCityOption: true,
      });
    }
    return values;
  }

  SearchCaseFiltersForm = new FormGroup({
    CaseStatusSelectControl: new FormControl<string>(
      this.CaseStatusOptions[0].status,
      [Validators.required]
    ),
    CaseDateRangeControl: new FormGroup({
      start: new FormControl<Date>(this.getYesterday(), [Validators.required]),
      end: new FormControl<Date>(new Date(), [Validators.required]),
    }),
    CasePrioritySelectControl: new FormControl<string>(
      this.CasePriorityOptions[0].level,
      [Validators.required]
    ),
    IncidentTypeAutoCompleteControl: new FormControl<string>(
      this.IncidentTypeOptions[0].type,
      [Validators.required]
    ),
    CityAutoCompleteControl: new FormControl<string>(this.CityOptions[0].city, [
      Validators.required,
    ]),
  });

  ClearForm() {
    this.SearchCaseFiltersForm.reset({
      CaseStatusSelectControl: this.CaseStatusOptions[0].status,
      CaseDateRangeControl: {
        start: this.getYesterday(),
        end: new Date(),
      },
      CasePrioritySelectControl: this.CasePriorityOptions[0].level,
      IncidentTypeAutoCompleteControl: this.IncidentTypeOptions[0].type,
      CityAutoCompleteControl: this.CityOptions[0].city,
    });
  }

  onSearchCaseFilterFormSubmit() {
    console.log(this.SearchCaseFiltersForm.valid);
  }
}
