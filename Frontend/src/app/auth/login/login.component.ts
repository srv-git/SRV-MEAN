import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { ToasterService } from '../../services/toaster.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginFormInfo!: FormGroup;
  $destroy = new Subject<void>();
  constructor(
    readonly fb: FormBuilder,
    readonly userService: UserService,
    readonly toaster: ToasterService,
    readonly router: Router
  ) {}

  ngOnInit() {
    this.loginFormInfo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * To handle the login form
   * @returns {void}
   */
  handleLogin(): void {
    if (this.loginFormInfo.valid) {
      this.userService
        .loginUser(this.loginFormInfo.value)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (res) => {
            localStorage.setItem('appInfo', JSON.stringify(res));
            this.toaster.showSuccess(
              res.message ?? 'You have logged in successfully!'
            );
            this.router.navigate(['users']);
          },
          error: (err) => {
            this.toaster.showError(err.error?.message ?? 'Login failed!');
          },
        });
    } else {
      this.toaster.showError('Invalid form!');
    }
  }
}
