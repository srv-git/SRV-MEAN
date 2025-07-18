import { Component, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../../models/user.model';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../../core/services/toaster.service';
import { Router } from '@angular/router';
import { checkPasswords } from '../../../core/validators/confirm-password.validator';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @ViewChild('registerUser') registerUser!: NgForm;
  registerForm!: FormGroup;
  registerInfo: User = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    gender: '',
  };
  readonly $destroy = new Subject<void>();
  constructor(
    readonly fb: FormBuilder,
    readonly authService: AuthService,
    readonly toaster: ToasterService,
    readonly router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        address: ['', Validators.required],
        gender: ['', Validators.required],
      },
      {
        validator: checkPasswords('password', 'confirmPassword'),
      } as AbstractControlOptions
    );
  }

  /**
   * To save user info
   * @param formData {User}
   * @returns {void}
   */
  saveUser(formData: User): void {
    this.authService
      .registerUser(formData)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          this.toaster.showSuccess(data.message ?? 'Registration done!');
          this.registerForm.reset();
          this.registerUser.resetForm();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.toaster.showError(err?.error?.message ?? 'Registration failed!');
        },
        complete: () => {
          this.toaster.showInfo('Process done!');
        },
      });
  }

  /**
   * To handle register form submission
   * @param reactive {boolean}
   * @returns {void}
   */
  formSubmit(reactive: boolean): void {
    if (
      (reactive && this.registerForm.invalid) ||
      (!reactive && this.registerUser.invalid)
    ) {
      this.toaster.showError('Invalid input details.');
      return;
    }
    const formData = JSON.parse(
      JSON.stringify(reactive ? this.registerForm.value : this.registerInfo)
    );
    delete formData.confirmPassword;
    this.saveUser(formData);
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
