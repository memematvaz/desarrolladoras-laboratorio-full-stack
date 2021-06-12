import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url);
  }
  public updateUser(user: User): Observable<any> {
    return this.http.put(`${this.url}/${user._id}`, user);
  }
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
  public deleteUser(user: User): Observable<any> {
    return this.http.delete(`${this.url}/${user._id}`);
  }
}
