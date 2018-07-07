import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {Identity} from '../../models/identity-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class IdentityComponent implements OnInit {
  _identity: Identity;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getIdentityInfo()
      .subscribe((id: Identity) => {
        this._identity = id;
      }, (err: any) => {
        console.log(err);
      });
  }

}
