import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../entity/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService) { }

  user?: User;
  ngOnInit(): void {
    this.userService.onShowDetailsClicked.subscribe((data:User )=>{
        this.user=data
      });
  }

}
