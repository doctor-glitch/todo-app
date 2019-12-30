import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm;
  todos = [
    {
      name: 'todo',
      description: 'todo is one'
    },
    {
      name: 'todo',
      description: 'todo is two'
    }
  ];


  constructor(private fb: FormBuilder, private ser: HelloService) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }
  add() {
    console.log(this.todoForm);
    if (!this.todoForm.value.name || !this.todoForm.value.description) {
      alert('invalid');
    } else {
      this.todos.push({
        name: this.todoForm.value.name,
        description: this.todoForm.value.description
      });
      this.todoForm.reset();
    }
    this.ser.hai();
  }

  delete(list) {
    this.todos = this.todos.filter((t) => t !== list);
  }
  ngOnInit() {
  }

}
