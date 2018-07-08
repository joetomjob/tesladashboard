import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {DriverState} from '../../models/driverstate-model';

@Component({
  selector: 'app-driverstate',
  templateUrl: './driverstate.component.html',
  styleUrls: ['./driverstate.component.css']
})
export class DriverstateComponent implements OnInit {
  _driverState: DriverState;
  _speed: number = -1;
  _acceleration: number = -1;
  _gear: string = '';
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getDriverStateInfo()
      .subscribe((ds: DriverState) => {
        this._driverState = ds;
        this._speed = this._driverState.speed;
        this._acceleration = this._driverState.acceleration;
        this._gear = this._driverState.gear;
      }, (err: any) => {
        console.log(err);
      });
  }

}
