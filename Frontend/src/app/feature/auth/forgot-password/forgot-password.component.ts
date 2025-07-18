import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToasterService } from '../../../core/services/toaster.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forgot-password',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  forgotFormInfo!: FormGroup;
  userEmail: string = '';
  emailSent: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly toaster: ToasterService
  ) {}

  ngOnInit() {
    this.forgotFormInfo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  handleSubmit(): void {
    if (this.forgotFormInfo.valid) {
      console.log(this.forgotFormInfo.value);
      this.userEmail = this.forgotFormInfo.value.email;
      this.emailSent = true;
    } else this.toaster.showError('Invalid Form!');
  }
}
