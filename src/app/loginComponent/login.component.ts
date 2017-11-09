import {Component} from '@angular/core';

// import {Router, ActivatedRoute} from '@angular/router';


import {UserService} from '../usersComponent/user.service';



@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  model: any = {};
  // loading = false;
  // returnUrl: string;

  constructor( private userService: UserService) {
  }

  // ngOnInit() {
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  // }

  login() {

    let user = this.userService.findUser(this.model);

    console.log(user);

    // this.loading = true;
  }
}
