import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
    // 
    private static readonly NEW_TASK_URL = '/task-manager-service/newTask';
    private static getAllTasksByStoryIdURL = '/task-manager-service/getAllTasks/';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    createTask(task: Task): Observable<any> {
        console.log('task.service.ts storyId=' + task.storyId + ' task description ' + task.description);
        return this.http.post(TaskService.NEW_TASK_URL, task, {headers: this.headers});
    }

    //gets input of storyId and adds to getAllTasks URL
    // will change this later to simply grab the storyid of the story in the lane
    getTasks(storyIdInput): Observable<any> {
        console.log('getTasks storyID = ' + storyIdInput);
        return this.http.get(TaskService.getAllTasksByStoryIdURL + storyIdInput,  {headers: this.headers});
    }


}