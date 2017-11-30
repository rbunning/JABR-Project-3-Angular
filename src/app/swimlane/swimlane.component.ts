import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwimlaneService } from './swimlane.service';
import { Story } from './story.interface';
import { Input } from '@angular/core';
import { CreateStoryService }  from '../create-story/create-story.service';
import { MoveStory } from './move-story.interface';

import { ModalComponent} from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { DialogService } from "ng2-bootstrap-modal";
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

  displayStory: Story ={
    storyId: null,
    storyDesc:  '',
    storyName: '',
    storyPoints: null
  }


  stories: Story[];
  
  task: Task = {
    taskId:    null,
    storyId: null,  //change this later to import Story and get storyId from there
    description : ''
  }

  modalComponent: ModalComponent;

  @Input() _tasksArray: Task[];

  constructor(
    private zone: NgZone,
    private router: Router,
    private swimlaneService: SwimlaneService,
    private createStoryService: CreateStoryService,
    private dialogService:DialogService,
    private chartService: ChartService,
    private taskService: TaskService,
    private modalService: ModalService
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

  //function for the button that retrieves burndown chart for current board
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

  /*Add this or change this to display tasks function
    clear out unneccessary modal stuff from example 
    make sure modal displays current Story name, Story Description, All current tasks, 
           ability to create a new task in modal and hopefully have it show immediately without having to reload or close modal
  */
  
  //This will have a modal display the story name, story description, all the current tasks for the story, and allow the creation of a new story
  displayTasks(currentStoryId, currentStoryName, currentStoryDescription) {
    let disposable = this.dialogService.addDialog(ModalComponent, {
        title: currentStoryName,  //test this
        message: currentStoryDescription
      } )
        //Display tasks here
        console.log("Get tasks by this ID: " + currentStoryId);
              this.taskService.getTasks(currentStoryId).subscribe(
                res => {
                  console.log("Get tasks success!", res);
                  //places reponse of task-manager-service/getAllTasks/{storyId} into task array
                  // this._tasksArray = res;
                  // localStorage.removeItem('currentTasks');
                  // this.modalComponent._tasksArray = res;
                  // this.modalComponent.showCurrentTasks(this._tasksArray);
                  localStorage.setItem('currentTasks', JSON.stringify(res));
                  localStorage.setItem('currentStoryId', currentStoryId);
                  console.log("Current tasks: " + JSON.stringify(res) );
                  
                } 
              )
  
}
  
}
