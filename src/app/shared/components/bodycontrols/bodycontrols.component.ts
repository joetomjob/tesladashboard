import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';
import {BodyControl} from '../../models/body-controls-model';
import {VehicleInfo} from '../../models/vehicle-info-model';

@Component({
  selector: 'app-bodycontrols',
  templateUrl: './bodycontrols.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class BodycontrolsComponent implements OnInit {
  _bodyControls: BodyControl;
  constructor(public _myService: VehicleService) { }

  ngOnInit() {
    this._myService.getBodyControlsInfo()
      .subscribe((bc: BodyControl) => {
        this._bodyControls = bc;
      }, (err: any) => {
        console.log(err);
      });
  }

}
