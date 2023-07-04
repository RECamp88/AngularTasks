import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient : HttpClient) { }

  ev= "https://jsonplaceholder.typicode.com"

  users: User[] = [];

  getAllUsers() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.get(`${this.ev}/users`, { headers : header });
  }
}
