import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsServService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }
  
  getPostById(id: number) {
    const url = `${this.url}/${id}`;
    return this.httpClient.get(url);
  }
}