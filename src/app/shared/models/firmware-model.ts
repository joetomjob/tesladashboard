export class FirmWare {
  installedVersion: string = '';
  installingVersion: string = '';
  installingJobProgress: string = '';

  static asFirmWare(json: any): FirmWare {
    const li: FirmWare = Object.assign(new FirmWare(), json);
    return li;
  }

  static asFirmWares(jsonArray: Array<Object>): FirmWare[] {
    return jsonArray.map((datum) => FirmWare.asFirmWare(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
