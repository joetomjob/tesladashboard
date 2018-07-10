import { Injectable } from '@angular/core';
import {Configuration} from '../models/configuration-model';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }
  configurationDataUrl = 'assets/mock-data/configuration-data.json';

  public getConfigurationInfo() {
    return this.http.get<Configuration>(this.configurationDataUrl);
  }

}
