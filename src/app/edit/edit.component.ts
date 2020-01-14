import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todoForm: any;
  constructor(private fb: FormBuilder, private todoService: TodoService, private route: ActivatedRoute, private router: Router) {
    this.todoForm = fb.group({
      name: '',
      description: ''
    });
  }

  edit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.todoService.edit(this.todoForm.value.name, this.todoForm.value.description, params.id).subscribe(data => {
        this.todoForm.reset();
        this.router.navigate(['todo']);
      });
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoService.search(params.id).subscribe((data: any) => {
        console.log(data);
        this.todoForm.setValue({
          name: data.name,
          description: data.description
        });
      });
    });
  }

}
