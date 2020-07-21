export default class FormGroup{
    constructor(){
      this.controls = {}
    }
    addControl(control){
      this.controls[control.name] = control;
    }
  }
  