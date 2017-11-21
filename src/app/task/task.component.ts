import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.interface';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    taskId:    null,
    storyId: null,  //change this later to import Story and get storyId from there
    description : null
  }
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  taskSubmit() {
    this.taskService.createTask(this.task).subscribe(
      res => {
        
      }
    )
  }

}
