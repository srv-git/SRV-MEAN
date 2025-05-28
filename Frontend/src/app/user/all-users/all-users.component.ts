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
  tableTitle: string = "All Users";
  tableDescription: string = "Its all about the register users list.";
  tableColumns: string[] = ['_id', 'name', 'email', 'phone', 'address','password', 'createdAt', 'updatedAt'];
  constructor(readonly userService: UserService){ }

  ngOnInit(){
    this.userService.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.userData = data;
    })
  }
}
