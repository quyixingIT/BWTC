<template>
    <div class="index">
        <HeadNav></HeadNav>

        <LeftMenu v-on:func="clickFunctions" v-on:func1="click1Functions">

        </LeftMenu>
<div class="rightContainer" id="rightContainer">
    <router-view></router-view>
</div>
    </div>
</template>

<script>
    import  HeadNav from "../components/HeadNav"
    import  LeftMenu from "../components/LeftMenu"
    export default {
        name: "index",
        components:{
            HeadNav,
            LeftMenu,
        },
        data(){
           return{
               id:null,
               pos:null,
               loader:null,
               flag:true
           }
        },
        mounted(){
            //debugger;btClick
           var f= document.getElementById('menu_page').clientWidth;
           //  var c=document.getElementById('btClick');
            console.log(f);
            var d= document.getElementById('rightContainer').clientWidth;
            console.log(d);
           //  c.onclick=this.clickFunctions;
// console.log(this.$refs.flag.flag);
//             if(this.$refs.flag.flag==false){
//                 debugger;
//                document.getElementById('btClick1') .onclick=this.click1Functions;
//             }



        },
        methods:{

            clickFunctions:function () {
                debugger;
                document.getElementById('elmenu').style.display="none";
                //将头部隐藏
                document.getElementById('head-nav').style.display="none";
                var a=document.getElementById('menu_page').clientWidth;

                document.getElementById('menu_page').style.setProperty('width', 1+'px', 'important');
                var b = document.getElementById('rightContainer');

              var c=6+'px';
                b.style.setProperty('left',c , 'important');
                 var bwidth=document.getElementById('rightContainer').clientWidth;
                 //内容高度
                var bhight=document.getElementById('rightContainer').clientHeight;
               var e=document.getElementById('rightContainer').clientWidth;
               var cwidth=bwidth+179;
              var cheight=bhight+75;
                var height=cheight+"px"
                 var width=cwidth+"px";
                 b.style.setProperty('width', width, 'important');
                document.getElementById('menu_page').style.setProperty('top', '0px', 'important');
                 b.style.setProperty('height', height, 'important');
                this.flag=false;
            },
            click1Functions:function () {
                    debugger;
                var a2=document.getElementById('menu_page').clientWidth;
                    var that=this;
                    document.getElementById('elmenu').style.display="block";
                // //将头部显示
                 document.getElementById('head-nav').style.display="block";
                    var a=document.getElementById('menu_page');
                    var a1=document.getElementById('menu_page').clientWidth;
                    a.style.setProperty('width', 180+'px', 'important')
                    console.log(a1);
                    var b = document.getElementById('rightContainer');
                    //var c=(180-a)+'px';
                    b.style.setProperty('left', 185+'px', 'important');
                    var bwidth=document.getElementById('rightContainer').clientWidth;
                // //内容高度
                var bhight=document.getElementById('rightContainer').clientHeight;
                var cheight=bhight-75;
                    //var e=document.getElementById('rightContainer').clientWidth;
                    var cwidth=bwidth-(180-a2);
                    console.log(cwidth);
                    var width=cwidth+"px";
                    var height=cheight+"px";
                 b.style.setProperty('height', height, 'important');
                document.getElementById('menu_page').style.setProperty('top', '70px', 'important');
                    b.style.setProperty('width', width, 'important');
                    this.flag=true;
            }

        }

    }
</script>

<style scoped>
.index{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
    .rightContainer{
        position: relative;
        top: 0;
        left: 185px;
        right: 0;
        width: calc(100% - 185px);
        height: calc(100% - 75px);
        overflow: hidden;
        /*background-color: #080D1C;*/
        background: url("../assets/BJ.png") no-repeat;
        background-size: 100% 100%;
    }
</style>
