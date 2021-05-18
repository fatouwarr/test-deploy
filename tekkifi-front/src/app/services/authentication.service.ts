import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SERVER_API_URL, TOKEN} from '../app.constant';
import {User} from '../models/user.model';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {map} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private statusSource = new BehaviorSubject(false);
  currentStatus = this.statusSource.asObservable();

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.localStorage.retrieve('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(email: string, password: string) {
      return this.http.post<any>(`${SERVER_API_URL}/token/`, {email, password}).pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user.token.token));
          this.sessionStorage.store('token', JSON.stringify(user.access));
          this.localStorage.store('token', JSON.stringify(user.access));
          this.currentUserSubject.next(user);
          console.log('*****************************');
          console.log(this.sessionStorage.retrieve('token'));
          console.log(this.localStorage.retrieve('token'));
          return user;
      }));
      //   this.sessionStorage.store('role', JSON.stringify(user.role));
      //   this.sessionStorage.store('userId', JSON.stringify(user.userId));
  }
listUsers(){
    return this.http.get(`${SERVER_API_URL}/bo-user` , {});
}
  logout() {
    this.sessionStorage.clear('token');
    this.localStorage.clear('token');
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
  //   setAuthenticated(value) {
  //   this.isAuthenticated.next(value);
  // }
  //   getAuthenticated() {
  //   return this.isAuthenticated;
  // }
    changeStatus(status: boolean){
      this.statusSource.next(status);
    }
}
