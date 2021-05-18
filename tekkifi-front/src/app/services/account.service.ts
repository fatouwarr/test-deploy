import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import {SERVER_API_URL} from '../app.constant';


@Injectable({ providedIn: 'root' })
export class AccountService {
  private userIdentity: Account;
  private authenticated = false;
  private authenticationState = new Subject<any>();
  private accountCache$: Observable<Account>;

  constructor(private sessionStorage: SessionStorageService, private http: HttpClient) {}

  fetch(): Observable<Account> {
    return this.http.get<Account>(SERVER_API_URL + '/profil/infos/');
  }

  // save(account: Account): Observable<Account> {
  //   return this.http.post<Account>(SERVER_API_URL + 'api/account', account);
  // }
  // savenewpwd(account: Account): Observable<Account> {
  //   return this.http.post<Account>(SERVER_API_URL + 'api/account/change-password', account);
  // }
  // authenticate(identity) {
  //   this.userIdentity = identity;
  //   this.authenticated = identity !== null;
  //   this.authenticationState.next(this.userIdentity);
  // }

  identity(force?: boolean): Observable<Account> {
    if (force) {
      this.accountCache$ = null;
    }

    if (!this.accountCache$) {
      this.accountCache$ = this.fetch().pipe(
        tap(
          account => {
            if (account) {
              this.userIdentity = account;
              this.authenticated = true;
              // After retrieve the account info, the language will be changed to
              // the user's preferred language configured in the account setting
            } else {
              this.userIdentity = null;
              this.authenticated = false;
            }
            this.authenticationState.next(this.userIdentity);
          },
          () => {
            this.userIdentity = null;
            this.authenticated = false;
            this.authenticationState.next(this.userIdentity);
          }
        ),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isIdentityResolved(): boolean {
    return this.userIdentity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }
}
