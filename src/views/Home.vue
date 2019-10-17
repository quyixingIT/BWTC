/* 智慧看板*/
<template>
    <div class="allbox" id="allbox">
        <img id="imgtitle" src="../assets/title.png" alt="">
        <div class="content">
                <div id="fuhe" class="fuhe">
                    <div class="fh1">
                        <div class="fh1_a"id="fh1_a"></div>
                        <div class="fh1_b">
                            <div class="fh1_b1" id="fh1_b1"></div>
                            <!--圆-->
                            <div class="fh1_b2"id="fh1_b2">
                                <div class="fh1_b2_a" id="fh1_b2_a">

                                </div>

                            </div>
                        </div>
                    </div>
                    <!--表格1-->
                    <div class="fh2" style="margin-top: 20px;padding-right: 10px;text-align: center">
                        <div style="width: 100%;height: 9%;background-color: #105090;">
                            <table id="CP" class="tableTitle" style="border:0px solid #888;width: 100%;text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 30%;color:#64B9E9;">设备</td>
                                    <td style="width: 40%;color:#64B9E9">进出料</td>
                                    <td style="width: 30%;color:#64B9E9">流量</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentCP" class="parentCB"
                             style="height: 80%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childCP" class="child" style="width: 100%">
                                <table style="width: 100%">
                                    <tr class="jishu">
                                        <td style="width: 30%;color:white">蒸发塔</td>
                                        <td style="width: 40%;color:white">塔顶出料</td>
                                        <td style="width: 30%;color:white">100</td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">蒸发塔</td>
                                        <td style="color:white;">塔釜进料</td>
                                        <td style="color:white;">500</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">残油塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">111</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">残油塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">500</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">预反应器</td>
                                        <td style="color:white;">塔釜进料</td>
                                        <td style="color:white;">200</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">预反应器</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">500</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">主反应器</td>
                                        <td style="color:white;">塔顶进料</td>
                                        <td style="color:white;">700</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">主反应器</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">200</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">稳定塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">300</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">稳定塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">400</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">预蒸馏塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">100</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">预蒸馏塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">350</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">111</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">侧线出料</td>
                                        <td style="color:white;">300</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">100</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">50</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">300</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">111</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">200</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">解析塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">400</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">解析塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">600</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">111</td>

                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">6000</td>

                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">3000</td>

                                    </tr>
                                </table>
                            </div>
                            <div id="childCP1" class="child"></div>

                        </div>
                    </div>
                </div>
            <!--实时能耗-->
                <div id="nenghao" class="nenghao">
                    <div class="NH_1">
                        <div class="NH_1_a" id="NH_1_a"></div>
                        <div class="NH_1_b" id="NH_1_b"></div>
                    </div>
                    <div class="NH_2">
                        <div class="NH_2_a" id="NH_2_a"></div>
                        <!--表格2-->
                        <div class="NH_2_b" id="NH_2_b">
                            <div style="width: 100%;height: 23.6%;background: rgba(251,251,251,0)">
                                <table id="H"
                                       style="border:0px solid #888;width: 100% ;font-size: 18px;background-color: rgba(12,128,240,0.35)">
                                    <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                    <tr>
                                        <td style="width: 25%;color:#64B9E9;">设备</td>
                                        <td style="width: 25%;color:#64B9E9">介质</td>
                                        <td style="width: 25%;color:#64B9E9">单位</td>
                                        <td style="width: 25%;color:#64B9E9">数值</td>
                                    </tr>
                                </table>
                            </div>
                            <div id="parentH" class="parentCB"
                                 style="height: 74%;overflow-y: scroll;overflow: hidden;width: 100%">
                                <div id="childH" class="child" style="width: 100%">
                                    <table style="width: 100%">
                                        <tr class="jishu">
                                            <td style="width: 25%;color:white">稳定塔</td>
                                            <td style="width: 25%;color:white">S16</td>
                                            <td style="width: 25%;color:white">kg/h</td>
                                            <td style="width: 25%;color:white">997</td>
                                        </tr>
                                        <tr class="oushu">
                                            <td style="color: white">残油塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">1464</td>
                                        </tr>
                                        <tr class="jishu">
                                            <td style="color: white">预蒸馏塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">5912</td>
                                        </tr>
                                        <tr class="oushu">
                                            <td style="color: white">萃取塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">3556</td>
                                        </tr>
                                        <tr class="jishu">
                                            <td style="color: white">解析塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">3338</td>
                                        </tr>
                                        <tr class="oushu">
                                            <td style="color: white">二甲苯塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">2697</td>
                                        </tr>
                                        <tr class="jishu">
                                            <td style="color: white">加热炉</td>
                                            <td style="color: white">煤气</td>
                                            <td style="color: white">Nm3/h</td>
                                            <td style="color: white">300</td>
                                        </tr>
                                        <tr class="oushu">
                                            <td style="color: white">加热炉</td>
                                            <td style="color: white">氢气</td>
                                            <td style="color: white">Nm3/h</td>
                                            <td style="color: white">187</td>
                                        </tr>
                                        <tr class="jishu">
                                            <td style="color: white">压缩机</td>
                                            <td style="color: white">氮气</td>
                                            <td style="color: white">Nm3/h</td>
                                            <td style="color: white">100</td>
                                        </tr>
                                        <tr class="oushu">
                                            <td style="color: white">预蒸馏槽</td>
                                            <td style="color: white">氢气</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">10</td>
                                        </tr>
                                    </table>
                                </div>

                                <div id="childH1" class="child"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="content"style="margin-top: 0px">
            <div id="zhibiao" class="zhibiao">
                <div class="ZB_1">
                    <div class="ZB_1_a">
                        <!--表格3-->
                        <div style="width: 100%;height: 19%;background: rgba(251,251,251,0)">
                            <table id="JB"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35)">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 29%;color:#64B9E9;">组分</td>
                                    <td style="width: 18%;color:#64B9E9">单位</td>
                                    <td style="width: 30%;color:#64B9E9">测量值</td>
                                    <td style="width: 17%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentJB" class="parentCB"
                             style="height: 81%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childJB" class="child" style="width: 100%">
                                <table>
                                    <tr class="jishu">
                                        <td style="width: 30%;color:white">非芳</td>
                                        <td style="width: 23%;color:white">WT%</td>
                                        <td style="width: 30%;color:white">0.52</td>
                                        <td style="width: 33%;color:white">0.53</td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">苯</td>
                                        <td style="color:white">PPMW</td>
                                        <td style="color:white">83</td>
                                        <td style="color:white">86</td>
                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white">甲苯</td>
                                        <td style="color:white">WT%</td>
                                        <td style="color:white">99.4</td>
                                        <td style="color:white">99.5</td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">水</td>
                                        <td style="color:white">PPMW</td>
                                        <td style="color:white">250</td>
                                        <td style="color:white">250</td>
                                    </tr>
                                </table>
                            </div>

                            <div id="childJB1" class="child"></div>
                        </div>
                    </div>
                    <div class="ZB_1_b" id="ZB_1_b"></div>
                    <div class="ZB_1_c" id="ZB_1_c"></div>
                </div>
                <div class="ZB_2">
                    <div class="ZB_2_a" id="ZB_2_a"></div>
                    <div class="ZB_2_b" id="ZB_2_b"></div>
                    <div class="ZB_2_c" id="ZB_2_c"></div>
                </div>
            </div>
            <div id="touyonglv" class="touyonglv">
                <div class="TYL_1">
                    <div class="TYL_1_a">
                        <svg id="fillgauge1" width="97%" height="150" ></svg>
                    </div>
                    <div class="TYL_1_b"></div>
                    <div class="TYL_1_c"></div>
                    <div class="TYL_1_d"></div>
                </div>
                <div class="TYL_2">
                    <div class="TYL_2_a"></div>
                    <div class="TYL_2_b"></div>
                    <div class="TYL_2_c"></div>

                </div>
            </div>


        </div>
    </div>

