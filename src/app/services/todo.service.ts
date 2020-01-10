import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add() {
    this.http.post('http://localhost:3000/create', {
      'name': 'Test1',
      'description': 'desc2'
    }).subscribe(data => {
      console.log('data', data);
      alert('done');
    })
  }
}
