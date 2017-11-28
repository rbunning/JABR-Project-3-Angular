import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateStory } from './create-story.interface';

@Injectable()
export class CreateStoryService {
    private static readonly ADD_STORY_URL = '/story-manager-service/addStory';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    createNewStory(story: CreateStory): Observable<any> {
        return this.http.post(CreateStoryService.ADD_STORY_URL, story, {headers: this.headers});
    }
}