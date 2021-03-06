import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  user(fname, lname, email, password) {
    console.log(fname, lname, email, password);
    return this.http.post(`${baseUrl}register`, {
      fname,
      lname,
      email,
      password
    }, { withCredentials: true });
  }
  login(email, password) {
    console.log(email, password);
    return this.http.post(`${baseUrl}login`, {
      email,
      password,

    }, { withCredentials: true });
  }
}
