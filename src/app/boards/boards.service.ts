import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Board } from './board.interface';

@Injectable()
export class BoardsService {
  private static readonly BOARDS_URL = '/board-manager-service/getBoards';

  private headers = new HttpHeaders({'Content-Type': 'text/plain'});

  constructor(private http: HttpClient){}

  getBoards(scrumUserId: number): Observable<any> {
    console.log("scrumUserId: ", scrumUserId);
    return this.http.post(BoardsService.BOARDS_URL, scrumUserId, {headers: this.headers});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
