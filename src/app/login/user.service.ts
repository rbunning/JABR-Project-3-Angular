import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private static readonly LOGIN_URL = 'user-service/login';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  //Inject HttpClient to http thru a constructor
  constructor(private http: HttpClient){}

  createUser(user: User): Observable<any> {
    return this.http.post(UserService.LOGIN_URL, user, {headers: this.headers});
  }
}
