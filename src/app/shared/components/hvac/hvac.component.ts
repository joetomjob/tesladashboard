import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {HVAC} from '../../models/hvac-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class HvacComponent implements OnInit {
  _hvac: HVAC;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getHVACInfo()
      .subscribe((hv: HVAC) => {
        this._hvac = hv;
      }, (err: any) => {
        console.log(err);
      });
  }

}
