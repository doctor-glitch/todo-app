import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { HelloService } from '../services/hello.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private ser: HelloService, private router: Router) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }
  delete(list) {
    this.todos = this.todos.filter((t) => t !== list);
  }
  add(){
    this.router.navigate(['add']);
  }
  ngOnInit() {
  }

}
