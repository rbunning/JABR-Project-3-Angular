import { Component, OnInit } from '@angular/core';
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

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("something happened?", (this.user).scrumUserUsername);
    this.userService.loginUser(this.user).subscribe(
      res => {
      //Below is for testing
        console.log('Login successful -POST ', res);
      }, error => {
        console.log('Fail to login');
      }, () => {
        console.log('Now completed');
      });
  }
}
