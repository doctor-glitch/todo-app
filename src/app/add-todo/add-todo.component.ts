import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HelloService } from '../services/hello.service';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm: any;
  error = true;
  constructor(private fb: FormBuilder, private ser: HelloService, private todoService: TodoService, private router: Router) {
    this.todoForm = fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }

  add() {
    if (!this.todoForm.valid) {
      // if (this.todoForm.get('name').errors != null) {
      //   alert('name error');
      //   console.log(this.todoForm.get('name'));
      // }
      // if (this.todoForm.get('description').errors != null) {
      //   alert('description error');++
      // }
    } else {
      this.todoService.add(this.todoForm.value.name, this.todoForm.value.description, '5e2559b0c46fdc0dc0d8d295').subscribe(data => {
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
    }
    return;
  }

  // delete() { }

  ngOnInit() {
  }

  get(controlName) {
    return this.todoForm.get(controlName);
  }

  hasError(controlName) {
    return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
  }
}
