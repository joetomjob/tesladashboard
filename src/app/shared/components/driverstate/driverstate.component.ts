import { Component, OnInit } from '@angular/core';
import { DriverstateService } from '../../services/driverstate-service';
import {DriverState} from '../../models/driverstate-model';

@Component({
  selector: 'app-driverstate',
  templateUrl: './driverstate.component.html',
  styleUrls: ['./driverstate.component.css']
})
export class DriverstateComponent implements OnInit {
  dynamicDataControl: boolean = false;
  _driverState: DriverState;
  _speed: number = -1;
  _acceleration: number = -1;
  _gear: string = '';
  constructor(public _myService: DriverstateService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshData(), 250);
  }

  public refreshData() {
    if ( this.dynamicDataControl ) {
      this._myService.getDriverStateInfo()
        .subscribe((ds: DriverState) => {
          this._driverState = ds;
          this._speed = this._driverState.speed;
          this._acceleration = this._driverState.acceleration;
          this._gear = this._driverState.gear;
          this.dynamicDataControl = false;
        }, (err: any) => {
          console.log(err);
        }); } else {
      this._myService.getDriverStateInfo2()
        .subscribe((ds: DriverState) => {
          this._driverState = ds;
          this._speed = this._driverState.speed;
          this._acceleration = this._driverState.acceleration;
          this._gear = this._driverState.gear;
          this.dynamicDataControl = true;
        }, (err: any) => {
          console.log(err);
        });
    }
  }

}

