<template>
  <div>
    <h1>Listado de Pizzas</h1>
    <!--TODO  poner la directiva auth en div  v-auth = "'admin'" -->
    <div >
     Usuario Admin
     <ul  v-auth = "'admin'" >
       <li>
          <router-link to="/pizzas/add">Add Pizza</router-link>
       </li>
        <li>
          <router-link to="/pizzas/edit/12">Edit Pizza 12</router-link>
       </li>
     </ul>
   

      
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
