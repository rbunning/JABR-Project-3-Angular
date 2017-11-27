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
      // //Below is for testing
      //   console.log('Login successful -POST ', res);
      // }, error => {
      //   console.log('Fail to login');
      // }, () => {
      //   console.log('Now completed');
      // });
      console.log('Login successful -POST ', res);

      // if(res.roleType.roleId == 2){
      console.log('Login successful -POST ', res);
      this.router.navigateByUrl('/scrum-home');
      localStorage.setItem('currentUser', JSON.stringify(res));
        // }
        // else if(   res.roleType.roleId == 1
        //         || res.roleType.roleId == 3
        //         || res.roleType.roleId == 4){
        //   console.log('Login successful -POST ', res);
        //   this.router.navigateByUrl('/user-home')
        //   localStorage.setItem('currentUser', JSON.stringify(res));
    });
  }

}
