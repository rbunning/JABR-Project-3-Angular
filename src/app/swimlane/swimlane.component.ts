import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwimlaneService } from './swimlane.service';
import { Story } from './story.interface';
import { ChartComponent } from '../chart/chart.component';
import { ChartService } from '../chart/chart.service';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.interface';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css']
})

export class SwimlaneComponent implements OnInit {

  private currentBoard= JSON.parse(localStorage.getItem('currentBoardForLanes'));
  currentBoardId = this.currentBoard[0].boardId;
  currentBoardName = this.currentBoard[0].boardName;
  name = 'really?';
  stories: Story[];
  task: Task = {
    taskId:    null,
    storyId: null,  //change this later to import Story and get storyId from there
    description : ''
  }

  constructor(
    private swimlaneService: SwimlaneService,
    private chartService: ChartService,
    private taskService: TaskService
    ) { }

  ngOnInit() {
    console.log("This is currentBoard", this.currentBoard);
    console.log(this.currentBoardId + ' ' + this.currentBoardName);
  }

  getChartSubmit() {
    console.log("current board id: " + this.currentBoardId);
    this.chartService.getChart(this.currentBoardId).subscribe(
      res => {
        console.log("Get chart success!", res);
        //places reponse of task-manager-service/getAllTasks/{storyId} into task array
        localStorage.setItem('currentChart', JSON.stringify(res));
        // this.chart = res;
      }
    )

  }

  taskSubmit() {
    console.log("Creating new task: ", (this.task).description);
    // this.task.storyId = this.story.storyId;
    this.taskService.createTask(this.task).subscribe(
      res => {
          console.log("Create Task Success!", res);
      });
  }
}
