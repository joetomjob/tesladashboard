export class Configuration {
  model: string = '';
  color: string = '';
  wheel: string = '';
  sunroof: boolean = false;
  dualmotor: boolean = false;

  static asConfiguration(json: any): Configuration {
    const li: Configuration = Object.assign(new Configuration(), json);
    return li;
  }

  static asConfigurations(jsonArray: Array<Object>): Configuration[] {
    return jsonArray.map((datum) => Configuration.asConfiguration(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
