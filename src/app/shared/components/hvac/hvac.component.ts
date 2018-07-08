import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {HVAC} from '../../models/hvac-model';

@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styleUrls: ['./hvac.component.css']
})
export class HvacComponent implements OnInit {
  _hvac: HVAC;
  _ambienttemp: number = -1;
  _externaltemp: number = -1;
  _fanspeed: number = -1;
  _tempSlider: number = -1;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getHVACInfo()
      .subscribe((hv: HVAC) => {
        this._hvac = hv;
        this._ambienttemp = this._hvac.ambientTemp;
        this._externaltemp = this._hvac.externalTemp;
        this._fanspeed = this._hvac.fanspeed;
        this._tempSlider = this._ambienttemp;
      }, (err: any) => {
        console.log(err);
      });
  }

}
