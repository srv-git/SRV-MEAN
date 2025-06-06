import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProfileIconPipe } from '../../../core/pipe/profile-icon.pipe';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule,MatCardModule, ProfileIconPipe, CommonModule, ReactiveFormsModule, MatInputModule,MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userData: any;
  editProfile!: FormGroup;
  tableTitle: string = 'My Profile';
  updateProfile:boolean =  false;
  userId!: string;
  constructor(
    readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') ?? '';
    this.userService.getUser(this.userId).subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }

  handleEditProfile(){
    this.updateProfile = true;
    this.editProfile = this.fb.group({
      name: [this.userData?.name, Validators.required],
      phone: [this.userData?.phone, [Validators.required, Validators.minLength(10)]],
      address: [this.userData?.address, Validators.required]
    })
  }
  
  handleUpdateProfile(): void {
    console.log(this.editProfile.value);
    if(this.editProfile.valid){
      this.userService.updateUser(this.userId, this.editProfile.value).subscribe(
        (res)=>{
          this.updateProfile = false;
          localStorage.setItem('user', JSON.stringify({...JSON.parse(localStorage.getItem('user')?? ''),'name': res.name}));
          this.userData = res;
      })
    }
  }
}
