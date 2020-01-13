import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name, description) {
    return this.http.post('http://localhost:3000/create', {
      name,
      description
    });
  }

  get() {
    return this.http.get('http://localhost:3000');
  }
}
