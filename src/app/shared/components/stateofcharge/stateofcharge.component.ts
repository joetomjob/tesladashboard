import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {StateOfChare} from '../../models/stateofcharge-model';

@Component({
  selector: 'app-stateofcharge',
  templateUrl: './stateofcharge.component.html',
  styleUrls: ['./stateofcharge.component.css']
})
export class StateofchargeComponent implements OnInit {
  _stateofcharge: StateOfChare;
  _percentRemaining: number = -1;
  _remainingMileage: number = -1;
  _range: number = -1;
  _mileagepercent: number = -1;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getStateOfChargeInfo()
      .subscribe((sc: StateOfChare) => {
        this._stateofcharge = sc;
        this._percentRemaining = this._stateofcharge.percentRemaining;
        this._remainingMileage = this._stateofcharge.remainingMileage;
        this._range = this._stateofcharge.range;
      }, (err: any) => {
        console.log(err);
      });
  }

  public getChargeClass() {
    if (this._percentRemaining > 50) {
      return 'battery-level-high';
    } else if (this._percentRemaining > 25) {
      return 'battery-level-medium';
    } else {
      return 'battery-level-low';
    }
  }

  public getMileageClass() {
      this._mileagepercent = (this._remainingMileage / this._range) * 100;
    if (this._mileagepercent > 50) {
      return 'battery-level-high';
    } else if (this._mileagepercent > 25) {
      return 'battery-level-medium';
    } else {
      return 'battery-level-low';
    }
  }
}
