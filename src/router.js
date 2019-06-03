import Login from './components/Login/Login.vue'
import Search from './components/Search/Search.vue'
import StockAnalysis from './components/StockAnalysis/StockAnalysis.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login', 
            name: 'Login',
            component: Login
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/stock_analysis',
            name: 'StockAnalysis',
            component: StockAnalysis
        }
    ]
})


export default router;