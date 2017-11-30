import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
// import { ConfirmModel } from './modal.interface';
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
    storyId: null,  //change this later to import Story and get storyId from there
    description : ''
  }

  _tasksArray: Task[];

  constructor(private taskService: TaskService, dialogService: DialogService, modalService: ModalService) {
    super(dialogService);
    
  }

  ngOnInit() {
    this._tasksArray = JSON.parse(localStorage.getItem('currentTasks'));
    // this._tasksArray = this.modalService._tasksArray; 
    // console.log("Modal tasks: " + this._tasksArray);
    // // localStorage.removeItem('currentTasks');
  }

  showCurrentTasks(currentTasks){
    return this._tasksArray = currentTasks;
 }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    // localStorage.removeItem('currentTasks');
    this.result = true;
    this.close();
  }
  
  

  //create/add a new task
  taskSubmit() {
    console.log("Creating new task: ", (this.task).description);
    // this.task.storyId = this.story.storyId;
    this.task.storyId = JSON.parse(localStorage.getItem('currentStoryId'));
    console.log("New task storyId: ", (this.task.storyId));
    this.taskService.createTask(this.task).subscribe(
      res => {
          console.log("Create Task Success!", res);
        //immediately do a getTasks to refresh the list? 
      });
  }

}
