import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private ser: HelloService, private todoService: TodoService, private router: Router) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }

  add() {
    if (!this.todoForm.value.name || !this.todoForm.value.description) {
      alert('invalid');
    } else {
      this.todoService.add(this.todoForm.value.name, this.todoForm.value.description).subscribe(data => {
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
    }
  }

  delete(){

  }

  ngOnInit() {
  }

}
