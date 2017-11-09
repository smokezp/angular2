import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../usersComponent/user.service';

@Component({
  // moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};

  constructor(private router: Router,
              private userService: UserService) {
  }

  register() {
    // delete this.model.password2;
    // let newUser = this.model;
    // extend(true, {}, oldObject);
    const newUser = {...this.model};
    delete newUser.password2;

    this.userService.create(newUser)
      .then(
        data => {
          this.router.navigate(['/users']);
        });
  }
}
