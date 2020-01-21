import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  error = true;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = fb.group({
      fname: new FormControl('', [
        Validators.required,
      ]),
      lname: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      pass1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      pass2: new FormControl('', [
        Validators.required,
      ]),
    }, { validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) {
    let pass = group.get('pass1').value;
    let confirmPass = group.get('pass2').value;
    return pass === confirmPass ? null : { passwordNotSame: true }
  }
  add() {
    console.log(this.userForm);
    if (!this.userForm.valid) {
    } else {
      // tslint:disable-next-line: max-line-length
      this.userService.user(this.userForm.value.fname, this.userForm.value.lname, this.userForm.value.email, this.userForm.value.pass1).subscribe(data =>
        console.log('sucess'));
    }

  }

  get(controlName) {
    return this.userForm.get(controlName);
  }

  hasError(controlName) {
    return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
  }

  ngOnInit() {
  }

}
