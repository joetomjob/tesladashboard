import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentityComponent } from './shared/components/identity/identity.component';
import { ConfigurationComponent } from './shared/components/configuration/configuration.component';
import { StateofchargeComponent } from './shared/components/stateofcharge/stateofcharge.component';
import { DriverstateComponent } from './shared/components/driverstate/driverstate.component';
import { BodycontrolsComponent } from './shared/components/bodycontrols/bodycontrols.component';
import { HvacComponent } from './shared/components/hvac/hvac.component';
import { FirmwareComponent } from './shared/components/firmware/firmware.component';
import { BodycontrolsdynamicComponent } from './shared/components/bodycontrolsdynamic/bodycontrolsdynamic.component';
import { HvacdynamicComponent } from './shared/components/hvacdynamic/hvacdynamic.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    ConfigurationComponent,
    StateofchargeComponent,
    DriverstateComponent,
    BodycontrolsComponent,
    HvacComponent,
    FirmwareComponent,
    BodycontrolsdynamicComponent,
    HvacdynamicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
