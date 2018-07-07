import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {DriverState} from '../../models/driverstate-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-driverstate',
  templateUrl: './driverstate.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class DriverstateComponent implements OnInit {
  _driverState: DriverState;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getDriverStateInfo()
      .subscribe((ds: DriverState) => {
        this._driverState = ds;
      }, (err: any) => {
        console.log(err);
      });
  }

}
