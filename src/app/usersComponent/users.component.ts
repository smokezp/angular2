import {Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[];

  // selectedHero: Hero;

  constructor(private userService: UserService) {
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.userService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
  //

  getUsers(): void {
    // return
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  //
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}
