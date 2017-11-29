import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Story } from './story.interface';
import 'rxjs/add/operator/map';
import { MoveStory } from './move-story.interface';

@Injectable()
export class SwimlaneService {

  private GET_ALL_STORIES = "/story-manager-service/allboardStories/";

  private static readonly MOVE_STORY_URL ='/story-manager-service/moveStoryLane';

  // private headers = new HttpHeaders({'Content-Type': 'application/json'});

  getAllStories(boardId: number) {
    return this.http.get(this.GET_ALL_STORIES + boardId)
                    .map(response => <Story[]> response.json());
  }

  moveStoryLane(story: MoveStory): Observable<any> {
    // return this.httpClient.post(SwimlaneService.MOVE_STORY_URL, story, {headers: this.headers});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(SwimlaneService.MOVE_STORY_URL, story, {headers: headers});
  }

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }
}
