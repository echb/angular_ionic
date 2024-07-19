import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:5064/api/users')
  }
}