</template>
<script>
    const $echarts = require('echarts');
    import * as d3 from 'd3'
    import * as go from "gojs";
    import {EleResize} from '../assets/js/esresize.js'
    // import {liquidFillGaugeDefaultSettings} from'../assets/js/liquidFillGauge.js'
     //import {loadLiquidFillGauge} from'../assets/js/liquidFillGauge.js'

    export default {
        name:'home',
        data(){
            return{
                screenWidth: document.body.clientWidth,     // 屏幕宽
                screeHeight: document.body.clientHeight,
            }
        },
        mounted(){
         document.getElementById("allbox").setAttribute('width',this.screenWidth);
         document.getElementById("imgtitle").setAttribute('width',this.screenWidth-200);
         // document.getElementById("allbox").setAttribute('height',this.screeHeight-100);
            document.getElementById("fuhe").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("nenghao").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("zhibiao").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("touyonglv").setAttribute('width',(this.screenWidth-200)/2);
            // document.getElementById("fuhe").setAttribute('height',(this.screenWidth-200)/2);
            // document.getElementById("nenghao").setAttribute('height',(this.screenWidth-200)/2);
            // document.getElementById("zhibiao").setAttribute('height',(this.screenWidth-200)/2);
            // document.getElementById("touyonglv").setAttribute('height',(this.screenWidth-200)/2);
           this. Echarts1();
           this.Echarts11();
           this.Echarts2();
           this.Echarts18();
           this.Echarts3();
           this.Echarts4();
           this.Echarts5();
           this.Echarts6();
            this.Echarts7();
            this.Echarts8();
            this.table1Scroll();
            this.circleChange();
            this.liquidFill();
            this.Echarts12();
        },
        methods:{
Echarts1:function () {
    var dom = document.getElementById("fh1_a");
    var myChart = $echarts.init(dom);
    var app = {};
   var option = null;
    option = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        series: [
            {
                name: ' ',
                type: 'gauge',
                min: 0,
                max: 220,
                splitNumber: 11,
                center: ['50%', '60%'],
                radius: '85%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'],
                            [0.82, '#1e90ff'],
                            [1, '#ff4500']],
                        width: 1,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 0,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 0,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 0,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
//fontSize: 50,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
// backgroundColor: 'rgba(30,144,255,0.8)',
// borderWidth: 1,
// borderColor: '#fff',
//shadowColor: '#fff', //默认透明
//shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#64B9E9'
                    }
                },
                data: [{value: 40, name: 't'}]
            },
            {
                name: ' ',
                type: 'gauge',
                center: ['26%', '70%'],    // 默认全局居中
                radius: '65%',
                min: 0,
                max: 7,
                endAngle: 45,
                splitNumber: 7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 0,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 0,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width: 5,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
//backgroundColor: 'rgba(30,144,255,0.8)',
// borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height: 30,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#64B9E9'
                    }
                },
                data: [{value: 1.5, name: 't'}]
            },
            {
                name: ' ',
                type: 'gauge',
                center: ['76%', '70%'],    // 默认全局居中
                radius: '65%',
                min: 0,
                max: 7,
                endAngle: -45,
                startAngle: 145,
                splitNumber: 7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 0,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 0,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width: 5,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
//backgroundColor: 'rgba(30,144,255,0.8)',
// borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height: 30,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#64B9E9'
                    }
                },
                data: [{value: 1.5, name: 't'}]
            }
        ]
    };

