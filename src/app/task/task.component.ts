import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.interface';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    taskId:    null,
    storyId: null,  //change this later to import Story and get storyId from there
    description : ''
  }
  constructor(
    private taskService: TaskService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  taskSubmit() {
    console.log("Creating new task: ", (this.task).description);
    this.taskService.createTask(this.task).subscribe(
      res => {
          console.log("Create Task Success!", res);
      });
  }

}
