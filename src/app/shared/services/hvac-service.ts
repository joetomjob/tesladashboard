import { Injectable } from '@angular/core';
import {HVAC} from '../models/hvac-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HvacService {

  constructor(private http: HttpClient) { }
  hvacDataUrl = 'assets/mock-data/hvac-data.json';
  hvacDataUrl2 = 'assets/mock-data/hvac-data2.json';

  public getHVACInfo() {
    return this.http.get<HVAC>(this.hvacDataUrl);
  }

  public getHVACInfo2() {
    return this.http.get<HVAC>(this.hvacDataUrl2);
  }

}
