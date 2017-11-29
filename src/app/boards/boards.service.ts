import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Board } from './board.interface';
import { NewBoard } from './newBoard.interface';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardsService {
  private static readonly BOARDS_URL = '/board-manager-service/getBoards';
  private static readonly ADD_BOARD_URL = '/board-manager-service/newBoard';
  private GET_ALL_BOARDS = '/board-manager-service/getAllBoards';

  constructor(
    private http: Http,
    private httpClient: HttpClient){}

  //Retrieve all boards from current user
  getAllBoards() {
    return this.http.get(this.GET_ALL_BOARDS)
                    .map(response => <Board[]> response.json());
  }

  //Retrieve a single board based on selection
  getBoard(scrumUserId: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    console.log("scrumUserId: ", scrumUserId);
    return this.httpClient.post(BoardsService.BOARDS_URL, scrumUserId, {headers: headers});
  }

  //Add a board based with a board name
  addBoard(newBoard: NewBoard): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(BoardsService.ADD_BOARD_URL, newBoard, {headers: headers});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
