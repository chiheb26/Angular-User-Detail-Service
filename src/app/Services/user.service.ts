import { EventEmitter } from "@angular/core"
import { User } from "../entity/User";

export class UserService{
    users: User[] = [
        {name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/john.jpeg'},
        {name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 42, avatar: 'assets/avatar/mark.jpeg'},
        {name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 48, avatar: 'assets/avatar/merry.jpeg'},
        {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 25, avatar: 'assets/avatar/steve.jpeg'}
    ]

    onShowDetailsClicked = new EventEmitter<User>();
        showUserDetails(user : User){
                this.onShowDetailsClicked.emit(user);
        }
}