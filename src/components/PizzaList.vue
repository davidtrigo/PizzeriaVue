<template>
  <div>
    <h1>Listado de Pizzas</h1>
    <div v-auth = "'admin'">
     Usuario Admin
    </div>
 
  </div>
</template>

<script>
import {AuthDirective} from '../userlib/AuthDirective';

export default {
  name: 'PizzaList',
  directives:{
    AuthDirective
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
