<template>
    <el-row class="menu_page">
        <el-col>
            <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
                <!--<el-radio-button :label="false">展开</el-radio-button>-->
                <!--<el-radio-button :label="true">收起</el-radio-button>-->
            <!--</el-radio-group>-->
            <el-menu
                    @open="handleOpen"
                    @close="handleClose"

                    :default-active="defaultUrl"
                    class="el-menu-vertical-demo"
                    background-color="#0A243D"
                    text-color="#fff"
                    active-text-color="#409eff">
                <router-link to="/home">
                    <el-menu-item index="0">
                        <i class="fa fa-pie-chart fa-margin"></i>
                        <span slot="title">智慧引擎</span>
                    </el-menu-item>
                </router-link>
             <router-link to="/SCZM">
                 <el-menu-item index="1">
                     <i  class="fa fa-area-chart fa-margin"></i>
                     <span slot="title">生产总貌</span>
                 </el-menu-item>
             </router-link>
                 <template v-for="item in items">
                     <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                         <template slot="title">
                             <i :class="'fa fa-margin '+item.icon"></i>
                             <span slot="title"> {{item.name}}</span>
                         </template>
                         <router-link v-for="(citem,cindex) in item.children":to="citem.path" :key="cindex">
                             <el-menu-item :index="citem.path">
                                 <span slot="title">{{citem.name}}</span>
                             </el-menu-item>
                         </router-link>
                     </el-submenu>

                 </template>
                <!--<router-link to="/Scaler">-->
                    <!--<el-menu-item index="1">-->
                        <!--<i class="el-icon-menu"></i>-->
                        <!--<span slot="title">温度粘度换算</span>-->
                    <!--</el-menu-item>-->
                <!--</router-link>-->

                <router-link to="/test01">
                    <el-menu-item index="2">
                        <i class="fa fa-margin fa-question-circle-o"></i>
                        <span slot="title">帮助</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        name: "left-menu",
        data(){
            this.readMenu();
            return{
                isCollapse: true,
       defaultUrl:'/home',
                items:[
                    {
                        icon:'fa-window-maximize',
                        name:"智能控制",
                        path:'fund',
                        children:[

                            {path:'ZFLGC',name:"分离过程"}
                        ]
                    },
                    {
                        icon:'fa-cloud',
                        name:"虚拟工厂",
                        path:'Scaler',
                        children:[
                            {path:'Scaler',name:"反应过程"},
                            {path:'Scaler',name:"分离过程"}
                            ]
                    },
                    {
                        icon:'fa-address-card-o',
                        name:"系统管理",
                        path:'info',
                        children:[
                            {path:'infoshow',name:"个人信息"},
                            {path:'PriceEdit',name:"价格管理"}
                        ]
                    }
                ],

            }
        },

methods:{
      readMenu:function () {
         // let token=localStorage.eleToken;
         //    this.$axios.get('/FuelOilService.asmx/getNavigation').then(res=>{
         //     return res;
         //    })
           // this.$axios.get('/FuelOilService.asmx/getNavigation?token='+token).then(res=>{
           //      console.log(res);
           //       return res;
           // })

      },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    //设置刷新高亮
     splithref(href){
        var href = href.split("http://192.168.1.107:8080/");
         //console.log(href[1])
         return href[1];
     }

},
        mounted(){
            let href = window.location.href;
            //this.defaultUrl = href.split('/')[1]
            this.defaultUrl = this.splithref(window.location.href);
        },

    }
</script>

<style scoped>

    /* 改变箭头颜色f*/
    .el-submenu__title i {
        color: #016577;
    }
    /*i{*/
        /*color: #016A46;*/
    /*}*/
    .el-menu-item{
        border-bottom: 1px solid #016577;
    }
    .el-submenu{
        border-bottom: 1px solid #016577;
    }
    .menu_page {
        position: fixed;
        top: 70px;
        left: 0;
        min-height: 100%;
        background-color: #0A243D;
        z-index: 99;
        border-right: 5px solid #016577;
        border-top: 5px solid #016577 ;
    }
    .el-menu {
        border: none;
    }
    .fa-margin {
        margin-right: 5px;
        color: #016577;

    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
        min-height: 400px;

    }
    .el-menu-vertical-demo {
        width: 35px;
    }
    .el-submenu .el-menu-item {
        min-width: 180px;
    }

    .hiddenDropdown,
    .hiddenDropname {
        display: none;
    }
    a {
        text-decoration: none;
    }
</style>

