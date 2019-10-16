<template>
    <div class="Container">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="单粘度换算" name="first">
                <section class="form_container">
                    <el-form :model="formInline" :rules="rules"  ref="registerForm" label-width="150px" class="registerForm">
                        <el-form-item label="已知温度(摄氏度)" prop="temperature">
                            <el-input  v-model="formInline.temperature" ref="temperature" placeholder="请输入温度"></el-input>
                        </el-form-item>
                        <el-form-item label="已知粘度" prop="treacliness">
                            <el-input  v-model="formInline.treacliness" ref="treacliness" placeholder="请输入粘度"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="校正值" prop="parameter">-->
                            <!--<el-input  v-model="formInline.parameter" ref="parameter" placeholder="请输入参数"></el-input>-->
                        <!--</el-form-item>-->
                        <el-form-item label="温度(摄氏度)" prop="outTemperature">
                            <el-input type="text"  v-model="formInline.outTemperature" ref="outTemperature" placeholder="温度"></el-input>
                        </el-form-item>
                        <el-form-item label="粘度" prop="outTreacliness"v-if="formInline.temperature&&formInline.treacliness&&formInline.parameter&&formInline.outTemperature">
                            <el-input type="text"v-model="formInline.outTreacliness":disabled="true" placeholder="粘度"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('registerForm')">立即计算</el-button>
                        </el-form-item>

                    </el-form>
                </section>
            </el-tab-pane>
            <el-tab-pane label="双粘度换算" name="second">
                <section class="form_container">
                    <el-form :model="formInline" :rules="rules"  ref="registerForm" label-width="150px" class="registerForm">
                        <el-form-item label="已知温度1(摄氏度)" prop="Stemperature">
                            <el-input  v-model="formInline.Stemperature"ref="Stemperature"  placeholder="请输入温度"></el-input>
                        </el-form-item>
                        <el-form-item label="已知粘度1" prop="Streacliness">
                            <el-input  v-model="formInline.Streacliness"ref="Streacliness" placeholder="请输入粘度"></el-input>
                        </el-form-item>
                        <el-form-item label="已知温度2(摄氏度)" prop="Stemperature2">
                            <el-input  v-model="formInline.Stemperature2"ref="Stemperature2"  placeholder="请输入温度"></el-input>
                        </el-form-item>
                        <el-form-item label="已知粘度2" prop="Streacliness2">
                            <el-input  v-model="formInline.Streacliness2"ref="Streacliness2" placeholder="请输入粘度"></el-input>
                        </el-form-item>
                        <el-form-item label="温度(摄氏度)" prop="SoutTemperature">
                            <el-input type="text"  v-model="formInline.SoutTemperature"ref="SoutTemperature" placeholder="温度"></el-input>
                        </el-form-item>
                        <el-form-item label="粘度" prop="SoutTreacliness"v-if="formInline.Stemperature&&formInline.Streacliness&&formInline.Stemperature2&&formInline.Streacliness2&&formInline.SoutTemperature">
                            <el-input type="text"  v-model="formInline.SoutTreacliness":disabled="true" placeholder="粘度"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('registerForm')">立即计算</el-button>
                        </el-form-item>

                    </el-form>
                </section>
            </el-tab-pane>
            <el-tab-pane label="参照图表" name="third">
                <div class="char1">
                    <img src="../assets/char1.png"/>
                </div>
                <div class="chart2">
                    <img src="../assets/chart2.png"/>
                </div>
                <div class="chart3">
                    <img src="../assets/chart3.png"/>
                </div>
                <div class="chart4">
                    <img src="../assets/chart4.png"/>
                    <div class="text">
                    <p>温度校正</p>
                    <p>
                        从其他温度下测定的粘度，计算图表下的粘度时，必须把前一温度的校正值加在未校正的V值中。
                        例：计算E20℃粘度为10的燃料油的50℃粘度。
                        查右表，10E→28.4（未校正）
                        查表，20℃的温度校正值是-4.9，校正后为28.4-4.9=23.5。再根据校正后值23.5查右表，得E50=3
                    </p> 
                    <p>
                        从图表温度下测定的粘度计算其他温度下的粘度时，必须从V50℃值中减去相当于两温度的校正值
                        例1：计算RI 100°F→31.7 V50℃
                        温度校正：100°F→140°F为31.7-3.4=28.3
                        根据28.3查左图，则140°F的RI=550
                         </p>
                    <p>
                        例2：从V50换算到V150
                        V50=5000
                        从第一个图V50查得38.3
                        据下表从50℃校正到100℃，为38.3-7.2=31.1
                        再在V50查得100℃运动粘度V100=190
                         </p>
                    <p>
                        例3：从V100换算成V150（需要从V100校正到V50，再从V50换算到V150）
                        V100=982.0，在第一个图V50查得35.1
                        据表校正到50℃，为35.1+7.2=42.3
                        再据表从50℃校正到150℃，为42.3-13.5=28.8
                        再在V50查得150℃运行粘度V150=85
                         </p>
                    <p>
                        注意事项</p>
                    <p>
                        掺和：掺和油粘度的计算是以重量为基础的。</p>
                    <p>
                        例：用33瓦斯油与2000燃料油掺和成100吨的600燃料油（均为RI100°F）
                        2000燃料油（V=31.7），33瓦斯油（V=9.5）600掺和油（V=28.6）
                        （100-X）31.7+9。5X=100*28.6 	X=14.0
                    </p>
                    </div>
                </div>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>

