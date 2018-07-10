import { Injectable } from '@angular/core';
import {HVAC} from '../models/hvac-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HvacService {

  constructor(private http: HttpClient) { }
  hvacDataUrl = 'assets/mock-data/hvac-data.json';

  public getHVACInfo() {
    return this.http.get<HVAC>(this.hvacDataUrl);
  }

}
