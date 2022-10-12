import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import {BodyInfo} from '../bodyInfo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BodiesService {
  private apiURL: string = "https://api.le-systeme-solaire.net/rest/bodies";

  constructor(private http: HttpClient) { }

  getBodies(): Observable<any> {
    return this.http.get<any>(this.apiURL, httpOptions);
  }

  getBody(bodyName: string): Observable<BodyInfo> {
    const url = `${this.apiURL}/${bodyName}`;
    return this.http.get<BodyInfo>(url, httpOptions);
  }
}
