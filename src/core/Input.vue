<template>
  <label :for="name">
    {{text}}
    <input :name="name" :type="type" v-model="value" />
  </label>
</template>

<script>
import  Control from "./control";

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
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          const value = event.target.value;
          vm.$emit("input", value);
          vm.control.validate(value);
        }
      });
    }
  },
  created() {
    this.form.addControl(this.control);
  }
};
</script>