// setInterval(function () {
//     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
//     option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
//     myChart.setOption(option);
// }, 2000)
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
},
            //实时能耗
Echarts2:function () {
    var dom = document.getElementById("NH_1_a");
    var myChart = $echarts.init(dom);
    var app = {};
   var option = null;
    var data = [
        [
            ['S40', 22],
            ['氢气', 35],
            ['S16', 25],
            ['煤气', 26],
            ['氮气', 12],
            ['S3', 15]]
    ];

    option = {
//    color: '#782225',

        backgroundColor: 'rgba(0,0,0,0)',
        textStyle: {
            textColor: '#999999'
        },

        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#3db1a6',
                    width: 1,//这里是为了突出显示加上的
                }
            },
            splitLine: {
                show: false
            },
//interval:0,
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#CCCCCC'
                }
            }
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '15%',
            top: '20%',
            containLabel: true
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#3db1a6',
                    width: 1,//这里是为了突出显示加上的
                }
            },
            min: 0,
            minInterval: 10,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#CCCCCC'
                }
            },
            scale: true
        },
        series: [{
            name: '155',
            data: data[0],
            symbolSize: function (dataItem) {
                return dataItem[1];
            },
            type: 'scatter',
// symbolSize: function (data) {
//     return Math.sqrt(data[2]) / 5e2;
// },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
//position: 'top'
                }
            },
