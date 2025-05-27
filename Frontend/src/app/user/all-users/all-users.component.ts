import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  imports: [TableComponent],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent implements OnInit {
  userData:any;
  constructor(readonly userService: UserService){ }

  ngOnInit(){
    this.userService.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.userData = data;
    })
  }
}
