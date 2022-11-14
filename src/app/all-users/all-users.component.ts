import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../entity/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService : UserService) { }
  users: User[]=[];
  ngOnInit(): void {
    this.users= this.userService.users;
  }

  showDetails(user : User){
      this.userService.showUserDetails(user);
  }
}
