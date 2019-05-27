
<template>
  <v-app>
    <Header/>
    <Login/>
    <News/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Login from './components/Login'


export default {
  name: 'App',
  components: {
    Header,
    Login
  },
  data () {
    return {
      //
    }
  }
}
</script>
