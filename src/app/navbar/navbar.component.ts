import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roleId = JSON.parse(localStorage.getItem('currentUser')).roleType.roleId;

  constructor(
    private navbarService: NavbarService) { }

  ngOnInit() {
    if( this.roleId != 2) {
      this.navbarService.hide();
    } else {
      this.navbarService.show();
    }
  }

}
