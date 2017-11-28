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
  name = 'really?';
  stories: Story[];

  constructor(
    private swimlaneService: SwimlaneService
    ) { }

  ngOnInit() {
    console.log("This is currentBoard", this.currentBoard);
    console.log(this.currentBoardId + ' ' + this.currentBoardName);
  }
}
