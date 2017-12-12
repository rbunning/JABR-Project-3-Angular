import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../task/task.interface';

@Injectable()
export class ModalService {

    private static getAllTasksByStoryIdURL = '/task-manager-service/getAllTasks/';

    _tasksArray: Task[];

    tasksLoaded: boolean; 

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    showCurrentTasks(currentTasks){
       return this._tasksArray = currentTasks;
    }

    getModalTasks(storyIdInput): Observable<any> {
        return this.http.get(ModalService.getAllTasksByStoryIdURL + storyIdInput,  {headers: this.headers});
    }

    displayTasksError() {
        
    }

}
