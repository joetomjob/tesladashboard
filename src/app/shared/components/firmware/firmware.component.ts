import { Component, OnInit } from '@angular/core';
import { FirmwareService } from '../../services/firmware-service';
import {FirmWare} from '../../models/firmware-model';

@Component({
  selector: 'app-firmware',
  templateUrl: './firmware.component.html',
  styleUrls: ['./firmware.component.css']
})
export class FirmwareComponent implements OnInit {
  counter: number = 0;
  _firmware: FirmWare;
  _installedVersion: string = '';
  _installingVersion: string = '';
  _installingJobProgress: string = '';
  _installingJobPercent: number = -1;
  constructor(public _myService: FirmwareService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshData(), 2000);
  }

  public refreshData() {
    if (this.counter === 0) {
      this._myService.getFirmwareInfo()
        .subscribe((fw: FirmWare) => {
          this._firmware = fw;
          this._installedVersion = this._firmware.installedVersion;
          this._installingVersion = this._firmware.installingVersion;
          this._installingJobProgress = this._firmware.installingJobProgress;
          if (this._installingJobProgress) {
            this._installingJobPercent = Number(this._installingJobProgress);
          }
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else if (this.counter === 1) {
      this._myService.getFirmwareInfo2()
        .subscribe((fw: FirmWare) => {
          this._firmware = fw;
          this._installedVersion = this._firmware.installedVersion;
          this._installingVersion = this._firmware.installingVersion;
          this._installingJobProgress = this._firmware.installingJobProgress;
          if (this._installingJobProgress) {
            this._installingJobPercent = Number(this._installingJobProgress);
          }
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else if (this.counter === 2) {
      this._myService.getFirmwareInfo3()
        .subscribe((fw: FirmWare) => {
          this._firmware = fw;
          this._installedVersion = this._firmware.installedVersion;
          this._installingVersion = this._firmware.installingVersion;
          this._installingJobProgress = this._firmware.installingJobProgress;
          if (this._installingJobProgress) {
            this._installingJobPercent = Number(this._installingJobProgress);
          }
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else if (this.counter === 3) {
      this._myService.getFirmwareInfo4()
        .subscribe((fw: FirmWare) => {
          this._firmware = fw;
          this._installedVersion = this._firmware.installedVersion;
          this._installingVersion = this._firmware.installingVersion;
          this._installingJobProgress = this._firmware.installingJobProgress;
          if (this._installingJobProgress) {
            this._installingJobPercent = Number(this._installingJobProgress);
          }
          this.counter = this.counter + 1;
        }, (err: any) => {
          console.log(err);
        });
    } else {
      this._myService.getFirmwareInfo5()
        .subscribe((fw: FirmWare) => {
          this._firmware = fw;
          this._installedVersion = this._firmware.installedVersion;
          this._installingVersion = this._firmware.installingVersion;
          this._installingJobProgress = this._firmware.installingJobProgress;
          if (this._installingJobProgress) {
            this._installingJobPercent = Number(this._installingJobProgress);
          }
          this.counter = 0;
        }, (err: any) => {
          console.log(err);
        });
    }
  }

}
