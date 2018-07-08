import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {FirmWare} from '../../models/firmware-model';

@Component({
  selector: 'app-firmware',
  templateUrl: './firmware.component.html',
  styleUrls: ['./firmware.component.css']
})
export class FirmwareComponent implements OnInit {
  _firmware: FirmWare;
  _installedVersion: string = '';
  _installingVersion: string = '';
  _installingJobProgress: string = '';
  _installingJobPercent: number = -1;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getFirmwareInfo()
      .subscribe((fw: FirmWare) => {
        this._firmware = fw;
        this._installedVersion = this._firmware.installedVersion;
        this._installingVersion = this._firmware.installingVersion;
        this._installingJobProgress = this._firmware.installingJobProgress;
        if(this._installingJobProgress) {
          this._installingJobPercent = Number(this._installingJobProgress);
        }
      }, (err: any) => {
        console.log(err);
      });
  }

}
