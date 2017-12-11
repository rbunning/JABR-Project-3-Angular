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

    visible: boolean;

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }
  
  fallbackMessage = {
    message: ""
  }

  constructor(
    private http: Http,
    private httpClient: HttpClient){
    this.visible = false;
  }

  boardArray: Board [];
  //Retrieve all boards from current user

  getAllBoards() {
    return this.http.get(this.GET_ALL_BOARDS, this.options)
    .map(response => <Board[]> response.json())
    .catch( (error: any) => {
      console.log("Error with getAllBoards");

      return Observable.throw( new Error("An error occurred with getAllBoards: "+ error.status));
  });
                   
  }

  // getAllBoards() {
  //   return this.http.get(this.GET_ALL_BOARDS, this.options)
  //   .map(response => {
  //     if (response.status === 503 || response.status != 200){
  //       console.log("Service is unavailable" + response.statusText);
  //       return response.json();
  //     //  response => <Board[]> response.json();
  //     // return <Board[]>: response.json();
  //     }
  //     else{
  //       console.log("This should be good" + response, " this is inside: " + response.json());
  //       return response.json();
  //       //  response => <Board[]> response.json();
  //       // return <Board[]>: response.json();
  //     }
      
  //   });
    
                   
  // }

  // getAllBoards() {
  //   return this.http.get(this.GET_ALL_BOARDS, this.options)
  //   .map(response => {
  //     if (response.status === 200) {
  //       console.log("This should be good" + response, " this is inside: " + response.json());
  //       return response.json();
  //     }
        
  //       //  response => <Board[]> response.json();
  //       // return <Board[]>: response.json();
      
      
  //   })
  //   .catch(this.handleError);
    
                   
  // }

  
  // getAllBoards() {
  //   return this.http.get(this.GET_ALL_BOARDS, this.options)
  //   .map(response => <Board[]> response.json())
  //   .catch(this.handleError);
                   
  // }

  // private handleError (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }


  //Delete a board based on boardId
  deleteBoard(board: DeleteBoard): Observable<any> {
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(BoardsService.DELETE_BOARD_URL, board, this.options );
  }

  //Retrieve a single board based on selection
  getBoard(scrumUserId: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'text/plain'});

    return this.http.post(BoardsService.BOARDS_URL, scrumUserId, this.options);
  }

  //Add a board based with a board name
  addBoard(newBoard: NewBoard): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(BoardsService.ADD_BOARD_URL, newBoard, this.options);
  }

  private handleError(error: any): Promise<any> {
    console.log("Handled the error");
      return Promise.reject(error.message || error);
  }
}
