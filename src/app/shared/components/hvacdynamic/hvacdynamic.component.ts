import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../mock-services/vehicle.service';

@Component({
  selector: 'app-hvacdynamic',
  templateUrl: './hvacdynamic.component.html',
  styles: [`
            .body{
                color: white;
            }
          `]
})
export class HvacdynamicComponent implements OnInit {

  constructor(public _myService: VehicleService) { }

  ngOnInit() {
  }

}
