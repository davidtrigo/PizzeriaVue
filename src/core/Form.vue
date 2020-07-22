<template>
  <form v-on:submit="submit">
    <slot></slot>
  </form>
</template>
<script>

export default {
  name: "Form",
  props: {
    form: {
      required: true,
      default: null
    }
  },

  methods: {
    submit(event) {
      event.preventDefault();
      if (this.form.valid) {
        this.$emit("submit", this.form.values);
      }
    }
  },
  provide: function() {
    return {
      form: this.form
    };
  }
};
</script>