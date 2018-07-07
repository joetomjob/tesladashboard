export class HVAC {
  ambientTemp: number = -1;
  externalTemp: number = -1;
  fanspeed: number = -1;

  static asHVAC(json: any): HVAC {
    const li: HVAC = Object.assign(new HVAC(), json);
    return li;
  }

  static asHVACs(jsonArray: Array<Object>): HVAC[] {
    return jsonArray.map((datum) => HVAC.asHVAC(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
