<template>
    <div class="SCZM">
        <!--<img src="../assets/svg/SCZM1.svg" alt="图片1">-->
        <!--<img src="../assets/svg/SCZM.svg" alt="图片">-->
        <img src="../assets/XNGC.png" style="height: 8%;width:100%;"/>
        <div class="xuni">
            <SvgIcon></SvgIcon>
        </div>
        <div class="SS">
            <SSIcon></SSIcon>
        </div>

    </div>
</template>
<script>
    import SvgIcon from "../components/SvgIcon"
    import SSIcon from "../components/SSIcon"
    import * as go from "gojs";

    export default {
        name: 'SCZM',
        components: {
            SvgIcon,
            SSIcon,
        },
        data() {
            return {
                image: '',
                opacity: 1,
                down: true,
                myDiagram: '',
                tmTag: [159, 175, 0, 0, 96, 200, 0, 0, 200, 0, 0, 328, 0, 0, 100, 153,
                    150, 0, 141.5, 211, 184, 0, 0, 0, 0, 100, 175, 145, 147, 0, 0, 0, 50,
                    190.7, 0, 0, 0, 0, 70, 110.5, 91, 0, 0, 0, 137, 170, 149, 0, 0, 0, 0, 0]
            }
        },
        mounted() {
            this.getData();
            // let _this = this;
            // var textValue=document.getElementById("aa").innerHTML="123456";
            // console.log(textValue);
        },
        methods: {
            getData: function () {
                //debugger;            //var ws=null;
                var that = this;
                if ('WebSocket' in window) {
                    this.ws = new WebSocket('ws://192.168.1.113:1001/api/ZMData/Get?');
                     //this.ws = new WebSocket('ws://localhost:59769/api/ZMData/Get');
                    //this.ws = new WebSocket('ws://localhost:59769/api/OPCOper/Get');
                    this.ws.onopen = function () {
                        //debugger;
                        console.log('WebSocket连接成功！');
                    };
                    this.ws.onmessage = function (res) {
                        var res1 = JSON.parse(res.data);
                        var XNValue = res1.dataToWebXNList;
                        var CTValue = res1.dataToWebCTList;
                        var FlagXNID = res1.FlagXNID;
                        var FlagCTID = res1.FlagCTID
                        console.log(res1);
                        //虚拟
                        for (var i = 0; i < XNValue.length; i++) {
                            var id = FlagXNID[i];
                            if (document.getElementById(id)) {
                                document.getElementById(id).innerHTML = parseFloat(XNValue[i]).toFixed(1) + "℃";
                                if ((XNValue[i].toFixed(1) > CTValue[i].toFixed(1) * 1.03) || (XNValue[i].toFixed(1) < CTValue[i].toFixed(1) * 0.97)) {
                                    document.getElementById(id).setAttribute("class","st24");
                                } else if (XNValue[i].toFixed(1) > (CTValue[i].toFixed(1)) * 1.05 || XNValue[i].toFixed(1) < (CTValue[i]).toFixed(1) * 0.95) {
                                    document.getElementById(id).setAttribute("class","st23");
                                }
                            }
                        }
                        for (var i = 0; i < CTValue.length; i++) {
                            var id = FlagCTID[i];
                            if (document.getElementById(id)) {
                                document.getElementById(id).innerHTML = parseFloat(CTValue[i]).toFixed(1) + "℃";
                                if (CTValue[i].toFixed(1) > that.tmTag[i].toFixed(1) * 1.03 || CTValue[i].toFixed(1) < that.tmTag[i].toFixed(1) * 0.97) {
                                    document.getElementById(id).setAttribute("class","st21");
                                } else if (CTValue[i].toFixed(1) > that.tmTag[i].toFixed(1) * 1.05 || CTValue[i].toFixed(1) < that.tmTag[i].toFixed(1) * 0.95) {
                                    document.getElementById(id).setAttribute("class","st20");
                                }
                            }
                        }
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
            destroyed() {
                if (this.ws.readyState == WebSocket.OPEN) {
                    this.ws.close();
                    console.warn('WebSocket连接已关闭！');
                } else {
                    console.warn('WebSocket连接已关闭！');
                }
            },
            close() {
                this.ws.close();
            },
            opcwrite(id, value, col, tb) {
                //console.log(value)
                //console.log(id)
                //debugger;
                //  this.$axios.get("http://192.168.1.113:1001/api/ZMData/WriteValue1?value="+value+"&&tag="+id+"&&col="+col+"&&tb="+tb).then(res=>{
                //     console.log(res)
                // })
                this.$axios.get("http://localhost:59769/api/ZMData/WriteValue1?value=" + value + "&&tag=" + id + "&&col=" + col + "&&tb=" + tb).then(res => {
                    console.log(res)
                })
            },
            updateval(row) {
                this.getA = true;
                this.row = row;
                console.log(row.ICLowLimit);
            }
        }
    }
</script>


<style scoped>

    .SS {
        height: 46%;
        padding-bottom: 20px;
    }

    .xuni {
        height: 46%;
        padding-top: 20px;
    }

    .SCZM {
        width:100%;
        height: 100%;
        text-align: center;
        /*background-color: #080D1C;*/
        /*padding-top: 50px;*/
    }
</style>

