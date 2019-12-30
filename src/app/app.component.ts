import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  val1 = '';
  todos = ['hello', 'hello1', 'hello2'];
  delete(list) {
    this.todos = this.todos.filter(function (t) { return t != list });
  }
  onVal(event) {
    this.val1 = event.target.value;
  }
  add(val) {
    this.todos.push(this.val1);
    this.val1 = '';
  }
}
