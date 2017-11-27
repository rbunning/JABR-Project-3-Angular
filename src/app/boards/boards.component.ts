import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  var scrumUserId = JSON.parse(localStorage.getItem('currentUser').scrumUserId);

}

