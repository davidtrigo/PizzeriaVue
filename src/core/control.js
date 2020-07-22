const validateFn = (value, validators) => {
  let result = true;
  if (!validators) {
    return result;
  }
  for (const v of validators) {
    let args = [value, ...v.args]
    result = v.validator(...args)
    if (!v.sanitizer && !result) {
      return result;
    }
    if (v.sanitizer) {
      value = result;
    }
  }
  return result;
}

function validateForm({controls}) {
  let valid = true;
  for (const key in controls) {
    valid = controls[key].valid;
    if(!valid){
      break;
    }
  }
  return valid;
}

export default class Control {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.dirty = false;
    this.error = null;
    this.valid = false;
    this._validator = null;
    this.parent = null;
  }
  set validator(value) {
    this._validator = value;
    this.validate(this.value)
  }
  validate(value) {
    if (!this._validator) {
      return;
    }
    const { validators,message } = this._validator;
    this.valid = validateFn(value, validators)
    if (!this.valid) {
      this.error = message;
      this.parent.valid = false;
    }
    else {
      this.value = value;
      this.error = null;
      this.parent.valid = validateForm(this.parent);
    }
  }
}