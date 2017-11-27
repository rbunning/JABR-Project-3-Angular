import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roleId = JSON.parse(localStorage.getItem('currentUser')).roleType.roleId;

  constructor() { }

  ngOnInit() {
  }

}
