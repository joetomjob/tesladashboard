export class BodyControlDynamic {
  sunroof: boolean = false;
  doors: boolean = false;
  chargeport: boolean = false;
  windows: boolean = false;

  static asBodyControlDynamic (json: any): BodyControlDynamic {
    const li: BodyControlDynamic = Object.assign(new BodyControlDynamic(), json);
    return li;
  }

  static asBodyControlsDynamic(jsonArray: Array<Object>): BodyControlDynamic[] {
    return jsonArray.map((datum) => BodyControlDynamic.asBodyControlDynamic(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
