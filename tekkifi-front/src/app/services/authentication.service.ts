import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SERVER_API_URL, TOKEN} from '../app.constant';
import {User} from '../models/user.model';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.localStorage.retrieve('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(email: string, password: string) {
      console.log('serice authhhhhhhhhhhhhhhhhhhhh');
      return this.http.post<any>(`${SERVER_API_URL}/token/`, {email, password});
      // .pipe(map(
      //     user => {
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   // console.log(JSON.stringify(user.token.token));
      //   this.sessionStorage.store('currentUser', JSON.stringify(user));
      //   this.sessionStorage.store('token', JSON.stringify(user.token.token));
      //   this.sessionStorage.store('role', JSON.stringify(user.role));
      //   this.sessionStorage.store('userId', JSON.stringify(user.userId));
      //   this.sessionStorage.store('userName', JSON.stringify(user.userName));
      //   this.sessionStorage.store('telephone', JSON.stringify(user.telephone));
      //   this.currentUserSubject.next(user);
      //   // return user;
      // }
      // ));
  }
listUsers(){
    return this.http.get(`${SERVER_API_URL}/bo-user` , {});
}
  logout() {
    this.sessionStorage.clear('token');
    this.sessionStorage.clear('userName');
    this.sessionStorage.clear('userRole');
    this.sessionStorage.clear('userId');
    this.sessionStorage.clear('userName');
    this.sessionStorage.clear('telephone');
    // this.currentUserSubject.next(null);
  }
  getToken() {
    return this.sessionStorage.retrieve('token');
  }
  getUserName() {
    return  this.sessionStorage.retrieve('userName');
  }
  getUserRole() {
    return this.sessionStorage.retrieve('role');
  }
}
