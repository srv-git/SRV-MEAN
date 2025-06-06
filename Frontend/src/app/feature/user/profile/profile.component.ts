import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProfileIconPipe } from '../../../core/pipe/profile-icon.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, ProfileIconPipe, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userData:any;
  tableTitle: string = "My Profile";
  constructor(readonly userService: UserService, private readonly route: ActivatedRoute){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.userService.getUser(id).subscribe((data)=>{
      console.log(data);
      this.userData = data;
    })
  }
}
