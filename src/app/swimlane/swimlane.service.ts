import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Story } from './story.interface';
import 'rxjs/add/operator/map';
import { MoveStory } from './move-story.interface';
import { DeleteStory } from './delete-story.interface';

@Injectable()
export class SwimlaneService {

  private GET_ALL_STORIES = "/story-manager-service/allboardStories/";

  private ADD_USER_TO_BOARD = "/user-service/addUserToBoard"

  private static readonly DELETE_STORY_URL = "/story-manager-service/deleteStory/";

  private static readonly MOVE_STORY_URL ='/story-manager-service/moveStoryLane';

  // private headers = new HttpHeaders({'Content-Type': 'application/json'});

  getAllStories(boardId: number) {
    return this.http.get(this.GET_ALL_STORIES + boardId)
                    .map(response => <Story[]> response.json());
  }

  moveStoryLane(story: MoveStory): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(SwimlaneService.MOVE_STORY_URL, story, {headers: headers});
  }

  deleteStory(story: DeleteStory): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(SwimlaneService.DELETE_STORY_URL, story, {headers: headers});
  }

  addUserToBoard():void {

  }

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }
}