// itemStyle: {
//     normal: {
//         shadowBlur: 10,
//         shadowColor: 'rgba(120, 36, 50, 0.5)',
//         shadowOffsetY: 5,
//         color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//             offset: 0,
//             color: 'rgb(251, 118, 123)'
//         }, {
//             offset: 1,
//             color: 'rgb(204, 46, 72)'
//         }])
//     }
// }
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
},
            ///历史能耗折线图
            Echarts3:function () {
                var dom = document.getElementById("NH_2_a");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                option = {
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: '#55F93F',
                    tooltip: {
                        trigger: 'axis',
                        extraCssText: 'width:90px;',
                        axisPointer: {
                            type: 'shadow'
                        },

                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        top: '40%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        data: ['12/9', '13/9', '14/9', '15/9', '16/9', '17/9', '18/9'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        minInterval: 10,
                        nameTextStyle: {
                            color: '#CCCCCC'
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dotted',
                                color: '#404040'
                            }
                        }
                    },
                    series: [{
                        data: [11, 15, 17, 19, 16, 13, 14],
                        type: 'line',
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3.5,
                            type: 'solid'
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    textStyle:{
                                        fontSize:16
                                    },
                                    color:'#64b9e9',
                                    show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                                }
                            }
                        }
                    }]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //BT芳香烃散点图
            Echarts4:function () {
                //BT芳香烃散点图
                var dom = document.getElementById("ZB_1_b");
                var myChart = $echarts.init(dom);
                var app = {};
                var data = [
                    [
                        ['C4~C7非芳',235],
                        ['C8 非芳', 355],
                        ['苯', 86],
                        ['甲苯', 13],
                        ['NFM', 0.013]
                    ],
                    [
                        ['C4~C7非芳', 250],
                        ['C8 非芳', 365],
                        ['苯', 88],
                        ['甲苯', 13.5],
                        ['NFM', 0.025]
                    ]
                ];
              var option = {
                    title: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            rotate:25,
                            textStyle: {
                                color: '#CCCCCC',
                                fontSize: 12,
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    color: ['#333eaf', '#55F93F'],
                    grid: {
                        left: '20%'
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        min: 0,
                        minInterval: 20,
                        axisLabel: {
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    series: [{
                        name: '指标',
                        type: 'scatter',
                        label: {
                            emphasis: {
                                show: true,
                                position: 'left',
                                textStyle: {
                                    color: 'blue',
                                    fontSize: 16
                                }
                            }
                        },
                        data: data[0]
                    },
                        {
                            name: '测量值',
                            type: 'scatter',
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 16
                                    }
                                }
                            },
                            data: data[1],
                            itemStyle: {
                                normal: {
                                    label: {
                                        color:'#64b9e9',
                                        textStyle:{
                                            fontSize:16
                                        },
                                        position:'top',
                                        show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                                    }
                                }
                            }
                        },
                        {
                            name: '指标',
                            type: 'line',
                            showSymbol: false,
                            smooth: true,
                            data: data[0],
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'left',
                                        textStyle: {
                                            color: '#333',
                                            fontSize: 14
                                        }
                                    }
                                }
                            }
                        }]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //非芳烃散点图
            Echarts5:function () {
                //非芳烃散点图
                var dom = document.getElementById("ZB_1_c");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                var data = [
                    [
                        ['C4~C7非芳', 70.5],
                        ['苯', 15],
                        ['甲苯', 0.3],
                        ['NFM', 0.013]
                    ],
                    [
                        ['C4~C7非芳', 73],
                        ['苯', 17],
                        ['甲苯', 0.35],
                        ['NFM', 0.015]
                    ]
                ];
                option = {
                    title: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#CCCCCC',
                                fontSize: 12,

                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    color: ['#333eaf', '#55F93F'],
                    grid: {
                        left: '15%'
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        min: 0,
                        minInterval: 20,
                        axisLabel: {
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    series: [{
                        name: '指标',
                        type: 'scatter',
                        label: {
                            emphasis: {
                                show: true,
                                position: 'left',
                                textStyle: {
                                    color: 'blue',
                                    fontSize: 16
                                }
                            }
                        },
                        data: data[0]
                    },
                        {
                            name: '测量值',
                            type: 'scatter',
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 16
                                    }
                                }
                            },
                            data: data[1],
                            itemStyle: {
                                normal: {
                                    label: {
                                        color:'#64b9e9',
                                        textStyle:{
                                            fontSize:16
                                        },
                                        position:'top',
                                        show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                                    }
                                }
                            }
                        },
                        {
                            name: '指标',
                            type: 'line',
                            showSymbol: false,
                            smooth: true,
                            data: data[0],
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'left',
                                        textStyle: {
                                            color: '#333',
                                            fontSize: 14
                                        }
                                    }
                                }
                            }
                        }]
                };
                ;
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //循环气体雷达图
            Echarts6:function () {
                //循环气体雷达图
                var dom = document.getElementById("ZB_2_a");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                option = {
                    color: ['#333eaf', '#55F93F'],
                    radar: [
                        {
                            nameGap: 3,
                            indicator: [
                                {text: 'H2'},
                                {text: 'O2'},
                                {text: 'N2'},
                                {text: 'CH4'},
                                {text: 'C2H6'},
                                {text: 'C3H8'}
                            ],
                            center: ['43%', '55%'],
                            radius: 70,
                            startAngle: 90,
                            splitNumber: 4,
                            shape: 'circle',
                            name: {
                                textStyle: {
                                    color: '#72ACD1'
                                }
                            },
                            splitArea: {
                                areaStyle: {
                                    color: ['rgba(114, 172, 209, 0.1)',
                                        'rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.1)',
                                        'rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.1)'],
                                    shadowColor: 'rgba(41,59,134,0.64)',
                                    shadowBlur: 10
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '雷达图',
                            type: 'radar',
                            itemStyle: {
                                emphasis: {
                                    lineStyle: {
                                        width: 4
                                    }
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            },
                            data: [
                                {
                                    value: [91.5, 0.5, 2.5, 3.1, 1.1, 0],
                                    name: '测量值',
                                    areaStyle: {
                                        normal: {
                                            color: 'rgba(255, 255, 255, 0.5)'
                                        }
                                    }
                                },
                                {
                                    value: [92.5, 0.4, 3.2, 3.7, 1.22, 0],
                                    name: '指标',
                                    areaStyle: {
                                        normal: {
                                            color: 'rgba(255, 255, 255, 0.5)'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //纯苯散点图
            Echarts7:function () {
                //纯苯散点图
                var dom = document.getElementById("ZB_2_b");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                var data = [
                    [
                        ['非芳', 300],
                        ['甲苯', 5],
                        ['苯', 99.96],
                        ['水', 250]
                    ],
                    [
                        ['非芳', 310],
                        ['甲苯', 6],
                        ['苯', 99.97],
                        ['水', 237]
                    ]
                ];
                option = {
                    title: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '-3%',
                        top: '15%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#CCCCCC',
                                fontSize: 12,

                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    color: ['#333eaf', '#55F93F'],
                    grid: {
                        left: '15%'
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        minInterval: 100,
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    series: [{
                        name: '指标',
                        type: 'scatter',
                        label: {
                            emphasis: {
                                show: true,
                                position: 'left',
                                textStyle: {
                                    color: 'blue',
                                    fontSize: 16
                                }
                            }
                        },
                        data: data[0]
                    },
                        {
                            name: '测量值',
                            type: 'scatter',
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 16
                                    }
                                }
                            },
                            data: data[1],
                            itemStyle: {
                                normal: {
                                    label: {
                                        color:'#64b9e9',
                                        textStyle:{
                                            fontSize:16
                                        },
                                        position:'top',
                                        show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                                    }
                                }
                            }
                        },
                        {
                            name: '指标',
                            type: 'line',
                            showSymbol: false,
                            smooth: true,
                            data: data[0],
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'left',
                                        textStyle: {
                                            color: '#333',
                                            fontSize: 14
                                        }
                                    }
                                }
                            }
                        }]
                };
                ;
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //甲苯散点图
            Echarts8:function () {
                //甲苯散点图
                var dom = document.getElementById("ZB_2_c");
                var myChart = $echarts.init(dom);
                var app = {};
                var option = null;
                var data = [
                    [
                        ['非芳', 0.45],
                        ['苯', 26],
                        ['甲苯', 99.5],
                        ['水', 255]
                    ],
                    [
                        ['非芳', 0.6],
                        ['苯', 35],
                        ['甲苯', 99.4],
                        ['水', 260]
                    ]
                ];
                option = {
                    title: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#CCCCCC',
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                    },
                    color: ['#333eaf', '#55F93F'],
                    grid: {
                        left: '15%'
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        minInterval: 100,
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    series: [{
                        name: '指标',
                        type: 'scatter',
                        label: {
                            emphasis: {
                                show: true,
                                position: 'left',
                                textStyle: {
                                    color: 'blue',
                                    fontSize: 16
                                }
                            }
                        },
                        data: data[0]
                    },
                        {
                            name: '测量值',
                            type: 'scatter',
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    textStyle: {
                                        color: 'blue',
                                        fontSize: 16
                                    }
                                }
                            },
                            data: data[1],
                            itemStyle: {
                                normal: {
                                    label: {
                                        color:'#64b9e9',
                                        textStyle:{
                                            fontSize:16
                                        },
                                        position:'top',
                                        show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                                    }
                                }
                            }
                        },
                        {
                            name: '指标',
                            type: 'line',
                            showSymbol: false,
                            smooth: true,
                            data: data[0],
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'left',
                                        textStyle: {
                                            color: '#333',
                                            fontSize: 14
                                        }
                                    }
                                }
                            }
                        }]
                };
                ;
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            // 产量历史趋势
            Echarts11:function () {
                ///产量历史趋势
                var dom = document.getElementById("fh1_b1");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                option = {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    tooltip: {
                        axisPointer: {
                            type: 'shadow'
                        },
                        trigger: 'axis',
                        extraCssText: 'width:200px;',

                    },

                    color: ['#55F93F'],
// legend: {
//   data: ['纯苯'],
//   left: '60px',
//   icon: 'roundRect',
//   itemHeight: '8',
//   itemGap: 1,
//   top: '2%',
//   textStyle: {
//     color: '#ffffff',//字体颜色
//   },
// },
                    grid: {
                        left: '3%',
                        right: '0%',
                        bottom: '0%',
                        top: '20%',

                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
//boundaryGap: false,
                        data: ['12/9', '13/9', '14/9', '15/9', '16/9', '17/9', '18/9'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
//axisTick:false,
                        nameGap: 5,
                        min: 0,
                        showMinLabel: false,
                        minInterval: 100,
                        nameTextStyle: {
                            color: '#CCCCCC'
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },


// splitLine: {
//     lineStyle: {
//         type: 'dashed'
//     }
// },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dotted',
                                color: '#404040'
                            }
                        }
                    },
                    series: [
                        {
                            name: '纯苯',
                            type: 'line',
                            radius: 10,
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                type: 'solid'
                            },
//stack: '单能耗',
                            data: [230, 245, 238, 224, 236, 248, 271],

                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            //单耗雷达图
            Echarts18:function(){
                //////单耗雷达图
                var dom = document.getElementById("NH_1_b");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                var dataBJ = [
                    [186, 142, 192, 3.88, 93, 79, 18]
                ];
                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                };

                option = {
                    backgroundColor: 'rgba(0,0,0,0)',
                    title: {
                        text: '',
                        left: 'center',
                        textStyle: {
                            color: '#eee'
                        }
                    },
                    legend: {
                        bottom: 5,
                        itemGap: 20,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                        selectedMode: 'single'
                    },
                    radar: {
                        nameGap: 2,
                        indicator: [
                            {name: 'S40', max: 300},
                            {name: 'S3', max: 250},
                            {name: 'S16', max: 300},
                            {name: '氢气', max: 5},
                            {name: '煤气', max: 200},
                            {name: '氮气', max: 100}
                        ],
                        center: ['50%', '58%'],
                        radius: 55,
                        shape: 'circle',
                        splitNumber: 4,
                        name: {
                            textStyle: {
                                color: 'rgb(238, 197, 102)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.5)', 'rgba(238, 197, 102, 0.5)',
                                    'rgba(238, 197, 102, 0.5)', 'rgba(238, 197, 102, 0.5)',
                                    'rgba(238, 197, 102, 0.5)', 'rgba(238, 197, 102, 0.5)'
                                ].reverse()
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    //F9713C
                                    color: '#f9933e'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            ///APC投用率
            Echarts12:function(){
                ///APC投用率
                var dom = document.getElementById("TYL_1_c");
                var myChart = $echarts.init(dom);
                var app = {};
              var option = null;
                option = {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    tooltip: {
                        axisPointer: {
                            type: 'shadow'
                        },
                        trigger: 'axis',
                        extraCssText: 'width:50px;',

                    },
                    color: ['#55F93F'],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '0%',
                        top: '30%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        data: ['12/9', '13/9', '14/9', '15/9', '16/9', '17/9', '18/9'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        nameGap: 5,
                        min: 0,
                        showMinLabel: false,
                        nameTextStyle: {
                            color: '#CCCCCC'
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dotted',
                                color: '#404040'
                            }
                        }
                    },
                    series: [
                        {
                            type: 'line',
                            radius: 10,
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                type: 'solid'
                            },
                            data: [88, 95, 90, 93, 89, 92, 90],
                            itemStyle:{
                                normal:{
                                    label:{
                                        textStyle:{
                                            fontSize:16
                                        },
                                        color:'#64b9e9',
                                        show:true, //自动显示数据 ，无需鼠标滑动才显示数据
                                    }
                                }
                            }
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },

            //动态圆柱
            liquidFill:function(){
                let config2 = null;
                let gauge1 = null;
                let config3 = null;
                let gauge3 = null;
                config2 = this.liquidFillGaugeDefaultSettings();
                config2.textColor = "#64B9E9";
                config2.circleThickness = 0.1;
                config2.circleFillGap = 0.1;
                config2.textVertPosition = 0.5;
                config2.waveAnimateTime = 2000;
                config2.waveHeight = 0.1;
                config2.waveCount = 1;
                gauge1 = this.loadLiquidFillGauge("fillgauge1", 90.5, config2);
            },
            liquidFillGaugeDefaultSettings:function(){
                return {
                    minValue: 0, // The gauge minimum value.
                    maxValue: 100, // The gauge maximum value.
                    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
                    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
                    circleColor: "#178BCA", // The color of the outer circle.
                    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
                    waveCount: 1, // The number of full waves per width of the wave circle.
                    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
                    waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
                    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
                    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
                    waveAnimate: true, // Controls if the wave scrolls or is static.
                    waveColor: "#178BCA", // The color of the fill wave.
                    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
                    textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
                    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
                    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
                    displayPercent: true, // If true, a % symbol is displayed after the value.
                    textColor: "#045681", // The color of the value text when the wave does not overlap it.
                    waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
                };
            },
            loadLiquidFillGauge: function (elementId, value, config) {
        if(config == null) config =this.liquidFillGaugeDefaultSettings();

        var gauge = d3.select("#" + elementId);
        var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height")))/2;
        var locationX = parseInt(gauge.style("width"))/2 - radius;
        var locationY = parseInt(gauge.style("height"))/2 - radius;
        var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

        var waveHeightScale;
        if(config.waveHeightScaling){
            waveHeightScale = d3.scale.linear()
                .range([0,config.waveHeight,0])
                .domain([0,50,100]);
        } else {
            waveHeightScale = d3.scale.linear()
                .range([config.waveHeight,config.waveHeight])
                .domain([0,100]);
        }

        var textPixels = (config.textSize*radius/2);
        var textFinalValue = parseFloat(value).toFixed(2);
        var textStartValue = config.valueCountUp?config.minValue:textFinalValue;
        var percentText = config.displayPercent?"%":"";
        var circleThickness = config.circleThickness * radius;
        var circleFillGap = config.circleFillGap * radius;
        var fillCircleMargin = circleThickness + circleFillGap;
        var fillCircleRadius = radius - fillCircleMargin;
        var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);

        var waveLength = fillCircleRadius*2/config.waveCount;
        var waveClipCount = 1+config.waveCount;
        var waveClipWidth = waveLength*waveClipCount;

        // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
        var textRounder = function(value){ return Math.round(value); };
        if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
            textRounder = function(value){ return parseFloat(value).toFixed(1); };
        }
        if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
            textRounder = function(value){ return parseFloat(value).toFixed(2); };
        }

        // Data for building the clip wave area.
        var data = [];
        for(var i = 0; i <= 40*waveClipCount; i++){
            data.push({x: i/(40*waveClipCount), y: (i/(40))});
        }

        // Scales for drawing the outer circle.
        var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
        var gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

        // Scales for controlling the size of the clipping path.
        var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
        var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

        // Scales for controlling the position of the clipping path.
        var waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
            .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
            .domain([0,1]);
        var waveAnimateScale = d3.scale.linear()
            .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
            .domain([0,1]);

        // Scale for controlling the position of the text within the gauge.
        var textRiseScaleY = d3.scale.linear()
            .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
            .domain([0,1]);

        // Center the gauge within the parent SVG.
        var gaugeGroup = gauge.append("g")
            .attr('transform','translate('+locationX+','+locationY+')');

        // Draw the outer circle.
        var gaugeCircleArc = d3.svg.arc()
            .startAngle(gaugeCircleX(0))
            .endAngle(gaugeCircleX(1))
            .outerRadius(gaugeCircleY(radius))
            .innerRadius(gaugeCircleY(radius-circleThickness));
        gaugeGroup.append("path")
            .attr("d", gaugeCircleArc)
            .style("fill", config.circleColor)
            .attr('transform','translate('+radius+','+radius+')');

        // Text where the wave does not overlap.
        var text1 = gaugeGroup.append("text")
            .text("纯苯"+textRounder(textStartValue) + percentText)
            .attr("class", "liquidFillGaugeText")
            .attr("text-anchor", "middle")
            .attr("font-size", textPixels + "px")
            .style("fill", config.textColor)
            .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

        // The clipping wave area.
        var clipArea = d3.svg.area()
            .x(function(d) { return waveScaleX(d.x); } )
            .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
            .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
        var waveGroup = gaugeGroup.append("defs")
            .append("clipPath")
            .attr("id", "clipWave" + elementId);
        var wave = waveGroup.append("path")
            .datum(data)
            .attr("d", clipArea)
            .attr("T", 0);

        // The inner circle with the clipping wave attached.
        var fillCircleGroup = gaugeGroup.append("g")
            .attr("clip-path", "url(#clipWave" + elementId + ")");
        fillCircleGroup.append("circle")
            .attr("cx", radius)
            .attr("cy", radius)
            .attr("r", fillCircleRadius)
            .style("fill", config.waveColor);

        // Text where the wave does overlap.
        var text2 = fillCircleGroup.append("text")
            .text(textRounder(textStartValue) + percentText)
            .attr("class", "liquidFillGaugeText")
            .attr("text-anchor", "middle")
            .attr("font-size", textPixels + "px")
            .style("fill", config.waveTextColor)
            .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

        // Make the value count up.
        if(config.valueCountUp){
            var textTween = function(){
                var i = d3.interpolate(this.textContent, textFinalValue);
                return function(t) { this.textContent = textRounder(i(t)) + percentText; }
            };
            text1.transition()
                .duration(config.waveRiseTime)
                .tween("text", textTween);
            text2.transition()
                .duration(config.waveRiseTime)
                .tween("text", textTween);
        }

        // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
        var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
        if(config.waveRise){
            waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
                .transition()
                .duration(config.waveRiseTime)
                .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
                .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
        } else {
            waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
        }

        if(config.waveAnimate) animateWave();

        function animateWave() {
            wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
            wave.transition()
                .duration(config.waveAnimateTime * (1-wave.attr('T')))
                .ease('linear')
                .attr('transform','translate('+waveAnimateScale(1)+',0)')
                .attr('T', 1)
                .each('end', function(){
                    wave.attr('T', 0);
                    animateWave(config.waveAnimateTime);
                });
        }

        function GaugeUpdater(){
            this.update = function(value){
                var newFinalValue = parseFloat(value).toFixed(2);
                var textRounderUpdater = function(value){ return Math.round(value); };
                if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                    textRounderUpdater = function(value){ return parseFloat(value).toFixed(1); };
                }
                if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                    textRounderUpdater = function(value){ return parseFloat(value).toFixed(2); };
                }

                var textTween = function(){
                    var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
                    return function(t) { this.textContent = textRounderUpdater(i(t)) + percentText; }
                };

                text1.transition()
                    .duration(config.waveRiseTime)
                    .tween("text", textTween);
                text2.transition()
                    .duration(config.waveRiseTime)
                    .tween("text", textTween);

                var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;
                var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
                var waveRiseScale = d3.scale.linear()
                // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
                // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
                // circle at 100%.
                    .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
                    .domain([0,1]);
                var newHeight = waveRiseScale(fillPercent);
                var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
                var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);
                var newClipArea;
                if(config.waveHeightScaling){
                    newClipArea = d3.svg.area()
                        .x(function(d) { return waveScaleX(d.x); } )
                        .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
                        .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
                } else {
                    newClipArea = clipArea;
                }

                var newWavePosition = config.waveAnimate?waveAnimateScale(1):0;
                wave.transition()
                    .duration(0)
                    .transition()
                    .duration(config.waveAnimate?(config.waveAnimateTime * (1-wave.attr('T'))):(config.waveRiseTime))
                    .ease('linear')
                    .attr('d', newClipArea)
                    .attr('transform','translate('+newWavePosition+',0)')
                    .attr('T','1')
                    .each("end", function(){
                        if(config.waveAnimate){
                            wave.attr('transform','translate('+waveAnimateScale(0)+',0)');
                            animateWave(config.waveAnimateTime);
                        }
                    });
                waveGroup.transition()
                    .duration(config.waveRiseTime)
                    .attr('transform','translate('+waveGroupXPosition+','+newHeight+')')
            }
        }

        return new GaugeUpdater();
    },
            //第一张表格滚动
            table1Scroll:function () {
                var parentCP = document.getElementById('parentCP');
                var childCP = document.getElementById('childCP');
                var childCP1 = document.getElementById('childCP1');
                childCP1.innerHTML = childCP.innerHTML;
                setInterval(function () {
                    if (parentCP.scrollTop >= childCP.scrollHeight) {
                        parentCP.scrollTop = 0;
                    } else {
                        parentCP.scrollTop++;
                    }
                }, 100);
            },
            //圆形自适应屏幕
            circleChange:function () {
            var width= document.getElementById('fh1_b2_a').offsetWidth;
            //console.log(width);
                var height= document.getElementById('fh1_b2_a').offsetHeight;
                //console.log(height);
                if(width>height){
                    document.getElementById('fh1_b2_a').style.width=height*0.7+'px';
                    document.getElementById('fh1_b2_a').style.height=height*0.7+'px';
                }else {
                    document.getElementById('fh1_b2_a').style.height=width*0.7+'px';
                    document.getElementById('fh1_b2_a').style.width=width*0.7+'px';
                }
            }
            }

    }
