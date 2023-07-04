import { Component } from '@angular/core';


@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {
 
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";
 
}
