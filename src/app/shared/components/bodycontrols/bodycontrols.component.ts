import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {BodyControl} from '../../models/body-controls-model';

@Component({
  selector: 'app-bodycontrols',
  templateUrl: './bodycontrols.component.html',
  styleUrls: ['./bodycontrols.component.css']
})
export class BodycontrolsComponent implements OnInit {
  _bodyControls: BodyControl;
  _sunroof: boolean = false;
  _doors: boolean = false;
  _chargeport: boolean = false;
  _windows: boolean = false;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getBodyControlsInfo()
      .subscribe((bc: BodyControl) => {
        this._bodyControls = bc;
        this._sunroof = this._bodyControls.sunroof;
        this._doors = this._bodyControls.doors;
        this._chargeport = this._bodyControls.chargeport;
        this._windows = this._bodyControls.windows;
      }, (err: any) => {
        console.log(err);
      });
  }

}
