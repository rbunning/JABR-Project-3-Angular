import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.message';
import { UserService } from './user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id:       null,
    username: '',
    password: '',
    roleType: null
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      res => {
        if(res.roleType == 1) {
          this.router.navigateByUrl('/scrum-home');
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        else if(res.roleType == 2) {
          this.router.navigateByUrl('/user-home');
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        });
  }

}
