import { Injectable } from '@angular/core';
import {StateOfChare} from '../models/stateofcharge-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StateOfchargeService {

  constructor(private http: HttpClient) { }
  stateofchargeDataUrl = 'assets/mock-data/stateofcharge-data.json';
  stateofchargeData2Url = 'assets/mock-data/stateofcharge-data2.json';
  stateofchargeData3Url = 'assets/mock-data/stateofcharge-data3.json';

  public getStateOfChargeInfo() {
    return this.http.get<StateOfChare>(this.stateofchargeDataUrl);
  }

  public getStateOfChargeInfo2() {
    return this.http.get<StateOfChare>(this.stateofchargeData2Url);
  }

  public getStateOfChargeInfo3() {
    return this.http.get<StateOfChare>(this.stateofchargeData3Url);
  }

}
