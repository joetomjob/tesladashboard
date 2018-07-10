import { Component, OnInit } from '@angular/core';
import {StateOfChare} from '../../models/stateofcharge-model';
import {StateOfchargeService} from '../../services/state0fcharge-service';

@Component({
  selector: 'app-stateofcharge',
  templateUrl: './stateofcharge.component.html',
  styleUrls: ['./stateofcharge.component.css']
})
export class StateofchargeComponent implements OnInit {
  counter: number = 0;
  _stateofcharge: StateOfChare;
  _percentRemaining: number = 0;
  _remainingMileage: number = 0;
  _range: number = -1;
  _mileagepercent: number = -1;
  constructor(public _myService: StateOfchargeService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshData(), 5000);
  }

  public refreshData() {
    if (this.counter === 0) {
      this._myService.getStateOfChargeInfo()
        .subscribe((sc: StateOfChare) => {
          this._stateofcharge = sc;
          this._percentRemaining = this._stateofcharge.percentRemaining;
          this._remainingMileage = this._stateofcharge.remainingMileage;
          this._range = this._stateofcharge.range;
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else if (this.counter === 1 ){
      this._myService.getStateOfChargeInfo2()
        .subscribe((sc: StateOfChare) => {
          this._stateofcharge = sc;
          this._percentRemaining = this._stateofcharge.percentRemaining;
          this._remainingMileage = this._stateofcharge.remainingMileage;
          this._range = this._stateofcharge.range;
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else {
      this._myService.getStateOfChargeInfo3()
        .subscribe((sc: StateOfChare) => {
          this._stateofcharge = sc;
          this._percentRemaining = this._stateofcharge.percentRemaining;
          this._remainingMileage = this._stateofcharge.remainingMileage;
          this._range = this._stateofcharge.range;
          this.counter = 0;
        }, (err: any) => {
          console.log(err);
        });
    }
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
