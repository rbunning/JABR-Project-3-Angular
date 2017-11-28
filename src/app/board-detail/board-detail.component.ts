import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { Board } from '../boards/board.interface';
import { BoardsService } from '../boards/boards.service';
import { NewBoard } from '../boards/newBoard.interface';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  @Input() board: Board;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(): void{

  }
}
