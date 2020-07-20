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
class Control {
    constructor(name, value){
        this.name=name;
        this.value=value;
        this.dirty = false;
        this.error = null;
        this.valid = false;
        this._validator = null;
    
        
    }
}
//export default new Control();
module.exports = Control;