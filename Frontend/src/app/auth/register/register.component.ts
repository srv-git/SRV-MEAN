import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatCardModule,MatButtonModule,MatIcon],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
   readonly $destroy = new Subject<void>();
  constructor(readonly fb: FormBuilder){

  }
  ngOnInit(){
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      phone: [''],
      password: ['',Validators.required],
      address: ['']
    })
    this.registerForm.valueChanges.pipe(take(1),takeUntil(this.$destroy)).subscribe((res)=>{
      console.log(res);
    })
  }
  ngOnDestroy(){
    this.$destroy.next();
    this.$destroy.complete();
  }
}
