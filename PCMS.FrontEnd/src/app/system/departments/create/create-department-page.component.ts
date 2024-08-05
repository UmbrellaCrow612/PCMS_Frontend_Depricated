import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-department-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create-department-page.component.html',
  styleUrl: './create-department-page.component.scss',
})
export class CreateDepartmentPageComponent {
  departmentForm = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(55),
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(150),
      Validators.required,
    ]),
    shortCode: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
  });

  clearForm() {
    this.departmentForm.reset();
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      console.log(this.departmentForm.value);
    }
  }
}
