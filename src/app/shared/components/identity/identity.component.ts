import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {Identity} from '../../models/identity-model';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  _identity: Identity;
  _nickName: string = '';
  _vin: string = '';
  _vehicledbId: number = -1;
  _environment: string = '';
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getIdentityInfo()
      .subscribe((id: Identity) => {
        this._identity = id;
        this._nickName = this._identity.nickname;
        this._vin = this._identity.vin;
        this._vehicledbId = this._identity.vehicledatabaseid;
        this._environment = this._identity.environment;
      }, (err: any) => {
        console.log(err);
      });
  }

}
