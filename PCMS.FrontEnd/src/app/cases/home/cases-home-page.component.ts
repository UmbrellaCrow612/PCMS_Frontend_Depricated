import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cases-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cases-home-page.component.html',
  styleUrl: './cases-home-page.component.scss',
})
export class CasesHomePageComponent {
  quickSearchForm = new FormGroup({
    caseNumber: new FormControl('', [Validators.required]),
  });

  onQuickSearchFormSubmit() {
    if (this.quickSearchForm.valid) {
      console.log(this.quickSearchForm.value);
    }
  }
}
