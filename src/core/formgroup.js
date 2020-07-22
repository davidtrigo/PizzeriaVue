export default class FormGroup {
    constructor(validators) {
      this.controls = {};
      this.validators = validators;
      this.dirty = false;
      this.valid = true;
    }
    addControl(control) {
      const name = control.name;
      control.parent = this; //composite patern
      control.validator = this.validators.find(v => v.fields.includes(name));
      this.controls[name] = control;
    }
    set values(values) {
      for (const key in values) {
        const ctrl = this.controls[key];
        const value = values[key];
        ctrl.value = value;
        ctrl.validate(value);
      }
    }
    get values() {
      const result = {};
      for (const key in this.controls) {
        result[key] = this.controls[key].value;
      }
      return result;
    }
    
  }