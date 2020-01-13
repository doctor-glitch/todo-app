import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name, description) {
    return this.http.post(baseUrl + 'create', {
      name,
      description
    });
  }

  delete(id) {
    console.log(id);
    return this.http.delete(baseUrl + 'delete/' + id)
  }

  get() {
    return this.http.get(baseUrl);
  }
}
