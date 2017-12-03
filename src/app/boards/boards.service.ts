import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Board } from './board.interface';
import { NewBoard } from './newBoard.interface';
import { Headers, Http, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

import { DeleteBoard } from './delete-board.interface';

@Injectable()
export class BoardsService {
  private static readonly BOARDS_URL = '/board-manager-service/getBoards';
  private static readonly ADD_BOARD_URL = '/board-manager-service/newBoard';
  private static readonly DELETE_BOARD_URL = '/board-manager-service/deleteBoard';
  private GET_ALL_BOARDS = '/board-manager-service/getAllBoards';

  // This setup the header information for the request.
  private headers = new Headers({ 
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUsertoken')).token 
  });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http,
    private httpClient: HttpClient){}

  //Retrieve all boards from current user
  getAllBoards() {
    return this.http.get(this.GET_ALL_BOARDS, this.options)
                    .map(response => <Board[]> response.json());
  }

  //Delete a board based on boardId
  deleteBoard(board: DeleteBoard): Observable<any> {
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(BoardsService.DELETE_BOARD_URL, board, this.options );
  }

  //Retrieve a single board based on selection
  getBoard(scrumUserId: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    console.log("scrumUserId: ", scrumUserId);
    return this.http.post(BoardsService.BOARDS_URL, scrumUserId, this.options);
  }

  //Add a board based with a board name
  addBoard(newBoard: NewBoard): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(BoardsService.ADD_BOARD_URL, newBoard, this.options);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
