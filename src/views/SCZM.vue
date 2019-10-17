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
    this.getData();
        // let _this = this;
    // var textValue=document.getElementById("aa").innerHTML="123456";
    // console.log(textValue);
},
methods:{
    getData:function(){
        //debugger;            //var ws=null;
        var that=this;
        if ('WebSocket' in window) {
            //this.ws = new WebSocket('ws://192.168.1.113:1001/api/ZMData/Get?');
            this.ws = new WebSocket('ws://localhost:59769/api/ZMData/Get');
            //this.ws = new WebSocket('ws://localhost:59769/api/OPCOper/Get');
            this.ws.onopen = function () {
                //debugger;
                console.log('WebSocket连接成功！');
            };
            this.ws.onmessage = function (res) {
               // debugger;
               //  debugger;
               //  var titleGZ1=document.getElementById('titleGZ1').innerHTML;
               //  document.getElementById('titleGZ1').innerHTML='测试title';
                var res1=JSON.parse(res.data);
                var res2=res1.dataToWebXNList;
                var res3=res1.dataToWebCTList;
                console.log(res1);
                for(var i=0; i <res2.length;i++){
                    var id=res2[i].name;
                    //debugger;
                    if(document.getElementById(id)){
                        document.getElementById(id).innerHTML=parseFloat(res2[i].value).toFixed(1)+"℃";
                    }

                }
                for(var i=0; i <res3.length;i++){
                    var id=res3[i].name;
                    //debugger;
                    if(document.getElementById(id)){
                        document.getElementById(id).innerHTML=parseFloat(res3[i].value).toFixed(1)+"℃";
                    }

                }
                // that.tableData=res1._intelligentControllerList;//res.data;
                //  that.tableData1=res1._intelligentControllerList1;//res.data;
                //  console.log(res1._intelligentController);
                //  that.ICSwitch=res1._intelligentController.ICName;
                //  that.ControllerName=res1._intelligentController.ICSSTargetVal;
                //  that.DisplayedStatus=res1._intelligentController.ICDesc;
                //  that.urtCountdown=res1._intelligentController.ICStatus;
                //  that.urtIntervalCount=res1._intelligentController.CurrentValue;
            };
            this.ws.onerror = function (error) {
                console.log('WebSocket连接失败,错误:' + error);
            };
            this.ws.onclose = function () {
                //debugger;
                console.log('WebSocket连接关闭！');
            };
        }
    },
    destroyed(){
        if (this.ws.readyState == WebSocket.OPEN) {
            this.ws.close();
            console.warn('WebSocket连接已关闭！');
        } else {
            console.warn('WebSocket连接已关闭！');
        }
    },
    close () {
        this.ws.close();
    },
    opcwrite(id,value,col,tb){
        //console.log(value)
        //console.log(id)
        //debugger;
        //  this.$axios.get("http://192.168.1.113:1001/api/ZMData/WriteValue1?value="+value+"&&tag="+id+"&&col="+col+"&&tb="+tb).then(res=>{
        //     console.log(res)
        // })
        this.$axios.get("http://localhost:59769/api/ZMData/WriteValue1?value="+value+"&&tag="+id+"&&col="+col+"&&tb="+tb).then(res=>{
            console.log(res)
        })
    },
    updateval(row){
        this.getA=true;
        this.row=row;
        console.log(row.ICLowLimit);
    }
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

