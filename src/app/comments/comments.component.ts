import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommentsService } from './comments.service';
import { AddComment } from './add-comment.interface';
import { Comment } from './comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  private currentBoard = JSON.parse(localStorage.getItem('currentBoard'));
  currentBoardId = this.currentBoard.boardId;

  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  currentUserId = this.currentUser.scrumUserId;

  comments: Comment[];

  addComment: AddComment = {
    boardId: null,
    scrumUserId: null,
    comment: ''
  }

  getCommentsForBoard(): void {
    this.commentsService.getCommentsForBoard(this.currentBoardId).subscribe(
      res=> {
        this.comments = res;
        console.log("Display all comments", this.comments);
      });
  }

  newComment():void {
    this.addComment.boardId = this.currentBoardId;
    this.addComment.scrumUserId = this.currentUserId;
    this.commentsService.addComment(this.addComment).subscribe(
      res => {
        this.getCommentsForBoard();
      });
  }

  constructor(
    private router: Router,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.getCommentsForBoard();
  }

}
