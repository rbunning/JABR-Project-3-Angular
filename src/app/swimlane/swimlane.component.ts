import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwimlaneService } from './swimlane.service';
import { Story } from './story.interface';
import { CreateStoryService }  from '../create-story/create-story.service';
import { MoveStory } from './move-story.interface';

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

  constructor(
    private zone: NgZone,
    private router: Router,
    private swimlaneService: SwimlaneService,
    private createStoryService: CreateStoryService
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
}
