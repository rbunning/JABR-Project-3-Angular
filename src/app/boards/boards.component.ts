import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BoardsService } from './boards.service';
import { Board } from './board.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoardDetailComponent } from '../board-detail/board-detail.component';
import { NewBoard } from './newBoard.interface';

import { Pipe, PipeTransform } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {

  boards: Board[];

  order = "boardId";
  ascending = true;

  newBoard: NewBoard = {
    boardName:''
  }

  selectedBoard: Board;
  id: number;
  name: string;
  error: any;

  constructor(
    private router: Router,
    private boardsService: BoardsService) { }

  ngOnInit() {
    this.displayAllBoards();
  }

  scrumUserId = JSON.parse(localStorage.getItem("currentUser")).scrumUserId;

  roleId = JSON.parse(localStorage.getItem('currentUser')).roleType.roleId;

  displayAllBoards() {
    this.boardsService.getAllBoards().subscribe(
      res => {
        this.boards = res;
        console.log("This is somethign for board ", this.boards);
        localStorage.setItem('currentBoards', JSON.stringify(res));
      })
    console.log("Hello id", this.scrumUserId);
  }

  onSelect(board: Board, num: number, str: string): void {
    console.log("This board: ", board);
    this.selectedBoard = board;
    this.id = num;
    this.name = str;
    this.gotoDetail();
    console.log("current board: " + JSON.stringify(board));
    localStorage.setItem('currentBoard', JSON.stringify(board));
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.id]);
  }

  addBoard(): void {

    if(this.newBoard.boardName == '') {
      console.error("You must have a name for board")
      window.alert("Board Name cannot be empty");
    } else {
        this.boardsService.addBoard(this.newBoard).subscribe(
          res => {
            console.log("This is for testing: ", res);
          })
      }
  }
}

