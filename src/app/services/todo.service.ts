import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name, description) {
    return this.http.post(`${baseUrl}create`, {
      name,
      description
    });
  }

  edit(name, description, id) {
    return this.http.put(`${baseUrl}edit/${id}`, {
      name,
      description
    });
  }

  delete(id) {
    // return this.http.delete(baseUrl + 'delete/' + id);
    return this.http.delete(`${baseUrl}delete/${id}`);
  }

  get() {
    return this.http.get(baseUrl);
  }

  search(id) {
    console.log(id);
    return this.http.get(`${baseUrl}search/${id}`);
  }
}
