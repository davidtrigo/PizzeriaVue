<template>
  <label :for="name">
    {{text}}
    <input :id="name" :name="name" :type="type" :value="valueData" 
        v-on="inputListeners"
    />
      <span  class="error" v-if="error">{{control.error}}</span>
  </label>
</template>
<script>
import Control from './control'
export default {
  name: "Input",
  inheritAttrs: false,
  inject: ['form'],
  props: {
    type: {
      type: String,
      default: "text"
      
    },
    text: {
      type: String,
      default: ""
    },    
    name: {
      type: String,
      default: "",
      required:true
    },
    value: {
      type: String,
      default: ""
    }
  },
   data() {
    return {
      control: new Control(this.name,this.value),
    };
  },
  computed: {
    error:function(){
       return this.control.error && this.control.parent.dirty
    },
    valueData:function(){
      return this.control.value;
    },
    inputListeners:function() {
      var vm = this;
      return Object.assign(
        {},
        this.$listeners,
        {
          input: function(event) {
            const value = event.target.value;
            vm.$emit("input", value);
            vm.control.dirty = true;
            vm.control.parent.dirty = true;
            vm.control.validate(value);
          }
        }
      );
    }
  },
  created(){
    this.form.addControl(this.control);
    
  }
};
</script>

<style scoped>

.error {
    color: red;
}
</style>