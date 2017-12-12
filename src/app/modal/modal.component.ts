import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Task } from '../task/task.interface'
import { TaskService } from '../task/task.service';
import { ModalService } from './modal.service';

export interface ModalModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends DialogComponent<ModalModel, boolean> implements ModalModel, OnInit {

  title: string;
  message: string;

  task: Task = {
    taskId:    null,
    storyId: null,  
    description : ''
  }

  _tasksArray: Task[];

  tasksLoaded: boolean;

  taskServiceStatus: string;

  constructor(private taskService: TaskService, dialogService: DialogService, modalService: ModalService) {
    super(dialogService);

  }

  ngOnInit() {
    this.showCurrentTasks();
  }

  showCurrentTasks() {
    this.taskServiceStatus = "Loading...";
    this.tasksLoaded = false;
    this.taskService.getTasks(localStorage.getItem('currentStoryId')).subscribe(
      res => {
        //places reponse of task-manager-service/getAllTasks/{storyId} into task array
          this._tasksArray = res;
          this.tasksLoaded = true;
        
      },
      error => { // if there is an error with getAllStories in swimlaneService, this will execute
        this.tasksLoaded = false;
        this.taskServiceStatus = "Task service is temporarily unavailable";
      }
    )
 }

  confirm() {
    this.result = true;
    this.close();
  }



  //create/add a new task
  taskSubmit() {
    this.task.storyId = JSON.parse(localStorage.getItem('currentStoryId'));
    this.taskService.createTask(this.task).subscribe(
      res => {
        this.showCurrentTasks();
      });
  }

}
