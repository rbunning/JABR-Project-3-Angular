import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Comment } from './comment.interface';
import { AddComment } from './add-comment.interface';
@Injectable()
export class CommentsService {

  private GET_COMMENTS = '/board-comment-service/getCommentsForBoard/';

  private static readonly ADD_COMMENT = '/board-comment-service/newComment';

  getCommentsForBoard(boardId: number) {
    return this.http.get(this.GET_COMMENTS + boardId)
                    .map(response => <Comment[]> response.json());
  }

  addComment(comment: AddComment): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(CommentsService.ADD_COMMENT, comment, {headers: headers});
  }

  visible: boolean;

  hide() { this.visible = false; }

  show() { this.visible = true; }

  constructor(
    private http: Http,
    private httpClient: HttpClient){
    this.visible = false;
  }

}
