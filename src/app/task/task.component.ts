import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.interface';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    taskId:    null,
    storyId: null,  
    description : ''
  }

  _tasksArray: Task[];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  taskSubmit() {
    this.taskService.createTask(this.task).subscribe(
      res => {
      });
  }

  //this will be obsolete once it is implemented in swimlane component
  getTasksSubmit(storyIdInput) {

    this.taskService.getTasks(storyIdInput).subscribe(
      res => {
        //places reponse of task-manager-service/getAllTasks/{storyId} into task array
        this._tasksArray = res;
      }
    )
  }

}
