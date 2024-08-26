import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-case-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
  ],
  templateUrl: './create-case-page.component.html',
  styleUrl: './create-case-page.component.scss',
})
export class CreateCasePageComponent {
  caseForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
  });

  casePriorityList = ['Low', 'medium', 'high'];
  caseTypes = ['one', 'two', 'three'];

  onSubmit() {
    if (this.caseForm.valid) {
      console.log(this.caseForm.value);
    }
  }

  onClear() {
    this.caseForm.reset();
  }
}
