export class Message {

id: number;
message = '';

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
