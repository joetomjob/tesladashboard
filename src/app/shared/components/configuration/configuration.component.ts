import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {Configuration} from '../../models/configuration-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class ConfigurationComponent implements OnInit {
  _configuration: Configuration;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getConfigurationInfo()
      .subscribe((co: Configuration) => {
        this._configuration = co;
      }, (err: any) => {
        console.log(err);
      });
  }

}
