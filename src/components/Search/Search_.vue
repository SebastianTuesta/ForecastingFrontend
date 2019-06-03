<template> 
  <v-content>
    <v-container fluid>
      <v-layout>
        <v-flex xs12 offset-xs6>
          <v-card class="elevation-12">
            <v-toolbar dark color="orange">
              <v-toolbar-title>Stock search</v-toolbar-title>
              <v-spacer></v-spacer>                
            </v-toolbar>
            <v-layout>
              <v-spacer></v-spacer>
              <v-flex xs6 text-xs-left>
                <v-form>
                  <v-text-field v-model="stock" prepend-icon="stock" name="stok" label="Stock" type="text"></v-text-field>
                </v-form>
              </v-flex>
              <v-flex xs6 text-xs-right>
                <v-btn v-on:click="stock_search" dark color="black">Search</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider color="black"></v-divider>
    <v-container >
      <v-layout>
        <v-flex xs12>
          <v-flex xs12 v-for=" lookup_ in lookup"  v-bind:key="lookup_.symbol">
          <v-card style="margin:5px;">
            <v-toolbar  color="gray">
              <v-toolbar-title>{{lookup_.symbol}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>                
            <v-layout>
              <v-flex xs6 text-xs-left>
                <h1>{{lookup_.name}}</h1>      
              </v-flex>
              <v-flex xs6 text-xs-right>
                <router-link :to="{ name: 'StockAnalysis', query: { symbol: lookup_.symbol, stock: lookup_.name } }">
                  <v-btn dark color="red">Go</v-btn>
                </router-link>
              </v-flex>
            </v-layout>
          </v-card>
          </v-flex>
        </v-flex>
      </v-layout> 
    </v-container>
  </v-content>
</template>

<script>

export default {
  name: 'Search_',
  components: {
  },
  data () {
    return {
        lookup: null,
        stock: ''
    }
  },
  created(){
    this.stock = this.$route.query.stock
    this.stock_search()
  },
  methods: {
      stock_search: function() {
        this.axios
          .get('https://financialforecasting.herokuapp.com/lookup/'+this.stock+'/')
          .then((response)=> (this.lookup = response.data));
      }
  }
}
</script>