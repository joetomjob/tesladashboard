import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';

@Component({
  selector: 'app-bodycontrolsdynamic',
  templateUrl: './bodycontrolsdynamic.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class BodycontrolsdynamicComponent implements OnInit {

  constructor(public _myService: VehicleService) { }

  ngOnInit() {
  }

}
