import { Component, OnInit } from '@angular/core';
import { AddUserService } from './add-user.service';
import { User } from './user.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private currentBoard = JSON.parse(localStorage.getItem('currentBoard'));
  currentBoardId = this.currentBoard.boardId;

  usersOnBoard: User[];
  usersNotOnBoard: User[];

  constructor(
    private addUserService: AddUserService,
    private router: Router) { }

  ngOnInit() {
    this.getUsersForBoard();
    this.getUsersNotOnBoard();
  }

  getUsersForBoard(): void {
    this.addUserService.getUsersForBoard(this.currentBoardId).subscribe(
      res => {
        this.usersOnBoard = res;
        console.log(this.usersOnBoard);
      });
  }

  getUsersNotOnBoard(): void {
    this.addUserService.getUsersNotOnBoard(this.currentBoardId).subscribe(
      res => {
        this.usersNotOnBoard = res;
        console.log(this.usersNotOnBoard);
      })
  }

}
