export class Identity {
  vehicledatabaseid: number = -1;
  vin: string = '';
  nickname: string = '';
  environment: string = '';

  static asIdentity(json: any): Identity {
    const li: Identity = Object.assign(new Identity(), json);
    return li;
  }

  static asIdentities(jsonArray: Array<Object>): Identity[] {
    return jsonArray.map((datum) => Identity.asIdentity(datum));
  }

  json() {
    return JSON.stringify(this);
  }
}
