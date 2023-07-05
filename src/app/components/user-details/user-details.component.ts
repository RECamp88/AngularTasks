import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;

  user: User = { 
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    website: '', 
    company: ''};

  constructor(public usersService : UsersService) {}
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.getAllUsers().subscribe(json => {this.userDetails = json; console.log(this.userDetails);});
  }


}
