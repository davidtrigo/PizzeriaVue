const validateFn = (value, validators) => {
  let result = true;
  // normalizeEmail es sanitizer, devuelve si le paso "p" devuelve p
  // isEmail es validador, se le pasa p y devuelve false pq no es email correcto
  // en el caso de tener la siguiente expresión: normalizeEmail().isEmail().isLength(1,50)
  // tal y como está el código si el email es false no se ejecuta isLength.
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
export default class Control {
  constructor(name, value){
      this.name=name;
      this.value=value;
      this.dirty = false;
      this.error = null;
      this.valid = true;
      this._validator = null;
      this.parent = null;
  }
  set validator(value){
    this._validator = value;
    this.validate(this.value)
  }
  validate(value){
    if(!this._validator){
      return;
    }
    this.error = null;
    const {validators, message} = this._validator;
    this.valid = validateFn(value,validators)   
    if(!this.valid){
      this.error = message;//this._validator.message
    }else{
      this.value = value;
    }
    this.parent.validate();
  }
}

