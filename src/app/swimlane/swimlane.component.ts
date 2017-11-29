import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwimlaneService } from './swimlane.service';
import { Story } from './story.interface';

import { CreateStoryService }  from '../create-story/create-story.service';
import { MoveStory } from './move-story.interface';

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

  lanes = [
    { laneType: "Backlog", laneId: 1 },
    { laneType: "To Do", laneId: 2 },
    { laneType: "In Progress", laneId: 3 },
    { laneType: "Test", laneId: 4 },
    { laneType: "Verify", laneId: 5 },
    { laneType: "Done", laneId: 6 },
  ]

  story: MoveStory ={
    storyId: null,
    laneTypeId: null
  }


  stories: Story[];
  task: Task = {
    taskId:    null,
    storyId: null,  //change this later to import Story and get storyId from there
    description : ''
  }

  constructor(
    private zone: NgZone,
    private router: Router,
    private swimlaneService: SwimlaneService,
    private createStoryService: CreateStoryService,

    private chartService: ChartService,
    private taskService: TaskService,
    ) { }

  ngOnInit() {
    this.displayAllStories();
  }

  addStory(): void {
    this.router.navigateByUrl("/add-story");
  }

  displayAllStories(): void {
    this.swimlaneService.getAllStories(this.currentBoardId).subscribe(
      res => {
        this.stories = res;
        console.log("Stories: ", this.stories);
        localStorage.setItem('curentStories', JSON.stringify(res));
      })
  }


  switchLane(s: Story, id: number, index: number): void {
    console.log("index: ", index);
    console.log("story: ", s);
    console.log("story id ",id);
    this.story.storyId = id;
    this.story.laneTypeId = index + 1;

    console.log(this.story.storyId);
    console.log(this.story.laneTypeId);

    this.swimlaneService.moveStoryLane(this.story).subscribe(
      res => {
        this.zone.run(() => {
          console.log("Swimlane has changed ");
          // this.router.navigate(['/detail', this.currentBoardId]);
          this.displayAllStories();
        });
      });
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
