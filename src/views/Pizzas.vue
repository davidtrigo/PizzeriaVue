<template>
  <div>
    <PizzaList msg="Welcome to Pizzeria"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PizzaList from '@/components/PizzaList.vue'

export default {
  name: 'Pizzas',
  components: {
    PizzaList
  }
}
</script>
