import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userDetails: any;
  users: {id:number, name: string, email: string, phone: string}[] = []

  constructor(public userService : UsersService) {}

  getUsers(): void{
    this.userService.getAllUsers().subscribe(json => {this.userDetails = json; console.log(this.users);});
  }

  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Phone'];
  dataSource = this.users;

}
