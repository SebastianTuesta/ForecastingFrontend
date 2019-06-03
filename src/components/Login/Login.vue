<template>
  <v-app>
    <Header/>
    <Login_/>
  </v-app>
</template>

<script>
import Login_ from './Login_.vue'
import Header from '../Header.vue'
export default {
  name: 'Login',
  components: {
    Login_,
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>