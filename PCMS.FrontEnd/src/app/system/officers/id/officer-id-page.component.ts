import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ninoValidator, noLettersValidator } from '../../../validators';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import {
  AccessLevel,
  ethnicGroups,
  nationalities,
  races,
} from '../create/test-data';
import { BreakpointObserver } from '@angular/cdk/layout';
import { provideNativeDateAdapter } from '@angular/material/core';

interface Department {
  name: string;
  id: string;
}

@Component({
  selector: 'app-officer-id-page',
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
    MatTabsModule,
  ],
  templateUrl: './officer-id-page.component.html',
  styleUrl: './officer-id-page.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class OfficerIdPageComponent implements OnInit, OnDestroy {
  OfficerId: any = '';
  private readonly _currentDate = new Date();
  readonly minDateOfBirth = new Date(
    this._currentDate.getFullYear() - 120,
    0,
    1
  );
  readonly maxDateOfBirth = new Date(this._currentDate);

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private breakpointObserver: BreakpointObserver
  ) {}

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.OfficerId = id;
    this.titleService.setTitle('PCMS - Officer details for ' + this.OfficerId);
    this.filteredDepartments = this.basicOfficerForm
      ?.get('departmentId')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._departmentFilter(value || ''))
      );
    this.filteredRaces = this.advancedOfficerForm
      ?.get('race')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._raceFilter(value || ''))
      );
    this.filteredEthnicGroups = this.advancedOfficerForm
      ?.get('ethnicity')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._ethnicGroupFilter(value || ''))
      );
    this.filteredNationalities = this.advancedOfficerForm
      ?.get('nationality')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._nationalityFilter(value || ''))
      );
  }

  acknowledgedAdvancedInfoPageLock: boolean = false;
  genders = ['Male', 'Female'];
  races = races;
  filteredRaces: Observable<string[]> | undefined;
  ethnicGroups = ethnicGroups;
  filteredEthnicGroups: Observable<string[]> | undefined;
  nationalities = nationalities;
  filteredNationalities: Observable<string[]> | undefined;
  selectedImageUrl: string | null = null;
  departments = [
    {
      name: 'dep one',
      id: 'dep one',
    },
    {
      name: 'dep two',
      id: 'dep two',
    },
  ];
  filteredDepartments: Observable<Department[]> | undefined;
  accessLevels = Object.values(AccessLevel).filter(
    (value) => typeof value === 'number'
  );

  basicOfficerForm = new FormGroup({
    email: new FormControl('some@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    phoneNumber: new FormControl('07458734', [
      Validators.maxLength(15),
      Validators.required,
      noLettersValidator(),
    ]),
    address: new FormGroup({
      houseNumber: new FormControl('33', [Validators.required]),
      streetName: new FormControl('lop', [Validators.required]),
      town: new FormControl('sheep', [Validators.required]),
      postcode: new FormControl('S3', [Validators.required]),
    }),
    physicalDescription: new FormControl('', [Validators.maxLength(200)]),
    generalDescription: new FormControl('', [Validators.maxLength(200)]),
    departmentId: new FormControl(
      this.departments[0].name,
      Validators.required
    ),
    accessLevel: new FormControl(this.accessLevels[2], Validators.required),
    profileImgUrl: new FormControl<string>('', [Validators.required]),
  });

  advancedOfficerForm = new FormGroup({
    firstName: new FormControl('joe', [
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required,
    ]),
    middleName: new FormControl('ee', [Validators.maxLength(50)]),
    lastName: new FormControl('doe', [
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required,
    ]),
    dateOfBirth: new FormControl(new Date('1990-01-01'), [Validators.required]),
    gender: new FormControl(this.genders[0], [Validators.required]),
    birthPlace: new FormControl('ty', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    race: new FormControl(this.races[0], [Validators.required]),
    ethnicity: new FormControl(this.ethnicGroups[0], [Validators.required]),
    nationality: new FormControl(this.nationalities[0], [Validators.required]),
    driversLicenseNumber: new FormControl('ded2', [Validators.required]),
    nationalInsuranceNumber: new FormControl('ed', [
      Validators.required,
      ninoValidator(),
    ]),
    badgeNumber: new FormControl('123', Validators.required),
  });

  onBasicFormSubmit() {
    throw new Error('Method not implemented.');
  }

  onBasicOfficerFormCancel() {}

  onAdvancedFormSubmit() {}

  onAdvancedFormCancel() {}

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImageUrl = URL.createObjectURL(file);
      this.basicOfficerForm
        .get('profileImgUrl')
        ?.setValue(this.selectedImageUrl);
    }
  }

  private _departmentFilter(value: string): Department[] {
    const filterValue = value.toLowerCase();

    const values = this.departments.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );

    if (values.length === 0) {
      this.basicOfficerForm.get('departmentId')?.setErrors({
        invalidOption: true,
      });
    }

    return values;
  }

  private _raceFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const values = this.races.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    if (values.length === 0) {
      this.advancedOfficerForm.get('race')?.setErrors({
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
      this.advancedOfficerForm.get('ethnicity')?.setErrors({
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
      this.advancedOfficerForm.get('nationality')?.setErrors({
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
