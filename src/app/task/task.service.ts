import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions  } from '@angular/http';
import { Task } from './task.interface';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class TaskService {

    private static readonly NEW_TASK_URL = '/task-manager-service/newTask';
    private static getAllTasksByStoryIdURL = '/task-manager-service/getAllTasks/';

    // This setup the header information for the request.
    private headers = new Headers({
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUsertoken')).token
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http){}

    createTask(task: Task): Observable<any> {
        return this.http.post(TaskService.NEW_TASK_URL, task, this.options);
    }

    getTasks(storyIdInput): Observable<any> {
        return this.http.get(TaskService.getAllTasksByStoryIdURL + storyIdInput,  this.options)
        .map(response => <Task[]> response.json())
        .catch( (error: any) => {
            return Observable.throw( new Error("An error occurred with getTasks: "+ error.status));
        });
    }
}
