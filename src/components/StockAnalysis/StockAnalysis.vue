<template>
  <v-app>
    <Header/>
    <StockAnalysis_/>
  </v-app>
</template>

<script>
import StockAnalysis_ from './StockAnalysis_.vue'
import Header from '../Header.vue'
export default {
  name: 'StockAnalysis',
  components: {
    Header,
    StockAnalysis_
  },
  data () {
    return {
      //
    }
  }
}
</script>