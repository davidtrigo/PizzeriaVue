<template>
  <div>
    <div><h1>Login</h1></div>
    <Form :form="form" @submit="save">
      <Input name="email" text="Email *"/>
      <Input name="password" text="Password *" type="password" />
      <button type="submit" v-bind:disabled="!form.dirty">Enviar</button>
    </Form>
    <router-link to="/register">Registrarse</router-link>
  </div>
</template>
<script>
import { Form, Input,FormGroup } from "../core";
import LoginService from '../services/loginservice';

//const length = (value,min,max)=> value && value.length>min && value.length<=max;

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
      form:new FormGroup(LOGINVALIDATOR)
    }
  },
  methods:{
    async save(data){
      await LoginService.post(data);
      this.$router.push('/')
    }
  },
 async mounted(){
    /* LoginService.get().then(response => this.form.values = response.data) ; */
    const response = await LoginService.get();
    this.form.values = response.data
    
  },  
  components: {
    Form,
    Input
  },
  
  
};
</script>
