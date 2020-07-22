<template>
  <label :for="name">
    {{text}}
  <input :name="name" :type="type" :value="valueData" v-on ="inputListeners" />  
    <p class="error" v-if= error>{{ control.error }}</p>
  </label>
</template>

<script>
import Control from './control'

export default {
  name: "Input",
  inheritAttrs: false,
  inject: ["form"],
  props: {
    type: {
      type: String,
      default: "text"
    },
    text: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      control: new Control(this.name, this.value)
    };
  },
  computed: {
    valueData:function(){
      return this.control.value;
    },
    error:function(){ 
      return this.control.error && this.control.parent.dirty;
    },
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          const value = event.target.value;
          const ctrl = vm.control;
          vm.$emit("input", value);
          ctrl.dirty = true;
          ctrl.parent.dirty = true;
          ctrl.validate(value);
        }
      });
    }
  },
  created() {
    this.form.addControl(this.control);
  }
};
</script>


<style scoped>

.error {
    color: red;
}
</style>
