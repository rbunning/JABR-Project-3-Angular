import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.interface';

@Injectable()
export class UserService {
  //this will be
  //http://localhost:8765/user-service/login
  private static readonly LOGIN_URL = '/user-service/login';
  // private static readonly LOGIN_URL = '/login';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  //Inject HttpClient to http thru a constructor
  constructor(private http: HttpClient){}

  //Inject User interface to user, using Observable for async data
  //It's a normal post request
  loginUser(user: User): Observable<any> {
    console.log(user.scrumUserUsername + ' ' + user.scrumUserPassword);
    return this.http.post(UserService.LOGIN_URL, user, {headers: this.headers});
  }
}
