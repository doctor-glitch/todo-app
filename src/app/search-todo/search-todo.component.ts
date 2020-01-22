import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {

  todos: any = [];
  todoForm: any;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = fb.group({
      id: '',
    });
  }

  search() {
    console.log(this.todoForm.value.id);
    this.todoService.search(this.todoForm.value.id).subscribe(data => {
      this.todos = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
