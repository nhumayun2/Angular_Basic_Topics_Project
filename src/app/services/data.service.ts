import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message = 'Hello from Data Service!';
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMessage() {
    return this.message;
  }
}
