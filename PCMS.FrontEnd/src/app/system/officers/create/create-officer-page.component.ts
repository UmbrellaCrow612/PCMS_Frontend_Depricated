import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AccessLevel, ethnicGroups, nationalities, races } from './test-data';
import { map, Observable, startWith } from 'rxjs';
import { ninoValidator, noLettersValidator } from '../../../validators';

@Component({
  selector: 'app-create-officer-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  templateUrl: './create-officer-page.component.html',
  styleUrl: './create-officer-page.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CreateOfficerPageComponent implements OnInit, OnDestroy {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.filteredRaces = this.officerForm?.get('race')?.valueChanges.pipe(
      startWith(''),
      map((value) => this._raceFilter(value || ''))
    );

    this.filteredEthnicGroups = this.officerForm
      ?.get('ethnicity')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._ethnicGroupFilter(value || ''))
      );

    this.filteredNationalities = this.officerForm
      ?.get('nationality')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._nationalityFilter(value || ''))
      );
  }

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

  selectedImageUrl: string | null = null;
  genders = ['Male', 'Female'];
  races = races;
  filteredRaces: Observable<string[]> | undefined;
  ethnicGroups = ethnicGroups;
  filteredEthnicGroups: Observable<string[]> | undefined;
  nationalities = nationalities;
  filteredNationalities: Observable<string[]> | undefined;
  accessLevels = Object.values(AccessLevel).filter(value => typeof value === 'number');

  officerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required,
    ]),
    middleName: new FormControl('', [Validators.maxLength(50)]),
    lastName: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required,
    ]),
    dateOfBirth: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.maxLength(15),
      Validators.required,
      noLettersValidator(),
    ]),
    profileImgUrl: new FormControl<string>('', [Validators.required]),
    address: new FormGroup({
      houseNumber: new FormControl('', [Validators.required]),
      streetName: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      postcode: new FormControl('', [Validators.required]),
    }),
    gender: new FormControl(this.genders[0], [Validators.required]),
    birthPlace: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    height: new FormControl('', [Validators.required, noLettersValidator()]),
    race: new FormControl('', [Validators.required]),
    ethnicity: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    physicalDescription: new FormControl('', [Validators.maxLength(200)]),
    generalDescription: new FormControl('', [Validators.maxLength(200)]),
    driversLicenseNumber: new FormControl('', [Validators.required]),
    nationalInsuranceNumber: new FormControl('', [
      Validators.required,
      ninoValidator(),
    ]),
    badgeNumber: new FormControl('', Validators.required),
    accessLevel: new FormControl('', Validators.required),
    departmentId: new FormControl('', Validators.required),
  });

  private readonly _currentDate = new Date();
  readonly minDateOfBirth = new Date(
    this._currentDate.getFullYear() - 120,
    0,
    1
  );
  readonly maxDateOfBirth = new Date(this._currentDate);

  clearForm() {
    this.officerForm.reset();
    this.selectedImageUrl = null;
  }

  onSubmit() {
    if (this.officerForm.valid) {
      console.log(this.officerForm.value);
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImageUrl = URL.createObjectURL(file);
      this.officerForm.get('profileImgUrl')?.setValue(this.selectedImageUrl);
    }
  }

  private _raceFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const values = this.races.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    if (values.length === 0) {
      this.officerForm.get('race')?.setErrors({
        invalidOption: true,
      });
    }

    return values;
  }

  private _ethnicGroupFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const values = this.ethnicGroups.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    if (values.length === 0) {
      this.officerForm.get('ethnicity')?.setErrors({
        invalidOption: true,
      });
    }

    return values;
  }

  private _nationalityFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const values = this.nationalities.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    if (values.length === 0) {
      this.officerForm.get('nationality')?.setErrors({
        invalidOption: true,
      });
    }

    return values;
  }

  ngOnDestroy() {
    if (this.selectedImageUrl) {
      URL.revokeObjectURL(this.selectedImageUrl);
    }
  }
}
