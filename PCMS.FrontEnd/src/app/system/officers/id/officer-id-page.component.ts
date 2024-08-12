import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ninoValidator, noLettersValidator } from '../../../validators';

@Component({
  selector: 'app-officer-id-page',
  standalone: true,
  imports: [],
  templateUrl: './officer-id-page.component.html',
  styleUrl: './officer-id-page.component.scss',
})
export class OfficerIdPageComponent implements OnInit {
  OfficerId: any = '';
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.OfficerId = id;
    this.titleService.setTitle('PCMS - Officer details for ' + this.OfficerId);
  }

  typicallyEditableOfficerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.maxLength(15),
      Validators.required,
      noLettersValidator(),
    ]),
    address: new FormGroup({
      houseNumber: new FormControl('', [Validators.required]),
      streetName: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      postcode: new FormControl('', [Validators.required]),
    }),
    physicalDescription: new FormControl('', [Validators.maxLength(200)]),
    generalDescription: new FormControl('', [Validators.maxLength(200)]),
    departmentId: new FormControl('', Validators.required),
    accessLevel: new FormControl('', Validators.required),
    profileImgUrl: new FormControl<string>('', [Validators.required]),
  });

  specialEditableOfficerForm = new FormGroup({
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
}
