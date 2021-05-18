
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../app.constant';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (request.url.startsWith('http') && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
      return next.handle(request);
    }

    let token = this.localStorage.retrieve('token') || this.sessionStorage.retrieve('token');
    if (token) {
      token = token.slice(1, -1);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
// constructor(public auth: LoginService) {}
// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//   request = request.clone({
//     setHeaders: {
//       Authorization: `Bearer ${TOKEN}`
//     }
//   });
// return next.handle(request);
// }
