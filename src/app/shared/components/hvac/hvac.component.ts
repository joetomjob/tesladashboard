import { Component, OnInit } from '@angular/core';
import { HvacService } from '../../services/hvac-service';
import {HVAC} from '../../models/hvac-model';

@Component({
  selector: 'app-hvac',
  templateUrl: './hvac.component.html',
  styleUrls: ['./hvac.component.css']
})
export class HvacComponent implements OnInit {
  counter: number = 0;
  key: string = 'hvac';
  _hvac: HVAC;
  _ambienttemp: number = -1;
  _externaltemp: number = -1;
  _fanspeed: number = -1;
  _tempSlider: number = -1;
  constructor(public _myService: HvacService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshTemperature(), 10000);
  }

  public refreshData() {
    if (localStorage.getItem(this.key) && localStorage.getItem(this.key).length > 0) {
      this._hvac = <HVAC> JSON.parse(localStorage.getItem(this.key));
      this._ambienttemp = this._hvac.ambientTemp;
      this._externaltemp = this._hvac.externalTemp;
      this._fanspeed = this._hvac.fanspeed;
      this._tempSlider = this._hvac.sliderTemp;
    } else {
      this._myService.getHVACInfo()
        .subscribe((hv: HVAC) => {
          this._hvac = hv;
          this._ambienttemp = this._hvac.ambientTemp;
          this._externaltemp = this._hvac.externalTemp;
          this._fanspeed = this._hvac.fanspeed;
          this._tempSlider = this._ambienttemp;
        }, (err: any) => {
          console.log(err);
        });
    }
  }

  public refreshTemperature() {
    if (this.counter === 0) {
      this._myService.getHVACInfo()
        .subscribe((hv: HVAC) => {
          this._hvac = hv;
          this._ambienttemp = this._hvac.ambientTemp;
          this._externaltemp = this._hvac.externalTemp;
          this._fanspeed = this._hvac.fanspeed;
        }, (err: any) => {
          console.log(err);
        });
    } else {
      this._myService.getHVACInfo()
        .subscribe((hv: HVAC) => {
          this._hvac = hv;
          this._ambienttemp = this._hvac.ambientTemp;
          this._externaltemp = this._hvac.externalTemp;
          this._fanspeed = this._hvac.fanspeed;
        }, (err: any) => {
          console.log(err);
        });
    }
  }

  public hvacChange() {
    this._hvac.sliderTemp = this._tempSlider;
    this._hvac.fanspeed = this._fanspeed;
    localStorage.setItem(this.key, JSON.stringify(this._hvac));
  }

}
