<template>
<div class="SCZM">
    <!--<img src="../assets/svg/SCZM1.svg" alt="图片1">-->
    <!--<img src="../assets/svg/SCZM.svg" alt="图片">-->
        <img src="../assets/title.png"/>
    <div class="xuni">
        <SvgIcon></SvgIcon>
    </div>
    <div class="SS">
        <SSIcon></SSIcon>
    </div>

</div>
</template>
<script>
    import  SvgIcon from "../components/SvgIcon"
    import  SSIcon from "../components/SSIcon"
import * as go from "gojs";
export default {
    name:'SCZM',
    components:{
        SvgIcon,
        SSIcon,
    },
data(){
return{
image:'',
opacity :1,
down:true,
myDiagram:'',

}
},
mounted(){
        // let _this = this;
        // var textValue=document.getElementById("aa").innerHTML="123456";
        // console.log(textValue);
},
methods:{
}
}
</script>


<style scoped>

    .SS{
      padding-bottom: 20px;
    }
    .xuni{
       padding-top: 20px;
    }
.SCZM{
    /*background-color: #080D1C;*/
    /*padding-top: 50px;*/
}
</style>

