import { Injectable } from '@angular/core';
import {FirmWare} from '../models/firmware-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FirmwareService {

  constructor(private http: HttpClient) { }
  firmwareDataUrl = 'assets/mock-data/firmware-data.json';
  firmwareData2Url = 'assets/mock-data/firmware-data2.json';
  firmwareData3Url = 'assets/mock-data/firmware-data3.json';
  firmwareData4Url = 'assets/mock-data/firmware-data4.json';
  firmwareData5Url = 'assets/mock-data/firmware-data5.json';

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
