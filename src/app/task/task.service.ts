import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
    // 
    private static getTasksUrl = '/getTask/{task.storyId}'

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    createTask(task:Task): Observable<any> {
        return this.http.post(TaskService.getTasksUrl, task, {headers: this.headers});
    }

}