</script>


<style scoped>
.allbox{
    /*position: relative;*/
    width:100%;
    height: 100%;
    /*background: url(../assets/BJ.png) no-repeat;*/
    /*background-size:100% 100%;;*/
    /*overflow: hidden;*/
    /*margin: 0 auto;*/
}
.content{
    width:100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.a {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.fuhe{
    /*float: left;*/
    background: url("../assets/BK.png") no-repeat;
    background-size:100% 100%;
    width: 50%;
    height: 100%;
    flex: auto;
    display: flex;
    /*padding: 10px;*/
    /*flex-direction: column;*/
}
.fh1{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;

}
.fh1_a{
    width: 100%;
    height: 50%;
}
.fh1_b{
width: 100%;
    height: 50%;
    display: flex;
    align-content:center;
}
.fh1_b1{
    margin-left: 20px;
    margin-top: -20px;
    width: 70%;
    height: 100%;
}
.fh1_b2{
    width:30%;
    padding-top: 25px;
    height: 100%;
    /*padding-bottom: 20px;*/

}
/* 负荷表格样式 */
.fh2{
    width: 35%;
    height: 100%;


}
/*圆 样式*/
.fh1_b2_a{
    width:100%;
    height:100%;
    background-color: red;
    border-radius:50% ;
    margin: 0 auto;

}
    .nenghao{
        /*float: right;*/
        background: url("../assets/BK.png") no-repeat;
        background-size:100% 100%;
        width: 50%;
        height: 100%;
        flex: auto;

    }
    .NH_1{
        display: flex;
        width: 100%;
        height: 50%;
        background-color: red;
    }
    .NH_2{
        display: flex;
        width: 100%;
        height: 50%;
        background-color: blue;
    }
.NH_1_a{
    width: 50%;
    height: 100%;
    background-color: yellow;
}
.NH_1_b{
    width: 50%;
    height: 100%;
    background-color: darkslategray;
}
.NH_2_a{
    width: 50%;
    height: 100%;
    background-color: aliceblue;
}
.NH_2_b{
    width: 50%;
    height: 100%;
    background-color: fuchsia;
}
    .zhibiao{
        /*float: left;*/
        background: url("../assets/BK.png") no-repeat;
        background-size:100% 100%;
        width: 50%;
        height: 100%;
        flex: auto;

    }
    .ZB_1{
        display: flex;
        width: 100%;
        height: 50%;
        background-color: red;
    }
    .ZB_1_a{
        width: 33.33%;
        height: 100%;
        background-color: aliceblue;
    }
.ZB_1_b{
    width: 33.33%;
    height: 100%;
    background-color:sienna;
}
.ZB_1_c{
    width: 33.33%;
    height: 100%;
    background-color:green;
}
.ZB_2{
    display: flex;
    width: 100%;
    height: 50%;
    background-color: blueviolet;
}
.ZB_2_a{
    width: 33.33%;
    height: 100%;
    background-color:darkslategray;
}
.ZB_2_b{
    width: 33.33%;
    height: 100%;
    background-color:rosybrown;
}
    .ZB_2_c{
        width: 33.33%;
        height: 100%;
        background-color:tomato;
    }
    .touyonglv{
        /*float: right;*/
        background: url("../assets/BK.png") no-repeat;
        /*background-size: cover;*/
        background-size:100% 100%;
        width: 50%;
        height: 100%;
        flex: auto;

    }
.TYL_1{
    display: flex;
    width: 100%;
    height: 50%;
    background-color: red;
}
.TYL_1_a{
    width: 25%;
    height: 100%;
    background-color: aliceblue;
}
.TYL_1_b{
    width: 20%;
    height: 100%;
    background-color:sienna;
}
.TYL_1_c{
    width: 30%;
    height: 100%;
    background-color:green;
}
.TYL_1_d{
    width: 25%;
    height: 100%;
    background-color:green;
}
.TYL_2{
    display: flex;
    width: 100%;
    height: 50%;
    background-color: blueviolet;
}
.TYL_2_a{
    width: 33.33%;
    height: 100%;
    background-color:darkslategray;
}
.TYL_2_b{
    width: 33.33%;
    height: 100%;
    background-color:rosybrown;
}
.TYL_2_c{
    width: 33.33%;
    height: 100%;
    background-color:tomato;
}
table,tr,td{
    /*border:1px solid #888;*/
    /*border-collapse: collapse;*/
    border: 0px solid #888;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
    border-collapse: collapse;
    font-size: 16px;
}
.jishu {
    background-color: rgba(0%, 0%, 0%, 0);
}

.oushu {
    background-color: rgba(21, 214, 198, 0.12);
}
</style>
