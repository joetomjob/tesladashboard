import { Injectable } from '@angular/core';
import {DriverState} from '../models/driverstate-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DriverstateService {

  constructor(private http: HttpClient) { }
  driverstateDataUrl = 'assets/mock-data/driverstate-data.json';
  driverstateData2rl = 'assets/mock-data/driverstate-data2.json';

  public getDriverStateInfo() {
    return this.http.get<DriverState>(this.driverstateDataUrl);
  }

  public getDriverStateInfo2() {
    return this.http.get<DriverState>(this.driverstateData2rl);
  }

}
