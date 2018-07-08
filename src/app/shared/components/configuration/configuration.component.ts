import { Component, OnInit, NgModule } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {Configuration} from '../../models/configuration-model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  _configuration: Configuration;
  _model: string = '';
  _color: string = '';
  _wheel: string = '';
  _sunroof: boolean = false;
  _dualmotor: boolean = false;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getConfigurationInfo()
      .subscribe((co: Configuration) => {
        this._configuration = co;
        this._model = this._configuration.model;
        this._color = this._configuration.color;
        this._wheel = this._configuration.wheel;
        this._sunroof = this._configuration.sunroof;
        this._dualmotor = this._configuration.dualmotor;
      }, (err: any) => {
        console.log(err);
      });
  }

  public sunrooftoggle() {
    if (this._sunroof) {
      return 'yes';
    } else {
      return 'no';
    }
  }

  public dualMotortoggle() {
    if (this._dualmotor) {
      return 'yes';
    } else {
      return 'no';
    }
  }

}
