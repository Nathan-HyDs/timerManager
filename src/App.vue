<template>
  <div id="app">
    <TimerCounter/>
  </div>
</template>

<script>
import TimerCounter from './components/TimerCounter'

export default {
  name: 'App',
  components: {
    TimerCounter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
