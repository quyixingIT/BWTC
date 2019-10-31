import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Infoshow from './views/Infoshow.vue'
import FundList from './views/FundList.vue'
// import ZFYGC from './views/ZFYGC.vue'
import ZFLGC from './views/ZFLGC.vue'
import Scaler from './views/Scaler.vue'
import OptizimeRecipe from './views/OptizimeRecipe.vue'

import SCZM from './views/SCZM.vue'
import PriceEdit from './views/PriceEdit.vue'
Vue.use(Router)

 const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     path: '/',
      redirect: '/login',
    },{path:'/index',
          name:'index',
          component:Index,
           children: [
             {path:'',component:Home},
               {path:'/home',name:'home',component:Home},
               {path:'/SCZM',name:'SCZM',component:SCZM},
               {path:'/infoshow',name:'infoshow',component:Infoshow},
               {path:'/fundList',name:'fundList',component:FundList},
              //{path:'/ZFYGC',name:'ZFYGC',component:ZFYGC},
               {path:'/ZFLGC',name:'ZFLGC',component:ZFLGC},
               {path:'/Scaler',name:'Scaler',component:Scaler},
               {path:'/OptizimeRecipe',name:'OptizimeRecipe',component:OptizimeRecipe},
               {path:'/PriceEdit',name:'PriceEdit',component:PriceEdit},
   ]
      },
      {
          path:'/register',
          name:'register',
          component:Register
      },{
          path:'*',
          name:'/404',
          component:NotFound
      },{
          path:'/login',
          name:'login',
          component:Login
      }
  ]
})
//路由守卫
router.beforeEach((to,from,next) =>{
    const isLogin= localStorage.eleToken ? true :false;
    //const isLogin=true;
    if(to.path =="/login" || to.path =="/register"){
       next();
   }else {
      isLogin ? next() :next("/login");
   }
})
export default router;

