import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {FirmWare} from '../../models/firmware-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-firmware',
  templateUrl: './firmware.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class FirmwareComponent implements OnInit {
  _firmware: FirmWare;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getFirmwareInfo()
      .subscribe((fw: FirmWare) => {
        this._firmware = fw;
      }, (err: any) => {
        console.log(err);
      });
  }

}
