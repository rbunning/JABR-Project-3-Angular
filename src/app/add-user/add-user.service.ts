import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user.interface';
import { AddUser } from './add-user.interface';
@Injectable()
export class AddUserService {

  private USER_FOR_BOARD = '/user-service/getAllUsersForBoard/';
  private USER_NOT_BOARD = '/user-service/getAllUsersNotOnBoard/';

  private static readonly ADD_USER_TO_BOARD = '/user-service/addUserToBoard/';

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  getUsersForBoard(id: number) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.USER_FOR_BOARD + id)
                    .map(response => <User[]> response.json());
  }

  getUsersNotOnBoard(id: number) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.USER_NOT_BOARD + id)
                    .map(response => <User[]> response.json());
  }

  addUserToBoard(addUser: AddUser): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(AddUserService.ADD_USER_TO_BOARD, addUser, {headers: headers});
  }

}
