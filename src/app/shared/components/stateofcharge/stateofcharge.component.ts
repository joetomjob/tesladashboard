import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {StateOfChare} from '../../models/stateofcharge-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-stateofcharge',
  templateUrl: './stateofcharge.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class StateofchargeComponent implements OnInit {
  _stateofcharge: StateOfChare;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getStateOfChargeInfo()
      .subscribe((sc: StateOfChare) => {
        this._stateofcharge = sc;
      }, (err: any) => {
        console.log(err);
      });
  }

}
