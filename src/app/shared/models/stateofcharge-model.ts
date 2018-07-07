export class StateOfChare {
  percentRemaining: number = -1;
  remainingMileage: number = -1;

  static asStateOfCharge(json: any): StateOfChare {
    const li: StateOfChare = Object.assign(new StateOfChare(), json);
    return li;
  }

  static asStateOfCharges(jsonArray: Array<Object>): StateOfChare[] {
    return jsonArray.map((datum) => StateOfChare.asStateOfCharge(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
