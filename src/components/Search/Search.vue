<template>
  <v-app>
    <Header/>
    <Search_/>
  </v-app>
</template>

<script>
import Search_ from './Search_.vue'
import Header from '../Header.vue'
export default {
  name: 'Search',
  components: {
    Header,
    Search_
  },
  data () {
    return {
      //
    }
  }
}
</script>