export class HVACDynamic {
  tatgetTemp: number = -1;
  fanspeed: number = -1;

  static asHVACDynamic(json: any): HVACDynamic {
    const li: HVACDynamic = Object.assign(new HVACDynamic(), json);
    return li;
  }

  static asHVACsDynamic(jsonArray: Array<Object>): HVACDynamic[] {
    return jsonArray.map((datum) => HVACDynamic.asHVACDynamic(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
