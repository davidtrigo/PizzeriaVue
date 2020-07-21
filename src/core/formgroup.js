export default class FormGroup {
  constructor(validators) {
    this.validators = validators || [];
    this.controls = {}
    this.dirty = false;
    this.valid = true;
  }
  addControl(control) {
    const name = control.name;
    control.parent = this; //composite patern
    control.validator = this.validators.find(v => v.fields.includes(name));
    this.controls[name] = control;
  }
  validate() {
    let valid = true;
    for (const key in this.controls) {
      valid = this.controls[key].valid;
      if (!valid) {
        break;
      }
    }
    this.valid = valid;
  }
  set values(values) {
    for (const key in values) {
      const value = values[key]
      this.controls[key].value = value;
      this.controls[key].validate(value)
    }
  }
  get values() {
    const result = {};
    for (const key in this.controls) {
      result[key] = this.controls[key].value
    }
    return result;
  }
}

