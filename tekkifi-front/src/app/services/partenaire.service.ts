import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPartenaire} from '../models/partenaire.model';
import {SERVER_API_URL} from '../app.constant';

type EntityResponseType = HttpResponse<IPartenaire>;
type EntityArrayResponseType = HttpResponse<IPartenaire[]>;

@Injectable({ providedIn: 'root' })
export class PartenaireService {

  constructor(protected http: HttpClient) {}

  create(partenaire: IPartenaire): Observable<EntityResponseType> {
    return this.http.post<IPartenaire>(SERVER_API_URL, partenaire, { observe: 'response' });
  }

  update(partenaire: IPartenaire): Observable<EntityResponseType> {
    return this.http.put<IPartenaire>(SERVER_API_URL, partenaire, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPartenaire>(`${SERVER_API_URL}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = null;
    return this.http.get<IPartenaire[]>(SERVER_API_URL, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${SERVER_API_URL}/${id}`, { observe: 'response' });
  }
}
