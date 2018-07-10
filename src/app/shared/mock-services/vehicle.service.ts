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
  identityDataUrl = 'assets/mock-data/identity-data.json';
  configurationDataUrl = 'assets/mock-data/configuration-data.json';
  stateofchargeDataUrl = 'assets/mock-data/stateofcharge-data.json';
  stateofchargeData2Url = 'assets/mock-data/stateofcharge-data2.json';
  stateofchargeData3Url = 'assets/mock-data/stateofcharge-data3.json';
  driverstateDataUrl = 'assets/mock-data/driverstate-data.json';
  driverstateData2rl = 'assets/mock-data/driverstate-data2.json';
  bodycontrolsDataUrl = 'assets/mock-data/bodycontrols-data.json';
  hvacDataUrl = 'assets/mock-data/hvac-data.json';
  firmwareDataUrl = 'assets/mock-data/firmware-data.json';
  firmwareData2Url = 'assets/mock-data/firmware-data2.json';
  firmwareData3Url = 'assets/mock-data/firmware-data3.json';
  firmwareData4Url = 'assets/mock-data/firmware-data4.json';
  firmwareData5Url = 'assets/mock-data/firmware-data5.json';

  public getVehicleData() {
    return this.http.get<VehicleInfo>(this.vehicleDataUrl);
  }

  public getIdentityInfo() {
    return this.http.get<Identity>(this.identityDataUrl);
  }

  public getConfigurationInfo() {
    return this.http.get<Configuration>(this.configurationDataUrl);
  }

  public getStateOfChargeInfo() {
    return this.http.get<StateOfChare>(this.stateofchargeDataUrl);
  }

  public getStateOfChargeInfo2() {
    return this.http.get<StateOfChare>(this.stateofchargeData2Url);
  }

  public getStateOfChargeInfo3() {
    return this.http.get<StateOfChare>(this.stateofchargeData3Url);
  }

  public getDriverStateInfo() {
    return this.http.get<DriverState>(this.driverstateDataUrl);
  }

  public getDriverStateInfo2() {
    return this.http.get<DriverState>(this.driverstateData2rl);
  }

  public getBodyControlsInfo() {
    return this.http.get<BodyControl>(this.bodycontrolsDataUrl);
  }
  public getHVACInfo() {
    return this.http.get<HVAC>(this.hvacDataUrl);
  }

  public getFirmwareInfo() {
    return this.http.get<FirmWare>(this.firmwareDataUrl);
  }

  public getFirmwareInfo2() {
    return this.http.get<FirmWare>(this.firmwareData2Url);
  }

  public getFirmwareInfo3() {
    return this.http.get<FirmWare>(this.firmwareData3Url);
  }

  public getFirmwareInfo4() {
    return this.http.get<FirmWare>(this.firmwareData4Url);
  }

  public getFirmwareInfo5() {
    return this.http.get<FirmWare>(this.firmwareData5Url);
  }

}
