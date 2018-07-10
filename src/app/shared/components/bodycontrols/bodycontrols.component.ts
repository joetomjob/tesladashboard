import { Component, OnInit } from '@angular/core';
import { BodyControlService } from '../../services/body-controls.service';
import {BodyControl} from '../../models/body-controls-model';

@Component({
  selector: 'app-bodycontrols',
  templateUrl: './bodycontrols.component.html',
  styleUrls: ['./bodycontrols.component.css']
})
export class BodycontrolsComponent implements OnInit {
  key: string = 'bodyControl';
  _bodyControls: BodyControl;
  _sunroof: boolean = false;
  _doors: boolean = false;
  _chargeport: boolean = false;
  _windows: boolean = false;
  constructor(public _myService: BodyControlService) { }

  ngOnInit() {
    this.refreshData()
    setInterval(() => this.refreshData(), 10000);
  }

  public refreshData() {
    if (localStorage.getItem(this.key) && localStorage.getItem(this.key).length > 0) {
      this._bodyControls = <BodyControl> JSON.parse(localStorage.getItem(this.key));
      this._sunroof = this._bodyControls.sunroof;
      this._doors = this._bodyControls.doors;
      this._chargeport = this._bodyControls.chargeport;
      this._windows = this._bodyControls.windows;
    } else {
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

  public bodyControlChange() {
    this._bodyControls.sunroof = this._sunroof;
    this._bodyControls.doors = this._doors;
    this._bodyControls.chargeport = this._chargeport;
    this._bodyControls.windows = this._windows;
    localStorage.setItem(this.key, JSON.stringify(this._bodyControls));
  }
}
