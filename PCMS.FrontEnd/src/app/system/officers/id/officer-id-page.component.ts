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
import { AccessLevel } from '../create/test-data';

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
})
export class OfficerIdPageComponent implements OnInit, OnDestroy {
  OfficerId: any = '';
  constructor(private route: ActivatedRoute, private titleService: Title) {}

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
  }

  acknowledgedAdvancedInfoPageLock: boolean = false;
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
    gender: new FormControl('', [Validators.required]),
    birthPlace: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    race: new FormControl('', [Validators.required]),
    ethnicity: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    driversLicenseNumber: new FormControl('', [Validators.required]),
    nationalInsuranceNumber: new FormControl('', [
      Validators.required,
      ninoValidator(),
    ]),
    badgeNumber: new FormControl('', Validators.required),
  });

  onBasicFormSubmit() {
    throw new Error('Method not implemented.');
  }

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

  ngOnDestroy() {
    if (this.selectedImageUrl) {
      URL.revokeObjectURL(this.selectedImageUrl);
    }
  }
}
