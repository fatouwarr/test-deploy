import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IDiplome} from '../models/diplome.model';
import {SERVER_API_URL} from '../app.constant';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";

type EntityResponseType = HttpResponse<IDiplome>;
type EntityArrayResponseType = HttpResponse<IDiplome[]>;

@Injectable({ providedIn: 'root' })
export class DiplomeService {
  public resourceUrl = SERVER_API_URL + '/diplomes/';

  constructor(protected http: HttpClient,
              protected sessionStorageService: SessionStorageService, protected localStorageService: LocalStorageService) {}

  create(nom: string, niveau: number): Observable<EntityResponseType> {
      console.log('+++++++++++++++++++++++++++++++++');
      console.log(this.localStorageService.retrieve('token'));
      console.log(this.sessionStorageService.retrieve('token'));
      return this.http.post<any>(this.resourceUrl, {nom, niveau}, { observe: 'response' });
  }

  update(diplome: IDiplome): Observable<EntityResponseType> {
    return this.http.put<IDiplome>(this.resourceUrl, diplome, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDiplome>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    // const options = createRequestOption(req);
    const options = null;
    return this.http.get<IDiplome[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
