<template>
  <div id="app">
    <h1>To Do List</h1>
    <HeyYou/>
  </div>
</template>

<script>
import HeyYou from './components/toDo.vue'

export default {
  name: 'App',
  components: {
    HeyYou
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
