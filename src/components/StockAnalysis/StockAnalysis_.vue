<template> 
  <v-content>
    <v-container >
      <v-layout>
        <v-flex>
          <v-toolbar style="padding:5px; box-sizing: border-box; width: 100vw; margin-left: calc(-50vw + 50%);" color="black" dark>
            <v-toolbar-title>
              {{symbol}}
              <v-spacer/>
              {{stock}}
            </v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs6 offset-xs9>
          <v-card id="stock_close_today" color="white">
            <v-flex id="last_close" xs12>
              <h3>Last Close:</h3> 
              <v-flex xs12 offset-xs4>
                <h3>{{last_close}}</h3>
              </v-flex>
            </v-flex>
            <v-layout id="change">
                <v-flex  id="change_1" xs6>
                  <p>Change:</p> 
                  <v-flex xs12 offset-xs4>
                    <p>{{change}}</p>
                  </v-flex>     
                </v-flex>
                <v-flex id="change_2" xs6>
                  <p>%Change</p>
                  <v-flex xs12 offset-xs4>
                    <p>{{porcentual_change}}%</p>
                  </v-flex>
                </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <line-chart style="background:white;"
      :curve="false" 
      :data="stock_chart" 
      :min="stock_chart_min"
      :max="stock_chart_max"
      height="500px"/>
    <v-container>
      <v-flex xs8 onset-xs10 style="background:white;">
        <h3>Signal Historical</h3>
        <v-table class="table table-hover" :data="historical_signal">
          <thead slot="head">
            <th>Date</th>
            <th>Price</th>
            <th>Signal</th>
            <th></th>
            <th>$100</th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.id">
              <td>{{ row.Date }}</td>
              <td>{{ row.Price }}</td>
              <td>
                <font color="red" v-if="row.Signal == 'Sell'">{{ row.Signal }}</font>
                <font color="green" v-if="row.Signal == 'Buy'">{{ row.Signal }}</font>
              </td>
              <td>
                <v-icon color="green" v-if="row.Correct == 'Correct'" right>check</v-icon>
                <v-icon color="red" v-if="row.Correct == 'Wrong'" right>block</v-icon>
                <slot v-if="row.Correct == 'Very Correct'">
                  <v-icon color="green" right>check</v-icon>
                  <v-icon color="gray" right>thumb_up</v-icon>
                </slot>
              </td>
              <td>{{ row.$100 }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'StockAnalysis_',
  components: {
  },
  data () {
    return {
      stock_chart: [],
      stock_chart_min: 0,
      stock_chart_max: 0,
      stock: "",
      symbol: "",
      data: null,
      historical_signal: [],
      columns: ['Date', 'Price', 'Signal', '$100'],
      date: new Date().getTime(),
      last_close: 0,
      before_last_close: 0,
      change: 0,
      porcentual_change: 0,
      signal: ["Sell", "Buy"],
      correct: ["Correct", "Very Correct", "Wrong"]
    }
  },
  created(){
    this.stock = this.$route.query.stock
    this.symbol = this.$route.query.symbol
  },
  mounted: function(){
    this.axios
          .get('https://pacific-falls-73829.herokuapp.com/stock/'+this.symbol+'/')
          .then((response)=> {
            this.data = response.data;
            this.last_close = this.data[this.data.length-1].Close.toFixed(2);
            this.before_last_close = this.data[this.data.length-2].Close.toFixed(2);
            this.change = (this.last_close - this.before_last_close).toFixed(2);
            this.porcentual_change = (100*this.change/ this.before_last_close).toFixed(2);    


          /*FOR DISPLAY LINE CHART STOCK*/
          var data_close = {};           
          var data_high = {};
          var data_low = {};
          var data_open = {};
          this.data.forEach(element => {
            data_close[element.Date] = element.Close;
            data_high[element.Date] = element.High;
            data_low[element.Date] = element.Low;
            data_open[element.Date] = element.Open;
          });

          this.stock_chart_min = Math.floor(Math.min(
            Math.min(...Object.keys(data_close).map(key => data_close[key])), 
            Math.min(...Object.keys(data_high).map(key => data_high[key])), 
            Math.min(...Object.keys(data_low).map(key => data_low[key])), 
            Math.min(...Object.keys(data_open).map(key => data_open[key]))
          ));

          this.stock_chart_max = Math.ceil(Math.max(
            Math.max(...Object.keys(data_close).map(key => data_close[key])), 
            Math.max(...Object.keys(data_high).map(key => data_high[key])), 
            Math.max(...Object.keys(data_low).map(key => data_low[key])), 
            Math.max(...Object.keys(data_open).map(key => data_open[key]))
          ));

          this.stock_chart.push({
            name: 'Close', data: data_close
          });
          this.stock_chart.push({
            name: 'High', data: data_high,
          });
          this.stock_chart.push({
            name: 'Low', data: data_low,
          });  
          this.stock_chart.push({ 
            name: 'Open', data: data_open
          });

        
          /*FOR RANDOM DISPLAY*/    
          this.data.reverse().forEach(element => {
            var i1 = Math.floor(Math.random() * this.signal.length); 
            var i2 = Math.floor(Math.random() * this.correct.length); 

            this.historical_signal.push({'Date': element.Date.substring(0, 10), 'Price': ((element.Close - element.Open)*element.Low).toFixed(2),
              'Signal': this.signal[i1], 'Correct': this.correct[i2], '$100': ((element.Close - element.Open)*element.Low*112).toFixed(2)
            })
          });
        });
  }
}
</script>