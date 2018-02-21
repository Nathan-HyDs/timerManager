<template>
  <div class="hello">
  test {{count}}
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
    ...Vuex.mapGetters(['count'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
