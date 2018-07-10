import { Injectable } from '@angular/core';
import {Identity} from '../models/identity-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient) { }
  identityDataUrl = 'assets/mock-data/identity-data.json';

  public getIdentityInfo() {
    return this.http.get<Identity>(this.identityDataUrl);
  }

}
