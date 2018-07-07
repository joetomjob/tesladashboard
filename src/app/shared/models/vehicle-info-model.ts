import {Identity} from './identity-model';
import {Configuration} from './configuration-model';
import {StateOfChare} from './stateofcharge-model';
import {DriverState} from './driverstate-model';
import {BodyControl} from './body-controls-model';
import {HVAC} from './hvac-model';
import {FirmWare} from './firmware-model';

export class VehicleInfo {
  identity: Identity | null = null;
  configuration: Configuration | null = null;
  stateOfCharge: StateOfChare | null = null;
  driverState: DriverState | null = null;
  bodyControls: BodyControl | null = null;
  hvac: HVAC | null = null;
  firmware: FirmWare | null = null;

  static asVehicleInfo(json: any): VehicleInfo {
    const vi: VehicleInfo = Object.assign(new VehicleInfo(), json);
    if (json.identity) {
      vi.identity = Identity.asIdentity(json.identity);
    }
    if (json.configuration) {
      vi.configuration = Configuration.asConfiguration(json.configuration);
    }
    if (json.stateOfCharge) {
      vi.stateOfCharge = StateOfChare.asStateOfCharge(json.stateOfCharge);
    }
    if (json.driverState) {
      vi.driverState = DriverState.asDriverState(json.driverState);
    }
    if (json.bodyControls) {
      vi.bodyControls = BodyControl.asBodyControl(json.bodyControls);
    }
    if (json.hvac) {
      vi.hvac = HVAC.asHVAC(json.hvac);
    }
    if (json.firmware) {
      vi.firmware = FirmWare.asFirmWare(json.firmware);
    }
    return vi;
  }

  static asVehicleInfos(jsonArray: Array<Object>): VehicleInfo[] {
    return jsonArray.map((datum) => VehicleInfo.asVehicleInfo(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
