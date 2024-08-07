import { Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
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
  ],
  templateUrl: './create-officer-page.component.html',
  styleUrl: './create-officer-page.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CreateOfficerPageComponent implements OnDestroy {
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

  selectedImageUrl: string | null = null;
  genders = ['Male', 'Female'];

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
      this.noLettersValidator(),
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
    height: new FormControl('', [
      Validators.required,
      this.noLettersValidator(),
    ]),
    race: new FormControl('', [Validators.required]),
    ethnicity: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    physicalDescription: new FormControl('', [Validators.maxLength(200)]),
    generalDescription: new FormControl('', [Validators.maxLength(200)]),
    driversLicenseNumber: new FormControl('', [
      Validators.required,
      this.ukDriversLicenseValidator(),
    ]),
    nationalInsuranceNumber: new FormControl('', [
      Validators.required,
      this.ninoValidator(),
    ]),
    badgeNumber: new FormControl('', Validators.required),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.minLength(50),
    ]),
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

  ninoValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      // Remove any spaces from the input
      const cleanedValue = value.replace(/\s/g, '');

      // Regular expression to match the basic NINO format
      const ninoPattern = /^[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z][0-9]{6}[A-D]$/;

      if (!ninoPattern.test(cleanedValue)) {
        return { invalidNino: true };
      }

      // Check for invalid prefixes
      const invalidPrefixes = [
        'BG',
        'GB',
        'KN',
        'NK',
        'NT',
        'TN',
        'ZZ',
        'OO',
        'FY',
        'NC',
        'PP',
        'PZ',
      ];
      const prefix = cleanedValue.substring(0, 2);

      if (invalidPrefixes.includes(prefix)) {
        return { invalidNinoPrefix: true };
      }

      return null;
    };
  }

  ukDriversLicenseValidator(): (
    control: AbstractControl
  ) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      // Remove any spaces from the input
      const cleanedValue = value.replace(/\s/g, '');

      // Regular expression to match the UK driver's license format
      const dlPattern = /^[A-Z]{5}[0-9]{6}[A-Z]{2}[0-9]{2}$/;

      if (!dlPattern.test(cleanedValue)) {
        return { invalidDriversLicense: true };
      }

      // Check if the date of birth encoded in the license is valid
      const dobDigits = cleanedValue.substring(5, 11);
      const decade = parseInt(dobDigits.substring(0, 2));
      let year = decade < 50 ? 2000 + decade : 1900 + decade;
      const month = parseInt(dobDigits.substring(2, 4));
      const day = parseInt(dobDigits.substring(4, 6));

      // Adjust for the century addition in months for people born before 2000
      const adjustedMonth = month > 20 && year < 2000 ? month - 20 : month;
      const adjustedYear = month > 20 && year < 2000 ? year + 100 : year;

      const dob = new Date(adjustedYear, adjustedMonth - 1, day);
      if (
        isNaN(dob.getTime()) ||
        dob > new Date() ||
        dob < new Date(1900, 0, 1)
      ) {
        return { invalidDriversLicenseDate: true };
      }

      return null;
    };
  }

  noLettersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const hasLetters = /[a-zA-Z]/.test(control.value);
      return hasLetters ? { hasLetters: { value: control.value } } : null;
    };
  }

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

  ngOnDestroy() {
    if (this.selectedImageUrl) {
      URL.revokeObjectURL(this.selectedImageUrl);
    }
  }
}
