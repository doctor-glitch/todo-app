import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { HelloService } from '../services/hello.service';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm;
  todos: any = [];
  count = 0;

  constructor(private fb: FormBuilder, private ser: HelloService, private router: Router, private todoService: TodoService) { }
  delete(id) {
    console.log(id);
    this.todoService.delete(id).subscribe(data => {
      console.log('completed');
      this.getTodos();
    });
  }
  add() {
    this.router.navigate(['add']);
  }
  edit(id) {
    this.router.navigate(['edit', id]);
  }
  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoService.get().subscribe(data => {
      this.todos = data;
    });
  }
  onHeaderClick(name) {
    this.count++;
  }
}
