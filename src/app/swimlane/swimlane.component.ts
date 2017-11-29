import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwimlaneService } from './swimlane.service';
import { Story } from './story.interface';
@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css']
})

export class SwimlaneComponent implements OnInit {

  private currentBoard= JSON.parse(localStorage.getItem('currentBoardForLanes'));
  currentBoardId = this.currentBoard[0].boardId;
  currentBoardName = this.currentBoard[0].boardName;

  // lanes = [
  //   "Backlog",
  //   "To Do",
  //   "In Progress",
  //   "Test",
  //   "Verify",
  //   "Done"
  // ]

  lanes = [
    { laneType: "Backlog", laneId: 1 },
    { laneType: "To Do", laneId: 2 },
    { laneType: "In Progress", laneId: 3 },
    { laneType: "Test", laneId: 4 },
    { laneType: "Verify", laneId: 5 },
    { laneType: "Done", laneId: 6 },
  ]


  stories: Story[];

  constructor(
    private router: Router,
    private swimlaneService: SwimlaneService
    ) { }

  ngOnInit() {
    this.displayAllStories();
  }

  displayAllStories(): void {
    this.swimlaneService.getAllStories(this.currentBoardId).subscribe(
      res => {
        this.stories = res;
        console.log("Stories: ", this.stories);
        localStorage.setItem('curentStories', JSON.stringify(res));
      })
  }
}
