import Vue from 'vue'
import App from './App.vue'
import axios from './http'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import gojs from 'gojs'
import echarts from 'echarts'
import  d3 from 'd3'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// import icon from 'vue-svg-icon/Icon.vue'
//import '@/icons'
//import SvgIcon from 'vue-svgicon'
//import './icons'   //引入svg-icon
//  Vue.use(SvgIcon, {
//      tagName: 'svgicon'
//  })
//Vue.prototype.go=gojs
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios =axios;
axios.defaults.withCredentials=true;
Vue.prototype.$echarts = echarts;
Vue.prototype.d3=d3;
//Vue.component('icon', icon);
  /*第一层if判断生产环境和开发环境*/
// if (process.env.NODE_ENV === 'production') {
// //     /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
// //     if (process.env.VUE_APP_FLAG === 'pro') {
// //          //production 生产环境
// //          axios.defaults.baseURL = 'http://192.168.1.102:81';
// //
// //     } else {
// //          //test 测试环境
// //          axios.defaults.baseURL = 'http://192.168.1.102:81';
// //
// //      }
// //  } else {
// //      //dev 开发环境
// //      axios.defaults.baseURL = 'http://192.168.1.102:81';
// //  }
//打印当前所处的环境
//console.log(process.env.VUE_APP_SECRET)
//console.log(process.env.VUE_APP_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
