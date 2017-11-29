import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Story } from './story.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class SwimlaneService {

  private GET_ALL_STORIES = "/allboardStories/";

  getAllStories(boardId: number) {
    return this.http.get(this.GET_ALL_STORIES + boardId)
                    .map(response => <Story[]> response.json());
  }

  constructor(
    private http: Http) { }
}
