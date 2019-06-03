<template>
  <v-app>
    <router-view
    id="background" :style="{backgroundImage: 'url(' + require('@/assets/Background.jpg') + ')' }"/>
  </v-app>
</template>

<style>
  #background {
    width:  100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
  }

  #stock_close_today #last_close{
    padding: 2.5px 0 0 2.5px;
    border: 2.5px solid black;
  }

  #stock_close_today #change{
    padding: 0px;
    border: 2.5px solid black;
  }

  #stock_close_today #change #change_1{
    padding: 2.5px 0 0 2.5px;
    border-right: 0.75px solid black;
  }

  #stock_close_today #change #change_2{
    padding: 2.5px 0 0 2.5px;
    border-left: 0.75px solid black;
  }

</style>


<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
