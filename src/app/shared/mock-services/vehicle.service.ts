import { Injectable } from '@angular/core';
import {VehicleInfo} from '../models/vehicle-info-model';
import { HttpClient } from '@angular/common/http';
import {Identity} from '../models/identity-model';
import {Configuration} from '../models/configuration-model';
import {StateOfChare} from '../models/stateofcharge-model';
import {DriverState} from '../models/driverstate-model';
import {BodyControl} from '../models/body-controls-model';
import {HVAC} from '../models/hvac-model';
import {FirmWare} from '../models/firmware-model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  vehicleDataUrl = 'assets/mock-data/vehicle-data.json';

  public getVehicleData() {
    return this.http.get<VehicleInfo>(this.vehicleDataUrl);
  }
}
