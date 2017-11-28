import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BoardsService } from './boards.service';
import { Board } from './board.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoardDetailComponent } from '../board-detail/board-detail.component';
import { NewBoard } from './newBoard.interface';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  boards: Board[];

  newBoard: NewBoard = {
    boardName:''
  }

  selectedBoard: Board;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private boardsService: BoardsService) { }

  ngOnInit() {
    this.displayAllBoards();
  }

  //use this syntax to fetch the specific variable you need
  // var scrumUserId = JSON.parse(localStorage.getItem('currentUser')).scrumUserId;
  scrumUserId = JSON.parse(localStorage.getItem("currentUser")).scrumUserId;

  roleId = JSON.parse(localStorage.getItem('currentUser')).roleType.roleId;

  // displayAllBoards() {
  //   this.boardsService.getBoards(this.scrumUserId).subscribe(
  //     res => {
  //       this.boards = res;
  //       console.log("This is somethign for board ", this.boards);
  //       localStorage.setItem('currentBoards', JSON.stringify(res));
  //     })
  // }

  displayAllBoards() {
    this.boardsService.getAllBoards().subscribe(
      res => {
        this.boards = res;
        console.log("This is somethign for board ", this.boards);
        localStorage.setItem('currentBoards', JSON.stringify(res));
      })
  }

  onSelect(board: Board): void {
    this.selectedBoard = board;
  }

  addBoard(): void {
    this.boardsService.addBoard(this.newBoard).subscribe(
      res => {
        console.log("This is for testing: ", res);
      })
  }
}

