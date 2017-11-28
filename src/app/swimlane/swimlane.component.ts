import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css']
})
export class SwimlaneComponent implements OnInit {
  private currenBoard = JSON.parse(localStorage.getItem('currentBoardForLanes'));
  constructor() { }

  ngOnInit() {
    console.log("Why???", this.currenBoard);
  }

}
