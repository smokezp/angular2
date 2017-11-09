import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = '/api/users';

  constructor(private http: Http) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(() => console.log('err'));
  }

  // getById(id: number) {
  //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }
  findUser(fuser: any): Promise<User> {
   return this.getUsers()
     .then(users => users.find(user => user.email == fuser.email && user.password == fuser.password));

    // this.heroService
    //   .delete(hero.id)
    //   .then(() => {
    //     this.heroes = this.heroes.filter(h => h !== hero);
    //     if (this.selectedHero === hero) {
    //       this.selectedHero = null;
    //     }
    //   });
  }

  create(user: User) {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(() => console.log('err'));


    // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  // update(user: User) {
  //   return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // private helper methods

  // private jwt() {debugger
  //   // create authorization header with jwt token
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));debugger
  //   if (currentUser && currentUser.token) {debugger
  //     let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
  //     return new RequestOptions({headers: headers});
  //   }
  // }
}
