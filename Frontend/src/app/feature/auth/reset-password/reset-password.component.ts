import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  resetForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      password: ['', Validators.minLength(8)],
      confirmPassword: ['', Validators.minLength(8)],
    });
  }

  handleSubmit(): void {
    console.log(this.resetForm.value);
  }
}
