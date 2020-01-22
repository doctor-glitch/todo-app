import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.loginForm = fb.group({
      email: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  check() {
    console.log(this.loginForm);
    if (!this.loginForm.valid) {
    } else {
      // tslint:disable-next-line: max-line-length
      this.userService.login(this.loginForm.value.email, this.loginForm.value.pass).subscribe(data => {
        console.log(data);
      });
    }
  }

  get(controlName) {
    return this.loginForm.get(controlName);
  }

  hasError(controlName) {
    return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
  }
  view() {
    this.router.navigate(['todo']);
  }
  ngOnInit() {
  }

}

