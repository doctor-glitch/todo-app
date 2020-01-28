import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HelloService } from '../services/hello.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  er1 = true;
  animationState = true;
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private helloService: HelloService) {
    this.loginForm = fb.group({
      email: new FormControl('', [
        Validators.required,
      ]),
      pass: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  toggleAnimations() {
    this.animationState = !this.animationState;
  }
  check() {
    console.log(this.loginForm);
    if (!this.loginForm.valid) {
    } else {
      this.userService.login(this.loginForm.value.email, this.loginForm.value.pass).subscribe((data: any) => {
        console.log(data);
        // console.log(data.user.fname);
        this.helloService.setItem('user', data.user.fname);
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

