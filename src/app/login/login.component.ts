import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.interface';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    scrumUserUsername: '',
    scrumUserPassword: ''
  }

  userLoaded: boolean;

  userServiceStatus: string;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userLoaded = true;
  }

  onSubmit() {
    this.userServiceStatus = "Loading...";
    this.userLoaded = false;
    this.userService.loginUser(this.user).subscribe(
      res => {
        this.userLoaded = true;
        this.router.navigateByUrl('/home');
        localStorage.setItem('currentUser', JSON.stringify(res));
    },
    error => { // if there is an error with getAllStories in swimlaneService, this will execute
      this.userLoaded = false;
      this.userServiceStatus = "Our apologies. The JAB'R system is currently undergoing maintenence. Please try again later.";
    }
  )
  }
}