<script>
    export default {
        name: "Scaler",
        data() {
            return {
                activeName2: 'first',
                data:[],
                formInline: {
                    temperature:0,
                    treacliness:0,
                    parameter:9.2,
                    outTemperature: 0,
                    outTreacliness: 0,
                    Stemperature:0,
                    Streacliness:0,
                    Stemperature2:0,
                    Streacliness2:0,
                    Sparameter:0,
                    SoutTemperature: 0,
                    SoutTreacliness: 0,
                },
                rules: {
                    temperature :[{

                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    treacliness :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    outTemperature :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    Stemperature :[{

                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    Streacliness :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    Stemperature2 :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    Streacliness2 :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                    SoutTemperature :[{
                        required:true,
                        message:"已知条件不能为空！",
                        trigger:"blur"
                    }],
                }
            }
        },
        //对文本框中的值发生改变进行监听
        watch:{
            formInline:{
                handler:function(val,oldval){
                   // console.log(val);
                    //console.log(oldval);
                    //console.log(this.$refs.type1.value);
                    if(this.$refs.temperature.value!==val.temperature || this.$refs.treacliness.value!==val.treacliness ||this.$refs.outTemperature.value!==val.outTemperature){
                        //console.log("不相等！");
                        this.formInline.outTreacliness="";
                    }else if(this.$refs.Stemperature.value!==val.Stemperature||this.$refs.Streacliness.value!==val.Streacliness||this.$refs.Stemperature2.value!==val.Stemperature2||this.$refs.Streacliness2.value!==val.Streacliness2||this.$refs.SoutTemperature.value!==val.SoutTemperature){
                        this.formInline.SoutTreacliness="";
                    }
                   // console.log(this.$refs.temperature.value);
                },
                deep:true
            }
        },
        created(){
        this.data=JSON.parse(localStorage.getItem("formInline"));
            var data=this.data;
            this.formInline.temperature=data.temperature;
            this.formInline.treacliness=data.treacliness;
            this.formInline.parameter=data.parameter;
            this.formInline.outTemperature=data.outTemperature;
            this.formInline.outTreacliness=data.outTreacliness;
            this.formInline.Stemperature=data.Stemperature;
            this.formInline.Streacliness=data.Streacliness;
            this.formInline.Stemperature2=data.Stemperature2;
            this.formInline.Streacliness2=data.Streacliness2;
            this.formInline.Sparameter=data.Sparameter;
            this.formInline.SoutTemperature=data.SoutTemperature;
            this.formInline.SoutTreacliness=data.SoutTreacliness;
            //this.formInline.temperature=data.temperature;
            //console.log(this.data.temperature);
        },
        methods: {
            onSubmit:function (result) {
                if(this.activeName2=="first"){
                    //localStorage.setItem('eleUserinfo',userinfo);
                    //localStorage.setItem('eleToken',token);
                    //输入粘度
                    var treacliness=parseFloat(this.formInline.treacliness);
                    //输入温度
                    var temperature=parseFloat(this.formInline.temperature);
                    //第二个温度
                    var outTemperature=parseFloat(this.formInline.outTemperature);
                    //参数
                    var parameter=parseFloat(this.formInline.parameter);
                    var E2=(Math.log10(Math.log10(treacliness+0.6))-parameter)/Math.log10(temperature+273.15);
                    var res=(Math.pow(10,Math.pow(10,9.2+E2*Math.log10(outTemperature+273.15))))-0.6;
                    this.formInline.outTreacliness=res.toFixed(0);;
                    //let formInline = JSON.stringify(this.formInline);
                    localStorage.setItem('formInline',JSON.stringify(this.formInline));
                    this.data=JSON.parse(localStorage.getItem("formInline"));

                }else{
                    //第一组温度B4
                    var Stemperature=parseFloat(this.formInline.Stemperature);
                    //第一组粘度E4
                    var Streacliness=parseFloat(this.formInline.Streacliness);
                    //第2组温度B5
                    var Stemperature2=parseFloat(this.formInline.Stemperature2);
                    //第2组粘度E5
                    var Streacliness2=parseFloat(this.formInline.Streacliness2);
                    //B8
                    var SoutTemperature=parseFloat(this.formInline.SoutTemperature);
                    //矫正值
                    var E2=(Math.log10(Math.log10(Streacliness+0.6))-Math.log10(Math.log10(Streacliness2+0.6)))/(Math.log10(Stemperature+273.15)-Math.log10(Stemperature2+273.15));
                   var F2=Math.log10(Math.log10(Streacliness+0.6))-(E2*Math.log10(Stemperature+273.15));
                   var res=Math.pow(10,Math.pow(10,F2+(E2*Math.log10(SoutTemperature+273.15))))-0.6;
                    this.formInline.SoutTreacliness=res.toFixed(0);
                    localStorage.setItem('formInline',JSON.stringify(this.formInline));
                    this.data=JSON.parse(localStorage.getItem("formInline"));
                }

            },
            handleClick(tab, event) {
                if(tab.name=="first"){
                    this.activeName2=tab.name;
                }else if(tab.name=="second"){
                    this.activeName2=tab.name;
                }else {
                    this.activeName2=tab.name;
                }
            },
            //表单验证
            proving(){

            }
        }
    }
</script>

<style scoped>
    .Container{
        width:100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .form_container {
        width: 600px;
        /*height: 300px;*/
        margin: 0 auto;
        /*position: absolute;*/
        /*top: 10%;*/
        /*left: 24%;*/
        padding: 10px;
        border-radius: 5px;
        text-align: center;
    }

    .registerForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        //box-shadow: 0px 5px 10px #cccc;
    }
.char1{
    width:200px;
    float: left;
    margin-left: 30px;
}
.chart2{
    width:200px;
    float: left;
}
.chart3{
    width:200px;
    float: left;
}
.chart4{
    width:300px;
    float: left;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 16px;
    color: #606266;
}
.text{
    padding: 8px;
    border:2px solid #409EFF ;
    border-radius: 5px;
}
    .submit_btn {
        width: 100%;
    }
</style>
