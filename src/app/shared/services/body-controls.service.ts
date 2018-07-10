import { Injectable } from '@angular/core';
import {BodyControl} from '../models/body-controls-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BodyControlService {

  constructor(private http: HttpClient) { }
  bodycontrolsDataUrl = 'assets/mock-data/bodycontrols-data.json';

  public getBodyControlsInfo() {
    return this.http.get<BodyControl>(this.bodycontrolsDataUrl);
  }

}
