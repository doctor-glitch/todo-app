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
  er1 = true;
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
      this.userService.login(this.loginForm.value.email, this.loginForm.value.pass).subscribe(data => {
        console.log(data);
        this.router.navigate(['todo']);
      }, err => {
        this.er1 = false;
        // alert(err.error.message);
      });
    }
  }

  get(controlName) {
    return this.loginForm.get(controlName);
  }

  hasError(controlName) {
    return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
  }
  ngOnInit() {
  }

}

