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
                    <!--表格-->
                    <div class="fh2" style="margin-top: 20px;">
                        <div style="width: 100%;height: 6%;background-color: #105090;">
                            <table id="CP" style="border:1px solid #888;width: 100%">
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
                                <tr>
                                    <td style="width: 30%;color:white">蒸发塔</td>
                                    <td style="width: 40%;color:white">塔顶出料</td>
                                    <td style="width: 30%;color:white">100</td>
                                </tr>
                                <tr>
                                    <td style="color:white;">蒸发塔</td>
                                    <td style="color:white;">塔釜进料</td>
                                    <td style="color:white;">500</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">残油塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">111</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">残油塔</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">500</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">预反应器</td>
                                    <td style="color:white;">塔釜进料</td>
                                    <td style="color:white;">200</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">预反应器</td>
                                    <td style="color:white;">塔顶出料</td>
                                    <td style="color:white;">500</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">主反应器</td>
                                    <td style="color:white;">塔顶进料</td>
                                    <td style="color:white;">700</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">主反应器</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">200</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">稳定塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">300</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">稳定塔</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">400</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">预蒸馏塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">100</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">预蒸馏塔</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">350</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">二甲苯塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">111</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">二甲苯塔</td>
                                    <td style="color:white;">侧线出料</td>
                                    <td style="color:white;">300</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">二甲苯塔</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">100</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">二甲苯塔</td>
                                    <td style="color:white;">塔顶出料</td>
                                    <td style="color:white;">50</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">萃取塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">300</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">萃取塔</td>
                                    <td style="color:white;">塔顶出料</td>
                                    <td style="color:white;">111</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">萃取塔</td>
                                    <td style="color:white;">塔釜出料</td>
                                    <td style="color:white;">200</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">解析塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">400</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">解析塔</td>
                                    <td style="color:white;">塔顶出料</td>
                                    <td style="color:white;">600</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">苯塔</td>
                                    <td style="color:white;">侧线进料</td>
                                    <td style="color:white;">111</td>

                                </tr>
                                <tr>
                                    <td style="color:white;">苯塔</td>
                                    <td style="color:white;">塔顶出料</td>
                                    <td style="color:white;">6000</td>

                                </tr>
                                <tr>
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
                        <div class="NH_2_a"></div>
                        <div class="NH_2_b"></div>
                    </div>
                </div>
        </div>
        <div class="content"style="margin-top: 0px">
            <div id="zhibiao" class="zhibiao">
                <div class="ZB_1">
                    <div class="ZB_1_a"></div>
                    <div class="ZB_1_b"></div>
                    <div class="ZB_1_c"></div>
                </div>
                <div class="ZB_2">
                    <div class="ZB_2_a"></div>
                    <div class="ZB_2_b"></div>
                    <div class="ZB_2_c"></div>

                </div>
            </div>
            <div id="touyonglv" class="touyonglv">
                <div class="TYL_1">
                    <div class="TYL_1_a"></div>
                    <div class="TYL_1_b"></div>
                    <div class="TYL_1_c"></div>
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
    import * as go from "gojs";
    import {EleResize} from '../assets/js/esresize.js'
    import {LiquidFillGauge} from'../assets/js/liquidFillGauge'

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
            this.table1Scroll();
            this.circleChange();
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
            Echarts3:function () {
                //BT芳香烃
                var dom = document.getElementById("u95");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    title: {},
//
// legend: {
//  // show:false,
//   y: '190px',
//   data: ['虚拟值', '测量值', '指标'],
//   textStyle: {
//     color: '#cccccc'
//   }
// },
                    color: ['#333eaf', '#55F93F'],
                    radar: [
                        {
                            nameGap: 3,
                            indicator: [
                                {text: 'C4~C7非芳'},
                                {text: 'C8非芳'},
                                {text: '苯'},
                                {text: '甲苯'},
                                {text: 'NFM'}
                            ],
                            center: ['53%', '55%'],
                            radius: 70,
                            startAngle: 90,
                            splitNumber: 4,
                            shape: 'circle',
                            name: {
//formatter: '【{value}】',
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
                                    color: 'rgba(255, 255, 255, 0.5)',
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
// color: 各异,
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
                                    value: [165, 328, 87, 13, 0.03],
                                    name: '测量值',
// areaStyle: {
//
//         normal: {
//             opacity: 0.1
//         }
//
//     // normal: {
//     //  //   color: 'rgba(35,44,153,0.1)'
//     //
//     // }
// }
                                },
                                {
                                    value: [175, 330, 89, 12, 0.03],
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
            Echarts4:function () {
                //循环气体
                var dom = document.getElementById("u96");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    title: {},
// legend: {
//   y: '25px',
//   data: ['虚拟值', '测量值', '指标'],
//   textStyle: {
//     color: '#cccccc'
//   }
// },
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
// formatter: '【{value}】',
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
// color: 各异,
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
            Echarts5:function () {
                //非芳烃
                var dom = document.getElementById("u97");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        },
//splitNumber: 20
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
                            data: data[1]
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
            //纯苯
            Echarts6:function () {
                //纯苯
                var dom = document.getElementById("fh1_b2");
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
                        },
//splitNumber: 20
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
                            data: data[1]
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
            Echarts7:function () {
                var dom = document.getElementById("u36");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
// data: [''],
                        itemGap: 20,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                        selectedMode: 'single'
                    },
// visualMap: {
//     show: true,
//     min: 0,
//     max: 20,
//     dimension: 6,
//     inRange: {
//         colorLightness: [0.5, 0.8]
//     }
// },
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
                                    'rgba(238, 197, 102, 0.3)', 'rgba(196,93,209,0.3)',
                                    'rgba(238, 197, 102, 0.3)', 'rgba(238, 197, 102, 0.7)',
                                    'rgba(238, 197, 102, 0.3)', 'rgba(238, 197, 102, 0.3)'
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
                                    color: '#F9713C'
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
            Echarts8:function () {
                ///能耗历史趋势
                var dom = document.getElementById("u81");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    backgroundColor: 'rgba(0,0,0,0)',
                    title: {
// text: '负荷',
                        textStyle: {//标题颜色
                            color: '#cccccc'
                        },
                    },
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
                        top: '25%',
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
                        name: '',
                        minInterval: 10,
//nameGap: 5,
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
                        }
                    }]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            Echarts9:function () {
//甲苯
                var dom = document.getElementById("u99");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
// fontSize:12,

                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
//splitNumber: 20
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
                            data: data[1]
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
            Echarts10:function () {
                ////产量历史趋势
                var dom = document.getElementById("fh1_b2");
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
                        right: '4%',
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
                        right: '4%',
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
            Echarts12:function () {
                var dom = document.getElementById("u63");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
            Echarts13:function () {
                var dom = document.getElementById("u67");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
            Echarts14:function () {
                var dom = document.getElementById("u71");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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

////产量历史趋势
                var dom = document.getElementById("u75");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
            Echarts15:function () {
                var dom = document.getElementById("u79");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
            Echarts16:function () {
                ///APC历史趋势
                var dom = document.getElementById("u42");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
            Echarts17:function () {
                var dom = document.getElementById("u43");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
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
                        right: '4%',
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
                            show: false
// lineStyle: {
//   type: 'dotted',
//   color: '#404040'
// }
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
            //第一张表格滚动
            table1Scroll:function () {
                var parent = document.getElementById('parentCP');
                var child = document.getElementById('childCP');
                var childCP1 = document.getElementById('childCP1');
                childCP1.innerHTML = childCP.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= childCP.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
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
                    // debugger;
                    // var a =width-height;
                    // width=width-a;
                    // console.log(width);
                    // document.getElementById('fh1_b2_a').style.width=width;
                    document.getElementById('fh1_b2_a').style.borderRadius=width/2;
                    console.log( document.getElementById('fh1_b2_a').style.width);
                   var cc =document.getElementById('fh1_b2_a').style.borderRadius;
                   console.log(cc);
                }else {
                      var a=height-width;
                      height=height-a;
                    console.log(height);
                    document.getElementById('fh1_b2_a').style.height=height;
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
    width: 80%;
    height: 100%;
}
.fh1_b2{
    width: 50%;
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
    width:70%;
    height:70%;
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
    width: 33.33%;
    height: 100%;
    background-color: aliceblue;
}
.TYL_1_b{
    width: 33.33%;
    height: 100%;
    background-color:sienna;
}
.TYL_1_c{
    width: 33.33%;
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
    border:1px solid #888;
    border-collapse: collapse;
}
</style>
