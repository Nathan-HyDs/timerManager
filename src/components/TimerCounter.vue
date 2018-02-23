<template>
  <div class="clock">
    <div class="clock_container">
      <div class="clock_button">

      </div>
    </div>
  </div>
</template>

<script>
import store from './TimerStore'
import Vuex from 'vuex'

export default {
  store: store,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'count'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'increment'
    ]),
    startTimer: ()=>{
      console.log('j')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
