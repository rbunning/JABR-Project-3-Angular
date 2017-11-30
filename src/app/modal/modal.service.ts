import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../task/task.interface';

@Injectable()
export class ModalService {

    _tasksArray: Task[];
    
    showCurrentTasks(currentTasks){
       return this._tasksArray = currentTasks;
    }

}