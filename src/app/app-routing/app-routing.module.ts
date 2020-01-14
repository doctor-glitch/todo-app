import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TodoComponent } from '../todo/todo.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { EditComponent } from '../edit/edit.component';
import { SearchTodoComponent } from '../search-todo/search-todo.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'add', component: AddTodoComponent},
  { path: '', component: LoginComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'search', component: SearchTodoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
