import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name, description, userId) {
    return this.http.post(`${baseUrl}create`, {
      name,
      description,
      userId,
    }, { withCredentials: true });
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
    return this.http.get(baseUrl, { withCredentials: true });
  }

  search(id) {
    console.log(id);
    return this.http.get(`${baseUrl}search/${id}`);
  }
}
