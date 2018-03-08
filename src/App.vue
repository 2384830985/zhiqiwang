<template>
  <div id="app">
    <!--页头-->
    <ComponentHerder></ComponentHerder>
    <router-view/>
  </div>
</template>

<script>
import ComponentHerder from './components/componentHerder/componentHerder.vue'
export default {
  name: 'App',
  components: {
    ComponentHerder: ComponentHerder
  }
}
</script>

<style>
@import "./assets/css/main.css";

</style>
