import { Component } from '@angular/core';


@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {
 
  name: string = ""
  email: string = ""
  phone: string = ""
  password: string = ""

  isSubmitted: boolean = false;

  user: any = {
    name : "",
    email : "",
    phone : "",
    password : ""
  }

  onSubmit() : void {
    this.user.name = this.name
    this.user.email = this.email
    this.user.phone = this.phone
    this.user.password = this.password
    console.log(this.user);
    this.isSubmitted = true;
  }
}
