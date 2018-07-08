export class DriverState {
  speed: number = -1;
  acceleration: number = -1;
  gear: string = '';

  static asDriverState(json: any): DriverState {
    const li: DriverState = Object.assign(new DriverState(), json);
    return li;
  }

  static asDriverStates(jsonArray: Array<Object>): DriverState[] {
    return jsonArray.map((datum) => DriverState.asDriverState(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
