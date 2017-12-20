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

  findUser(fuser: any): Promise<User> {
    return this.getUsers()
      .then(users => users.find(
        user =>
          user.username === fuser.username &&
          user.password === fuser.password
        )
      );
  }

  create(user: User) {
    return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(() => console.log('err'));
  }

}
