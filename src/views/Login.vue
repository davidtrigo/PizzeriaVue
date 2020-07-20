<template>
  <div >
    <h1>Login</h1>
      <Form  v-bind:form="form" @submit="save">
      <Input name="email" text="Email *" value="name@domain.com" />
      <Input name="password" text="Password *" type="password" />
      <button type="submit" v-bind:disabled="disabled">Enviar</button>
      </form>

    <router-link to="/register">Registrarse</router-link>
  </div>
</template>
<script>
import Form from '../core/Form.vue';
import FormGroup from '../core/formgroup';
import Input from '../core/Input.vue';
 
const LOGINVALIDATOR = [{
  fields: ["email"],
  message: "email es requerido",
  validators: [{ sanitizer: false, validator: () => true, args: [1, 50] }]
},
{
  fields: ["password"],
  message: "password es requerido",
  validators: [{ sanitizer: false, validator: () => true, args: [1, 10] }]
}]


export default {
  name: "Login",
  data(){
    return {
      form:new FormGroup(LOGINVALIDATOR),
      disabled:false,
    }
  },
  methods:{
    save(data){
      console.log(data)
    }
  },

  components: {
    Form,
    Input
  },


};
</script>

