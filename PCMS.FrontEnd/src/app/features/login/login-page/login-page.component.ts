import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationService } from '../../../core/confirmation/confirmation-service.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private confirmationService: ConfirmationService) {}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  showPassword = false;

  clickShowPassword(event: MouseEvent) {
    this.showPassword = !this.showPassword;
    event.stopPropagation();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.confirmationService
        .confirm('Are you sure you want to perform this action?')
        .subscribe((confirmed: boolean) => {
          if (confirmed) {
            console.log('User confirmed the action');
            // Perform the action
          } else {
            console.log('User cancelled the action');
            // Handle cancellation
          }
        });
    }
  }
}
