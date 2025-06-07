import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToasterService } from '../../../core/services/toaster.service';

@Component({
  selector: 'app-contact',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly toaster: ToasterService
  ) {}
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      city: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) console.log(this.contactForm.value);
    else this.toaster.showError('Invalid Form!');
  }
}
