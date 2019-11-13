/* 智慧看板*/
<template>
    <div class="allbox" id="allbox">
        <img id="imgtitle" class="imgtitle" src="../assets/ZHKB.png" alt="">
        <div class="content">
                <div id="fuhe" class="fuhe">
                    <div class="fh1">
                        <div class="fh1_a"id="fh1_a"></div>
                        <div class="fh1_b" id="fh1_b">

                        <div class="fh1_b1" id="fh1_b1" ></div>
                        <div class="fh1_b1" id="fh1_b1_a" style="display: none;" ></div>
                        <div class="fh1_b1" id="fh1_b1_b" style="display: none;" ></div>
                        <div class="fh1_b1" id="fh1_b1_c" style="display: none;"></div>
                        <div class="fh1_b1" id="fh1_b1_d" style="display: none;"></div>
                        <div class="fh1_b1" id="fh1_b1_e" style="display: none;"></div>
                        <div class="fh1_b1" id="fh1_b1_f" style="display: none;"></div>

                        <!--圆-->
                        <div class="fh1_b2"id="fh1_b2">
                            <div class="fh1_b2_a" id="fh1_b2_a">
                                <div class="fh1_b2_a_1">
                                    <p id="titleText1" style="color: #ffff;font-size: 20px;font-family: 'Microsoft YaHei';text-align: center">纯苯</p>
                                    <p id="titleText2" style="color: #64B9E9;font-size: 30px;font-family: 'Microsoft YaHei'">50t/h</p>

                                </div>

                            </div>

                        </div>
                    </div>
                    </div>
                    <!--表格1-->
                    <div class="fh2" style="margin-top: 20px;padding-right: 10px;text-align: center">
                        <div style="width: 100%;height: 9%;background-color: #105090;">
                            <table id="CP"  class="tableTitle" style="border:0px solid #888;width: 100%;text-align: center">
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
                                    <tr class="jishu" v-model="tableData0">
                                        <td style="color:white;">蒸发塔</td>
                                        <td style="color:white;">进料</td>
                                        <td style="color:white;">{{tableData0}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData1">
                                        <td style="width: 30%;color:white">蒸发塔</td>
                                        <td style="width: 40%;color:white">塔釜出料</td>
                                        <td style="width: 30%;color:white">{{tableData1}}</td>
                                    </tr>

                                    <tr class="jishu" v-model="tableData2">
                                        <td style="color:white;">残油塔</td>
                                        <td style="color:white;">进料</td>
                                        <td style="color:white;">{{tableData2}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData3">
                                        <td style="color:white;">残油塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData3}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData4">
                                        <td style="color:white;">稳定塔</td>
                                        <td style="color:white;">进料</td>
                                        <td style="color:white;">{{tableData4}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData5">
                                        <td style="color:white;">稳定塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData5}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData6">
                                        <td style="color:white;">预蒸馏塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">{{tableData6}}</td>

                                    </tr>

                                    <tr class="oushu" v-model="tableData7">
                                        <td style="color:white;">预蒸馏塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">{{tableData7}}</td>

                                    </tr>
                                    <tr class="jishu"v-model="tableData8">
                                        <td style="color:white;">预蒸馏塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData8}}</td>

                                    </tr>

                                    <tr class="oushu" v-model="tableData9">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">{{tableData9}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData10">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">{{tableData10}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData11">
                                        <td style="color:white;">萃取塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData11}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData12">
                                        <td style="color:white;">解析塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">{{tableData12}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData13">
                                        <td style="color:white;">解析塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">{{tableData13}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData14">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">{{tableData14}}</td>

                                    </tr>

                                    <tr class="oushu" v-model="tableData15">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">{{tableData15}}</td>

                                    </tr>

                                    <tr class="jishu" v-model="tableData16">
                                        <td style="color:white;">苯塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData16}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData17">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">塔顶出料</td>
                                        <td style="color:white;">{{tableData17}}</td>

                                    </tr>

                                    <tr class="jishu" v-model="tableData18">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">侧线进料</td>
                                        <td style="color:white;">{{tableData18}}</td>

                                    </tr>
                                    <tr class="oushu" v-model="tableData19">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">侧线出料</td>
                                        <td style="color:white;">{{tableData19}}</td>

                                    </tr>
                                    <tr class="jishu" v-model="tableData20">
                                        <td style="color:white;">二甲苯塔</td>
                                        <td style="color:white;">塔釜出料</td>
                                        <td style="color:white;">{{tableData20}}</td>
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
                        <div class="NH_1_c" id="NH_1_c">
                            <table class="TableStyle1">
                                <caption align="top" style="color: #64B9E9;">实时单耗</caption>
                                <tr >
                                    <td>S40</td>
                                    <td v-model="consumptionUnitProValue0">{{consumptionUnitProValue0}}</td>
                                    <td>H₂</td>
                                    <td v-model="consumptionUnitProValue1">{{consumptionUnitProValue1}}</td>
                                </tr>
                                <tr>
                                    <td>S16</td>
                                    <td v-model="consumptionUnitProValue2">{{consumptionUnitProValue2}}</td>
                                    <td>N₂</td>
                                    <td v-model="consumptionUnitProValue3">{{consumptionUnitProValue3}}</td>
                                </tr>
                                <tr>
                                    <td>S3</td>
                                    <td v-model="consumptionUnitProValue4">{{consumptionUnitProValue4}}</td>
                                    <td>COG</td>
                                    <td v-model="consumptionUnitProValue5">{{consumptionUnitProValue5}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="NH_2" id="NH_2">
                        <div class="NH_2_a" id="NH_2_a"></div>
                        <div class="NH_2_a" id="NH_2_a1" style="display: none;"></div>
                        <div class="NH_2_a" id="NH_2_a2" style="display: none;"></div>
                        <div class="NH_2_a" id="NH_2_a3" style="display: none;"></div>
                        <div class="NH_2_a" id="NH_2_a4" style="display: none;"></div>
                        <div class="NH_2_a" id="NH_2_a5" style="display: none;"></div>
                        <!--表格2-->
                        <div class="NH_2_b" id="NH_2_b">
                            <div style="width: 100%;height:17%;background: rgba(251,251,251,0);text-align: center">
                                <table id="H" class="TableStyle"
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
                                 style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%;">
                                <div id="childH" class="child" style="width: 100%">
                                    <table style="width: 100%">
                                        <tr class="jishu" v-model="dataToWebConsumptionTableList0">
                                            <td style="width: 25%;color:white">稳定塔</td>
                                            <td style="width: 25%;color:white">S16</td>
                                            <td style="width: 25%;color:white">kg/h</td>
                                            <td style="width: 25%;color:white">{{dataToWebConsumptionTableList0}}</td>
                                        </tr>
                                        <tr class="oushu" v-model="dataToWebConsumptionTableList1">
                                            <td style="color: white">残油塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList1}}</td>
                                        </tr>
                                        <tr class="jishu" v-model="dataToWebConsumptionTableList2">
                                            <td style="color: white">预蒸馏塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList2}}</td>
                                        </tr>
                                        <tr class="oushu" v-model="dataToWebConsumptionTableList3">
                                            <td style="color: white">萃取塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList3}}</td>
                                        </tr>
                                        <tr class="jishu" v-model="dataToWebConsumptionTableList4">
                                            <td style="color: white">萃取塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList4}}</td>
                                        </tr>
                                        <tr class="oushu" v-model="dataToWebConsumptionTableList5">
                                            <td style="color: white">解析塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList5}}</td>
                                        </tr>
                                        <tr class="jishu" v-model="dataToWebConsumptionTableList6">
                                            <td style="color: white">二甲苯塔</td>
                                            <td style="color: white">S40</td>
                                            <td style="color: white">kg/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList6}}</td>
                                        </tr>
                                        <tr class="oushu" v-model="dataToWebConsumptionTableList7">
                                            <td style="color: white">加热炉</td>
                                            <td style="color: white">COG</td>
                                            <td style="color: white">Nm³/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList7}}</td>
                                        </tr>

                                        <tr class="jishu" v-model="dataToWebConsumptionTableList8">
                                            <td style="color: white">补充氢</td>
                                            <td style="color: white">H₂</td>
                                            <td style="color: white">Nm³/h</td>
                                            <td style="color: white">{{dataToWebConsumptionTableList8}}</td>
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
                <div class="ZB_1" id="ZB_1">

                    <div class="ZB_1_N" >粗<br/>苯<br/>数<br/>据</div>
                    <div class="ZB_1_a ">
                        <!--表格3-->
                                    <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                                        <table id="CBData"
                                               style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                            <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                            <tr>
                                                <td style="width: 33%;color:#64B9E9;">组分</td>
                                                <td style="width: 20%;color:#64B9E9">单位</td>
                                                <td style="width: 25%;color:#64B9E9">测量值</td>
                                                <td style="width: 22%;color:#64B9E9">指标</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="parent" class="parentCB"
                                         style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                                        <div id="child" class="child" style="width: 100%">
                                            <table style="text-align: center;width: 100%">
                                                <tr class="jishu" v-model="analyserCOLOValue0">
                                                    <td style="width: 33%;color:white">C4-7非芳</td>
                                                    <td style="width: 20%;color:white">wt%</td>
                                                    <td style="width: 25%;color:white">{{analyserCOLOValue0}}</td>
                                                    <td style="width: 22%;color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue1">
                                                    <td style="color:white">C8非芳</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue1}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue2">
                                                    <td style="color:white">苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue2}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue3">
                                                    <td style="color:white">甲苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue3}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue4">
                                                    <td style="color:white">乙基苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue4}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue5">
                                                    <td style="color:white">二甲苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue5}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue6">
                                                    <td style="color:white">苯乙烯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue6}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue7">
                                                    <td style="color:white">三甲苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue7}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue8">
                                                    <td style="color:white">古马隆</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue8}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue9">
                                                    <td style="color:white">茚</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue9}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue10">
                                                    <td style="color:white">萘</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue10}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="oushu" v-model="analyserCOLOValue11">
                                                    <td style="color:white">甲基萘</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue11}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                                <tr class="jishu" v-model="analyserCOLOValue12">
                                                    <td style="color:white">联苯</td>
                                                    <td style="color:white">wt%</td>
                                                    <td style="color:white">{{analyserCOLOValue12}}</td>
                                                    <td style="color:white">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div id="child1" class="child" style="text-align: center"></div>
                                    </div>
                    </div>

                    <div class="ZB_1_N" style="display: none;">B/T<br/>芳<br/>香<br/>烃<br/>数<br/>据</div>
                    <div style="display: none;" class="ZB_1_a">
                        <!--表格3-->
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="CBDataA"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 33%;color:#64B9E9;">组分</td>
                                    <td style="width: 20%;color:#64B9E9">单位</td>
                                    <td style="width: 25%;color:#64B9E9">测量值</td>
                                    <td style="width: 22%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentA" class="parentCB"
                             style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childA" class="child" style="width: 100%">
                                <table style="text-align: center;width: 100%">
                                    <tr class="jishu" v-model="analyserBTAROValue0">
                                        <td style="width: 33%;color:white">C4-7非芳</td>
                                        <td style="width: 20%;color:white">ppmw</td>
                                        <td style="width: 25%;color:white">{{analyserBTAROValue0}}</td>
                                        <td style="width: 22%;color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserBTAROValue1">
                                        <td style="color:white">C8非芳</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserBTAROValue1}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserBTAROValue2">
                                        <td style="color:white">苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserBTAROValue2}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserBTAROValue3">
                                        <td style="color:white">甲苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserBTAROValue3}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserBTAROValue4">
                                        <td style="color:white">NFM</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserBTAROValue4}}</td>
                                        <td style="color:white">1</td>
                                    </tr>
                                </table>
                            </div>
                            <div id="childA1" class="child" style="text-align: center"></div>
                        </div>
                    </div>

                    <div class="ZB_1_N" style="display: none;">非<br/>芳<br/>烃<br/>数<br/>据</div>
                    <div style="display: none;" class="ZB_1_a">
                        <!--表格3-->
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="CBDataB"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 33%;color:#64B9E9;">组分</td>
                                    <td style="width: 20%;color:#64B9E9">单位</td>
                                    <td style="width: 25%;color:#64B9E9">测量值</td>
                                    <td style="width: 22%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentB" class="parentCB"
                             style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childB"class="child" style="width: 100%">
                                <table style="text-align: center;width: 100%">
                                    <tr class="jishu" v-model="analyserNONAROValue0">
                                        <td style="width: 33%;color:white">C4-7非芳</td>
                                        <td style="width: 20%;color:white">wt%</td>
                                        <td style="width: 25%;color:white">{{analyserNONAROValue0}}</td>
                                        <td style="width: 22%;color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserNONAROValue1">
                                        <td style="color:white">苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserNONAROValue1}}</td>
                                        <td style="color:white">20</td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserNONAROValue2">
                                        <td style="color:white">甲苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserNONAROValue2}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserNONAROValue3">
                                        <td style="color:white">NFM</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserNONAROValue3}}</td>
                                        <td style="color:white">2</td>
                                    </tr>
                                </table>
                            </div>
                            <div id="childB1" class="child" style="text-align: center"></div>
                        </div>
                    </div>

                    <div class="ZB_1_N" style="display: none;">循<br/>环<br/>气<br/>体<br/>数<br/>据</div>
                    <div style="display: none;" class="ZB_1_ a">
                        <!--表格3-->
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="CBDataC"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 33%;color:#64B9E9;">组分</td>
                                    <td style="width: 20%;color:#64B9E9">单位</td>
                                    <td style="width: 25%;color:#64B9E9">测量值</td>
                                    <td style="width: 22%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentC" class="parentCB"
                             style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childC"class="child" style="width: 100%">
                                <table style="text-align: center;width: 100%">
                                    <tr class="jishu" v-model="analyserRECGASValue0">
                                        <td style="width: 33%;color:white">H₂</td>
                                        <td style="width: 20%;color:white">MOL%</td>
                                        <td style="width: 25%;color:white">{{analyserRECGASValue0}}</td>
                                        <td style="width: 22%;color:white">99</td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserRECGASValue1">
                                        <td style="color:white">O₂</td>
                                        <td style="color:white">MOL%</td>
                                        <td style="color:white">{{analyserRECGASValue1}}</td>
                                        <td style="color:white">10</td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserRECGASValue2">
                                        <td style="color:white">N₂</td>
                                        <td style="color:white">MOL%</td>
                                        <td style="color:white">{{analyserRECGASValue2}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserRECGASValue3">
                                        <td style="color:white">CH₄</td>
                                        <td style="color:white">MOL%</td>
                                        <td style="color:white">{{analyserRECGASValue3}}</td>
                                        <td style="color:white">0.1</td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserRECGASValue4">
                                        <td style="color:white">C₂H₆</td>
                                        <td style="color:white">MOL%</td>
                                        <td style="color:white">{{analyserRECGASValue4}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserRECGASValue5">
                                        <td style="color:white">C₃H₈</td>
                                        <td style="color:white">MOL%</td>
                                        <td style="color:white">{{analyserRECGASValue5}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                </table>
                            </div>
                            <div id="childC1" class="child" style="text-align: center"></div>
                        </div>
                    </div>

                    <div class="ZB_1_N" style="display: none;">纯<br/>苯<br/>数<br/>据</div>
                    <div style="display: none;" class="ZB_1_a">
                        <!--表格3-->
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="CBDataD"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 33%;color:#64B9E9;">组分</td>
                                    <td style="width: 20%;color:#64B9E9">单位</td>
                                    <td style="width: 25%;color:#64B9E9">测量值</td>
                                    <td style="width: 22%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentD" class="parentCB"
                             style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childD"class="child" style="width: 100%">
                                <table style="text-align: center;width: 100%">
                                    <tr class="jishu" v-model="analyserBENValue0">
                                        <td style="width: 33%;color:white">非芳</td>
                                        <td style="width: 20%;color:white">ppmw</td>
                                        <td style="width: 25%;color:white">{{analyserBENValue0}}</td>
                                        <td style="width: 22%;color:white">0.1</td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserBENValue1">
                                        <td style="color:white">甲苯</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserBENValue1}}</td>
                                        <td style="color:white">0.05</td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserBENValue2">
                                        <td style="color:white">苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserBENValue2}}</td>
                                        <td style="color:white">99.9</td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserBENValue3">
                                        <td style="color:white">水</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserBENValue3}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                </table>
                            </div>
                            <div id="childD1" class="child" style="text-align: center"></div>
                        </div>
                    </div>

                    <div class="ZB_1_N" style="display: none;">甲<br/>苯<br/>数<br/>据</div>
                    <div style="display: none;" class="ZB_1_a">
                        <!--表格3-->
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="CBDataE"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35);text-align: center">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 33%;color:#64B9E9;">组分</td>
                                    <td style="width: 20%;color:#64B9E9">单位</td>
                                    <td style="width: 25%;color:#64B9E9">测量值</td>
                                    <td style="width: 22%;color:#64B9E9">指标</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentE" class="parentCB"
                             style="height: 70%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childE"class="child" style="width: 100%">
                                <table style="text-align: center;width: 100%">
                                    <tr class="jishu" v-model="analyserTOLValue0">
                                        <td style="width: 33%;color:white">非芳</td>
                                        <td style="width: 20%;color:white">wt%</td>
                                        <td style="width: 25%;color:white">0.52</td>
                                        <td style="width: 22%;color:white">1</td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserTOLValue1">
                                        <td style="color:white">苯</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserTOLValue1}}</td>
                                        <td style="color:white">0.05</td>
                                    </tr>
                                    <tr class="jishu" v-model="analyserTOLValue2">
                                        <td style="color:white">甲苯</td>
                                        <td style="color:white">wt%</td>
                                        <td style="color:white">{{analyserTOLValue2}}</td>
                                        <td style="color:white">99</td>
                                    </tr>
                                    <tr class="oushu" v-model="analyserTOLValue3">
                                        <td style="color:white">水</td>
                                        <td style="color:white">ppmw</td>
                                        <td style="color:white">{{analyserTOLValue3}}</td>
                                        <td style="color:white"></td>
                                    </tr>
                                </table>
                            </div>
                            <div id="childE1" class="child" style="text-align: center"></div>
                        </div>
                    </div>

                    <div class="ZB_1_b" id="ZB_1_b"></div>
                    <div class="ZB_1_c" id="ZB_1_c"></div>

                </div>
                <div class="ZB_2">
                    <div class="ZB_2_N" >循<br/>环<br/>气<br/>体</div>
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
                    <div class="TYL_1_b" id="TYL_1_b"></div>
                    <div class="TYL_1_c" id="TYL_1_c"></div>
                    <!--<div class="TYL_1_d">-->
                        <!--<img src="../assets/green.png"  alt=""  v-if="kind==1" style="width: 64px;height: 64px;align-items: center;">-->
                        <!--<img src="../assets/red.png" alt="" v-if="kind==0" style="width: 64px;height: 64px;align-items: center;">-->
                    <!--</div>-->
                </div>
                <div class="TYL_2">
                    <div class="TYL_2_a">
                        <svg id="fillgauge2" width="97%" height="150"></svg>
                    </div>
                    <div class="TYL_2_b" id="TYL_2_b"></div>
                    <div class="TYL_2_c" >
                        <div style="width: 100%;height: 17%;background: rgba(251,251,251,0);">
                            <table id="ZZ" class="TableStyle"
                                   style="border:0px solid #888;width: 100%;font-size: 18px;background-color: rgba(12,128,240,0.35)">
                                <!--border-width="1px" bordercolor="#016577" style="width: 100%" cellpadding="0" cellspacing="0" bgcolor="#001F38"-->
                                <tr>
                                    <td style="width: 30%;color:#64B9E9;">区域</td>
                                    <td style="width: 40%;color:#64B9E9">装置</td>
                                    <td style="width: 30%;color:#64B9E9">开停状态</td>
                                </tr>
                            </table>
                        </div>
                        <div id="parentZZ" class="parentCB"
                             style="height: 63%;overflow-y: scroll;overflow: hidden;width: 100%">
                            <div id="childZZ" class="child" style="width: 100%">
                                <table style="width: 100%;">
                                    <tr class="jishu">
                                        <td style="width: 30%;color:white">100单元</td>
                                        <td style="width: 40%;color:white">蒸发塔</td>
                                        <td style="width: 30%;color:white;padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData0>=7230" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">100单元</td>
                                        <td style="color:white">预反应器</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png"  width="30" height="30" >
                                            <!--<img src="../assets/red.png" v-else width="30" height="30" >-->
                                        </td>
                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white">100单元</td>
                                        <td style="color:white">残油塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData2>=120" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">100单元</td>
                                        <td style="color:white">主反应器</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png"  width="30" height="30" >
                                            <!--<img src="../assets/red.png" v-else width="30" height="30" >-->
                                        </td>
                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white">100单元</td>
                                        <td style="color:white">稳定塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData4>=6670" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">200单元</td>
                                        <td style="color:white">预蒸馏塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData7>=4750" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white">300单元</td>
                                        <td style="color:white">萃取塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData10>=5500" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">300单元</td>
                                        <td style="color:white">解析塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData13>=41500" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="jishu">
                                        <td style="color:white">300单元</td>
                                        <td style="color:white">苯塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData15>=7450" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                    <tr class="oushu">
                                        <td style="color:white">400单元</td>
                                        <td style="color:white">二甲苯塔</td>
                                        <td style="color:white; padding-top: 5px;padding-bottom: 0px;">
                                            <img src="../assets/green.png" v-if="tableData18>=150" width="30" height="30" >
                                            <img src="../assets/red.png" v-else width="30" height="30" >
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div id="childZZ1" class="child"></div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>

</template>
<script>
    const $echarts = require('echarts');
    import * as d3 from 'd3'
    require('swiper/dist/css/swiper.css');
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name:'home',
        data(){
            return{
                timer1:null,
                timer2:null,
                timer3:null,
                screenWidth: document.body.clientWidth,     // 屏幕宽
                screeHeight: document.body.clientHeight,
                kind:0,//红绿灯状态
                k:1,///产量部分表循环标识
                f:1,//能耗部分表循环标识
                g:1,//指标部分表格切换标识
                hisProValue0:[230, 245, 238, 224, 236, 248, 271],//历史
                hisProValue1:[230, 245, 238, 224, 236, 248, 271],
                hisProValue2:[230, 245, 238, 224, 236, 248, 271],
                hisProValue3:[230, 245, 238, 224, 236, 248, 271],
                hisProValue4:[230, 245, 238, 224, 236, 248, 271],
                hisProValue5:[230, 245, 238, 224, 236, 248, 271],
                hisProValue6:[230, 245, 238, 224, 236, 248, 271],
                consumptionProValue:[],//实时能耗散点图
                consumptionUnitProValue:[],//实时单耗六芒星
                consumptionUnitProValue0:0,//表格实时单耗
                consumptionUnitProValue1:0,//表格实时单耗
                consumptionUnitProValue2:0,//表格实时单耗
                consumptionUnitProValue3:0,//表格实时单耗
                consumptionUnitProValue4:0,//表格实时单耗
                consumptionUnitProValue5:0,//表格实时单耗
                dataToWebConsumptionTableList:null,//单耗表格部分
                hisConsumptionValue0:[11, 15, 17, 19, 16, 13, 14],//能耗7天历史
                hisConsumptionValue1:[11, 15, 17, 19, 16, 13, 14],
                hisConsumptionValue2:[11, 15, 17, 19, 16, 13, 14],
                hisConsumptionValue3:[11, 15, 17, 19, 16, 13, 14],
                hisConsumptionValue4:[11, 15, 17, 19, 16, 13, 14],
                hisConsumptionValue5:[11, 15, 17, 19, 16, 13, 14],
                consumptionFlag:["S40", "H₂","S16","COG", "N₂","S3"],//介质顺序
                proCTValueList:[9587,9587,9587,9587,9587,9587,9587],//实时
                proCTValueFlagList:["纯苯","甲苯","二甲苯","重苯","C8","C9","非芳"],
                analyserCOLOValue0:100,//粗笨组分测量值
                analyserCOLOValue1:100,
                analyserCOLOValue2:100,
                analyserCOLOValue3:100,
                analyserCOLOValue4:100,
                analyserCOLOValue5:100,
                analyserCOLOValue6:100,
                analyserCOLOValue7:100,
                analyserCOLOValue8:100,
                analyserCOLOValue9:100,
                analyserCOLOValue10:100,
                analyserCOLOValue11:100,
                analyserCOLOValue12:100,

                analyserBTAROValue:[],
                analyserBTAROValue0:200,//芳香烃测量值
                analyserBTAROValue1:200,
                analyserBTAROValue2:200,
                analyserBTAROValue3:200,
                analyserBTAROValue4:200,

                analyserNONAROValue0:300,//非芳烃测量值
                analyserNONAROValue1:300,
                analyserNONAROValue2:300,
                analyserNONAROValue3:300,

                analyserRECGASValue0:300,//循环气测量值
                analyserRECGASValue1:300,
                analyserRECGASValue2:300,
                analyserRECGASValue3:300,
                analyserRECGASValue4:300,
                analyserRECGASValue5:300,

                analyserBENValue0:300,//纯苯测量值
                analyserBENValue1:300,
                analyserBENValue2:300,
                analyserBENValue3:300,

                analyserTOLValue0:200,//甲苯测量值
                analyserTOLValue1:200,
                analyserTOLValue2:200,
                analyserTOLValue3:200,

                PIDRatio:100,   //自控投用率
                APCRatio:100, //APC投用率
                PIDUseNum:96,//PID投用个数
                PIDLoopNum:96,//PID总数
                APCUseNum:20,//APC投用个数
                APCLoopNum:20,//APC投用总数
                hisPIDRatioValue:[88, 95, 90, 93, 89, 92, 90],//历史7天投用率
                show:false,
                tableData0:1600, tableData1:1600, tableData2:1600, tableData3:1600, tableData4:1600, tableData5:1600,
                tableData6:1600, tableData7:1600, tableData8:1600, tableData9:1600, tableData10:1600, tableData11:1600, tableData12:1600,
                tableData13:1600, tableData14:1600, tableData15:1600, tableData16:1600, tableData17:1600, tableData18:1600, tableData19:1600,
                tableData20:1600, tableData21:1600, tableData22:1600, tableData23:1600,

                dataToWebConsumptionTableList0:1464,dataToWebConsumptionTableList1:1464,
                dataToWebConsumptionTableList2:1464,dataToWebConsumptionTableList3:1464,
                dataToWebConsumptionTableList4:1464,dataToWebConsumptionTableList5:1464,
                dataToWebConsumptionTableList6:1464,dataToWebConsumptionTableList7:1464,
                dataToWebConsumptionTableList8:1464,
                dateTime:['10/30','10/31','11/01','11/02','11/03','11/04','11/05'],








            }
        },
        mounted(){
            var that=this;
         document.getElementById("allbox").setAttribute('width',this.screenWidth);
         document.getElementById("imgtitle").setAttribute('width',this.screenWidth-200);
         // document.getElementById("allbox").setAttribute('height',this.screeHeight-100);
            document.getElementById("fuhe").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("nenghao").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("zhibiao").setAttribute('width',(this.screenWidth-200)/2);
            document.getElementById("touyonglv").setAttribute('width',(this.screenWidth-200)/2);
            // var fh1_b="fh1_b";
            // var div="div";
            var fh1_b1="fh1_b1";

            var loadCT=10.111.toFixed(1);
            var loadMonth=10.111.toFixed(1);
            var loadYear=10.11.toFixed(1);
            // var fh1_b1_d="fh1_b1_d";
             var NH_2_a="NH_2_a";
             var NH_2="NH_2";

            this.FirstData();
           this. Echarts1(loadCT,loadMonth,loadYear);
           this.Echarts2(this.consumptionProValue);
           this.Echarts18(this.consumptionUnitProValue);

           this.Echarts4();
           this.Echarts5();
           this.Echarts6();
            this.Echarts7();
            this.Echarts8();
            this.table1Scroll();
            this.tableScroll2();
            this.tableScroll3();
             this.tableScroll3a();
             this.tableScroll3b();
            this.tableScroll3c();
            this.tableScroll3d();
            this.tableScroll3e();
            this.tableScroll4();
            this.circleChange();
            this.liquidFill();
            this.Echarts12();
            this.Echart20();
            this.liquidFill2();
            this.Echart21();
            this.Echarts11(fh1_b1,'纯苯',this.hisProValue0);
            var hisConsumptionValue=null;
            this.Echarts3(NH_2_a,'S40历史能耗',hisConsumptionValue,'万元');
            //this.TableChange1(NH_2,NH_2_a,3000);
            this.TableChange2("ZB_1","ZB_1_a",50000);
            var fh1_b="fh1_b";//产量父级div
            var fh1_b1="fh1_b1";//产量div class
            var NH_2="NH_2";//能耗父级div
            var NH_2_a="NH_2_a";//能耗div class
             this.TableChange(fh1_b,fh1_b1,5000);
            this.TableChange1(NH_2,NH_2_a,5000);
            // var fh1_b="fh1_b";//产量父级div
            // var fh1_b1="fh1_b1";//产量div class
            // var NH_2="NH_2";//能耗父级div
            // var NH_2_a="NH_2_a";//能耗div class
            // // that.TableChange(fh1_b,fh1_b1,5000);
            // // that.TableChange1(NH_2,NH_2_a,5000);

            // this.Echarts11(fh1_b1_a,"甲苯");
            // this.Echarts11(fh1_b1_b,"二甲苯");
            // this.Echarts11(fh1_b1_c,"重苯");
            // this.Echarts11(fh1_b1_d,"C8");
            // this.Echarts11(fh1_b1_e,"C9");
            // this.Echarts11(fh1_b1_f,"非芳");
             //this.TableChange(fh1_b,fh1_b1,3000);

        },

        methods:{
Echarts1:function (loadCT,loadMonth,loadYear) {
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
                max: 16,
                splitNumber: 8,
                center: ['50%', '60%'],
                radius: '85%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.75, '#1e90ff'], [0.875, 'green'], [1, '#ff4500']],
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
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,

                    },
                    offsetCenter: ['0', '75']
                },
                detail: {
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#1e90ff'
                    }
                },
                data: [{value: loadCT, name: '当前负荷(t/h)'}]
            },
            {
                name: ' ',
                type: 'gauge',
                center: ['24%', '65%'],    // 默认全局居中
                radius: '70%',
                min: 0,
                max: 15,
                endAngle: 45,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#1e90ff'], [0.8, '#1C84EA'], [1, '#1A7AD9']],
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
                    offsetCenter: [0, '65'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height: 30,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#1C84EA'
                    }
                },
                data: [{value: loadMonth, name: '月负荷(kt)'}]
            },
            {
                type: 'gauge',
                center: ['78%', '65%'],    // 默认全局居中
                radius: '70%',
                min: 0,
                max: 20,
                endAngle: -45,
                startAngle: 145,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff7105'], [0.8, '#ED6905'], [1, '#DA6105']],
                        width: 1,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 20
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
                    offsetCenter: [0, '65'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height: 30,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#ED6905'
                    }
                },
                data: [{value: loadYear, name: '年负荷(10kt)'}]
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
Echarts2:function (consumptionProValue) {
    var dom = document.getElementById("NH_1_a");
    var myChart = $echarts.init(dom);
    var app = {};
   var option = null;
    var data =consumptionProValue;
    option = {
        title:{
            text:'实时能耗',
            left:'center',
            y:20,
            textStyle:{color:'#64b9e9'}},
        backgroundColor: 'rgba(0,0,0,0)',
        textStyle: {
            textColor: '#999999'
        },

        xAxis: {
            type: 'category',
            data:this.consumptionFlag,
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
            left: '6%',
            right: '3%',
            bottom: '0%',
            top: '30%',
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
            data: data,
            symbolSize: function (dataItem) {
                return dataItem[1];
            },
            type: 'scatter',
            symbolSize: function (dataItem) {
                if(dataItem[0]=="S40"){
                    return  33;
                }else if(dataItem[0]=="H₂"){
                    return  21;
                }else if(dataItem[0]=="S16"){
                    return  17;
                }else if(dataItem[0]=="COG"){
                    return  10;
                }else if(dataItem[0]=="N₂"){
                    return  8;
                }else if(dataItem[0]=="S3"){
                    return  6;
                }
            },
            // symbolSize: function (dataItem) {
            //     return dataItem[1] * 0.01;
            // },
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
            itemStyle: {
                normal: {
                    label: {
                        color:'#64b9e9',
                        textStyle:{
                            fontSize:16
                        },
                        position:'top',
                        show: true, //自动显示数据 ，无需鼠标滑动才显示数据
                        formatter:function (value) {

                            return parseFloat(value.data[1]).toFixed(0);
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
            ///历史能耗折线图
            Echarts3:function (id,title,hisConsumptionValue,unit) {
                var dom = document.getElementById(id);
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                option = {
                    title:{
                        text:title,
                        left:'center',
                        y:10,
                        textStyle:{color:'#64b9e9'}},
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
                        left: '6%',
                        right: '4%',
                        bottom: '10%',
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
                        data: this.dateTime,//['12/9', '13/9', '14/9', '15/9', '16/9', '17/9', '18/9'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        }
                    },
                    yAxis: {
                        name:unit,
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
                        data: hisConsumptionValue,
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
                                    // formatter:function(value){
                                    //
                                    //     return parseFloat(value.value.toFixed(0));
                                    // },
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
                        ['C4-7非芳',''],
                        ['C8 非芳','' ],
                        ['苯', ''],
                        ['甲苯','' ],
                        ['NFM', 1]
                    ],
                        [
                        ['C4-7非芳',this.analyserBTAROValue0],
                            ['C8 非芳', this.analyserBTAROValue1],
                            ['苯', this.analyserBTAROValue2],
                            ['甲苯', this.analyserBTAROValue3],
                                ['NFM', this.analyserBTAROValue4]
                        ]
                ];
              var option = {
                  title: {
                      text:'B/T芳香烃',
                      left:'center',
                      y:'25',
                      textStyle:{
                          color:'#64b9e9',
                          fontSize:16,
                          fontFamily:'Microsoft YaHei'
                      }
                  },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        top:'40%',
                        left: '2%',
                        right: '2%',
                        bottom: '0',
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
                            // rotate:25,
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
                    color: ['#FFF71F', '#55F93F'],
                    // grid: {
                    //     left: '20%'
                    // },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#3db1a6',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                        min: 0,
                        minInterval: 50,
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
                                    color: '#3db1a6',
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
                                        color: '#3db1a6',
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
                        }
                        // ,
                        // {
                        //     name: '指标',
                        //     type: 'line',
                        //     showSymbol: false,
                        //     smooth: true,
                        //     data: data[0],
                        //     markPoint: {
                        //         itemStyle: {
                        //             normal: {
                        //                 color: 'transparent'
                        //             }
                        //         },
                        //         label: {
                        //             normal: {
                        //                 show: true,
                        //                 position: 'left',
                        //                 textStyle: {
                        //                     color: '#333',
                        //                     fontSize: 14
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        ]
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
                        ['C4-7非芳', ''],
                        ['苯', ''],
                        ['甲苯', 20],
                        ['NFM', 2]
                    ],
                        [
                        ['C4-7非芳', this.analyserNONAROValue0],
                            ['苯', this.analyserNONAROValue1],
                            ['甲苯', this.analyserNONAROValue2],
                            ['NFM', this.analyserNONAROValue3]
                        ]

                ];
                option = {
                    title: {
                        text:'非芳香烃',
                        left:'center',
                        y:'25',
             textStyle:{
                            color:'#64b9e9',
                 fontSize:16,
                 fontFamily:'Microsoft YaHei'
}
                      },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        top:'40%',
                        left: '10%',
                        right: '2%',
                        bottom: '0',
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
                    color: ['#ff881d', '#55f93f'],
                    // grid: {
                    //     left: '15%'
                    // },
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
                                    color: '#3db1a6',
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
                                        color: '#3db1a6',
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
                        }
                        // {
                        //     name: '指标',
                        //     type: 'line',
                        //     showSymbol: false,
                        //     smooth: true,
                        //     data: data[0],
                        //     markPoint: {
                        //         itemStyle: {
                        //             normal: {
                        //                 color: 'transparent'
                        //             }
                        //         },
                        //         label: {
                        //             normal: {
                        //                 show: true,
                        //                 position: 'left',
                        //                 textStyle: {
                        //                     color: '#333',
                        //                     fontSize: 14
                        //                 }
                        //             }
                        //         }
                        //     }
                        ]
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
                    color: ['#55f93f'],
                    radar: [
                        {
                            nameGap: 3,
                            indicator: [
                                {text: 'H₂'},
                                {text: 'O₂'},
                                {text: 'N₂'},
                                {text: 'CH₄'},
                                {text: 'C₂H₆'},
                                {text: 'C₃H₈'}
                            ],
                            center: ['43%', '45%'],
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
                                // {
                                //     value: [99, 5, 0.1, 3.1, 1.1, 1],
                                //     value: [this.analyserRECGASValue0, this.analyserRECGASValue1, this.analyserRECGASValue2, this.analyserRECGASValue3, this.analyserRECGASValue4,this.analyserRECGASValue5],
                                //     name: '指标',
                                //     areaStyle: {
                                //         normal: {
                                //             color: 'rgba(255, 255, 255, 0.5)'
                                //         }
                                //     }
                                // },
                                {
                                    value: [this.analyserRECGASValue0, this.analyserRECGASValue1, this.analyserRECGASValue2, this.analyserRECGASValue3, this.analyserRECGASValue4,this.analyserRECGASValue5],
                                    name: '测量值',
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
                        ['非芳', 0.1],
                        ['甲苯', 0.05],
                        ['苯', 99.9],
                        ['水', '']
                    ],
                        [
                        ['非芳', this.analyserBENValue0],
                            ['甲苯', this.analyserBENValue1],
                            ['苯', this.analyserBENValue2],
                            ['水', this.analyserBENValue3]
                        ]
                ];
                option = {
                    title: {
                        text:'纯苯',
                        left:'center',
                        y:'10',
                        textStyle:{
                            color:'#64b9e9',
                            fontSize:16,
                            fontFamily:'Microsoft YaHei'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        top: '30%',
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
                    color: ['#ff881d', '#55f93f'],
                    // grid: {
                    //     left: '15%'
                    // },
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
                                    color: '#3db1a6',
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
                                        color: '#3db1a6',
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
                        }
                        ]
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
                        ['非芳', 1],
                        ['苯', 0.05],
                        ['甲苯', 99],
                        ['水', '']
                    ],
                    [
                        ['非芳',this.analyserTOLValue0],
                        ['苯', this.analyserTOLValue1],
                        ['甲苯', this.analyserTOLValue2],
                        ['水', this.analyserTOLValue3]
                    ]

                ];
                option = {
                    title: {
                        text:'甲苯',
                        left:'center',
                        y:'10',
                        textStyle:{
                            color:'#64b9e9',
                            fontSize:16,
                            fontFamily:'Microsoft YaHei'
                        }
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
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                    },
                    color: ['#ff881d', '#55f93f'],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        top: '30%',
                        containLabel: true
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
                                    color: '#3db1a6',
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
                                        color: '#3db1a6',
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
                        }
                        ]
                };
                ;
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },

            // 产量历史趋势
            Echarts11:function (id,title,hisProValue) {
    //console.log(this.hisProValue);
                ///产量历史趋势
                var dom = document.getElementById(id);
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                option = {
                    title: {
                        text:title,
                        left:'center',
                        y:'25',
                        textStyle:{
                            color:'#64b9e9',
                            fontSize:16,
                            fontFamily:'Microsoft YaHei'
                        }
                    },
                    // title:{text:title,
                    //     left:'center',
                    //    y:30,
                    // textStyle:{color:'#64B9E9'}},
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    tooltip: {
                        axisPointer: {
                            type: 'shadow'
                        },
                        trigger: 'axis',
                        extraCssText: 'width:200px;',

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
                        data: this.dateTime,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#CCCCCC'
                            }
                        }
                    },
                    yAxis: {
                        name:'T',
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
                        minInterval: 100,//纵坐标间隔
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
                            data:hisProValue,
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
            //单耗雷达图
            Echarts18:function(consumptionUnitProValue){
                //////单耗雷达图
                var dom = document.getElementById("NH_1_b");
                var myChart = $echarts.init(dom);
                var app = {};
               var option = null;
                var dataBJ =
                    consumptionUnitProValue;

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
                            // {name: 'S40', max: consumptionUnitProValue[1]*1.1},
                            // {name: 'S3', max: consumptionUnitProValue[1]*1.1},
                            // {name: 'S16', max: consumptionUnitProValue[1]*1.1},
                            // {name: 'H₂', max: consumptionUnitProValue[1]*1.1},
                            // {name: 'COG', max: consumptionUnitProValue[1]*1.1},
                            // {name: 'N₂', max: consumptionUnitProValue[1]*1.1}
                            {name: 'S40', max: 50,min:-10},
                            {name: 'H₂', max: 50,min:-10},
                            {name: 'S16', max: 50,min:-10},
                            {name: 'COG', max:50,min:-10},
                            {name: 'N₂', max: 50,min:-10},
                            {name: 'S3', max: 50,min:-10}
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
                            data: [{value:dataBJ}],//dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    //F9713C
                                    color:'#55F93F',// '#f9933e'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        }
                    ],color: ['#55F93F']
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
                    title:{
                        text:'APC投用率',
                        left:'center',
                        y:20,
                        textStyle:{color:'#64b9e9'}},
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
                        data: this.dateTime,
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
                            data: this.hisPIDRatioValue,
                            itemStyle:{
                                normal:{
                                    label:{
                                        textStyle:{
                                            fontSize:16
                                        },
                                        color:'#64b9e9',
                                        show:true, //自动显示数据 ，无需鼠标滑动才显示数据
                                        formatter:function (value) {
                                            //debugger;
                                             return parseFloat(value.data).toFixed(0);
                                        }
                                    },


                                },

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
                var PIDRatio=this.PIDRatio.toFixed(0);
                gauge1 = this.loadLiquidFillGauge("fillgauge1",PIDRatio, config2);
            },
            //动态圆柱2
            liquidFill2:function(){
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
                var APCRatio=this.APCRatio.toFixed(0);
                gauge1 = this.loadLiquidFillGauge("fillgauge2", APCRatio, config2);
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
        debugger;
        console.log(gauge.style("width"));
        console.log(gauge.style("height"));
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
            //第二张动态表格 能耗动态表格
            tableScroll2:function(){
                //能耗动态表格
                var parentH = document.getElementById('parentH');
                var childH = document.getElementById('childH');
                var childH1 = document.getElementById('childH1');
                childH1.innerHTML = childH.innerHTML;
                setInterval(function () {
                    if (parentH.scrollTop >= childH.scrollHeight) {
                        parentH.scrollTop = 0;
                    } else {
                        parentH.scrollTop++;
                    }
                }, 300);
            },
            ////指标中粗苯动态表格
            tableScroll3:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parent');
                var child = document.getElementById('child');
                var child1 = document.getElementById('child1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll3a:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parentA');
                var child = document.getElementById('childA');
                var child1 = document.getElementById('childA1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll3b:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parentB');
                var child = document.getElementById('childB');
                var child1 = document.getElementById('childB1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll3c:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parentC');
                var child = document.getElementById('childC');
                var child1 = document.getElementById('childC1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll3d:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parentD');
                var child = document.getElementById('childD');
                var child1 = document.getElementById('childD1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll3e:function(){
                ////指标中粗苯动态表格
                ////指标中粗苯动态表格
                var parent = document.getElementById('parentE');
                var child = document.getElementById('childE');
                var child1 = document.getElementById('childE1');
                child1.innerHTML = child.innerHTML;
                setInterval(function () {
                    if (parent.scrollTop >= child.scrollHeight) {
                        parent.scrollTop = 0;
                    } else {
                        parent.scrollTop++;
                    }
                }, 300);
            },
            tableScroll4:function(){
                //投用率部分中装置动态表格
                var parentZZ = document.getElementById('parentZZ');
                var childZZ = document.getElementById('childZZ');
                var childZZ1 = document.getElementById('childZZ1');
                childZZ1.innerHTML = childZZ.innerHTML;
                setInterval(function () {
                    if (parentZZ.scrollTop >= childZZ.scrollHeight) {
                        parentZZ.scrollTop = 0;
                    } else {
                        parentZZ.scrollTop++;
                    }
                }, 300);
            },
            //温度计1
            Echart20:function () {
    //debugger;
    var that=this;
                var myChart = $echarts.init(document.getElementById('TYL_1_b'));
                var TP_value = that.PIDUseNum;
                var kd = [];
                var Gradient = [];
                var leftColor = '';
                var showValue = '';
                var boxPosition = [50, 0];
                var TP_txt = ''
                // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
                for(var i = 0, len = that.PIDLoopNum; i <= len; i++) {
                    if(i < 0 || i > that.PIDLoopNum) {
                        kd.push('')
                    } else {

                        if(i  === that.PIDLoopNum) {
                            kd.push('-6');
                        } else {
                            kd.push('');
                        }
                    }

                }

                var b=that.PIDUseNum
                //中间线的渐变色和文本内容
                if(TP_value >=0) {
                    TP_txt = '温度偏高';
                    Gradient.push({
                        offset: 1,
                        color: '#93FE94'
                    }, {
                        offset: 0.5,
                        color: '#E4D225'
                    }, {
                        offset: 0,
                        color: '#E01F28'
                    })
                }
                if(TP_value > that.PIDUseNum) {
                    showValue = that.PIDUseNum
               } else {
                    if(TP_value < 1) {
                        showValue = 0
                    } else {
                        showValue = TP_value
                    }
                }
                if(TP_value < 0) {
                    boxPosition = [that.PIDLoopNum, 0];
                }
               // debugger;
                var a=Gradient;
                leftColor = Gradient[Gradient.length - 1].color;
                // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
                var option = {
                    //backgroundColor: '#0C2F6F',
                    title: {
                        text: '温度计',
                        show: false
                    },
                    yAxis: [{
                        show: false,
                        data: [],
                        min: 0,
                        max: that.PIDLoopNum,
                        axisLine: {
                            show: false
                        }
                    }, {
                        show: false,
                        min: 0,
                        max: that.PIDLoopNum,
                    }
                        , {
                            type: 'category',

                            offset: -100,
                            y:50,
                            axisLabel: {
                                fontSize: 11,
                                color: 'white'
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            z:2
                        }
                    ],
                    xAxis: [{
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -20,
                        max: 80,
                    }, {
                        show: false,
                        min: -70,
                        max: 80,
                    }],
                    series: [{
                        name: '条',
                        type: 'bar',
                        // 对应上面XAxis的第一个对)象配置
                        xAxisIndex: 0,
                        data: [{
                            value: showValue ,
                            label: {
                                normal: {
                                    show: true,
                                    position: [-40,0],
                                    width: 200,
                                    height: 150,
                                    formatter: '{back| ' + TP_value + ' \n}',
                                    rich: {
                                        back: {
                                            align: 'center',
                                            lineHeight: 70,
                                            fontSize: 30,
                                            fontFamily: 'digifacewide',
                                            color: '#64B9E9'
                                        },
                                        unit: {
                                            fontFamily: '微软雅黑',
                                            fontSize: 15,
                                            lineHeight: 50,
                                            color: leftColor
                                        },
                                        downTxt: {
                                            lineHeight: 50,
                                            fontSize: 25,
                                            align: 'center',
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        }],

                        barWidth: 18,
                        itemStyle: {
                            normal: {
                                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                            }
                        },
                        z: 4
                    }, {
                        name: '白框',
                        type: 'bar',
                        xAxisIndex: 1,
                        barGap: '-100%',
                        data: [parseInt(that.PIDLoopNum+12)],
                        barWidth: 28,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                barBorderRadius: 50,
                            }
                        },
                        z: 1
                    }, {
                        name: '外框',
                        type: 'bar',
                        xAxisIndex: 2,
                        barGap: '-100%',
                        data: [parseInt(that.PIDLoopNum+17)],
                        barWidth: 38,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                barBorderRadius: 50,
                            }
                        },
                        z: 0
                    }, {
                        name: '圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 0,
                        symbolSize: 40,
                        itemStyle: {
                            normal: {
                                color: '#E01F28',
                                opacity: 1,
                            }
                        },
                        z: 2
                    }, {
                        name: '白圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 1,
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                opacity: 1,
                            }
                        },
                        z: 1
                    }, {
                        name: '外圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 2,
                        symbolSize: 60,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                opacity: 1,
                            }
                        },
                        z: 0
                    }, {
                        name: '刻度',
                        type: 'bar',
                        yAxisIndex: 0,
                        xAxisIndex: 3,
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                distance: 10,
                                color: '#93FE94',
                                fontSize: 20,
                                formatter: function(params) {

                                    if(params.dataIndex === that.PIDUseNum) {
                                        return params.dataIndex;
                                    }else if(params.dataIndex === that.PIDLoopNum){
                                        return params.dataIndex;
                                    }
                                    else {
                                        return '';
                                    }

                                }
                            }
                        },
                        barGap: '-100%',
                        data: kd,
                        barWidth: 1,
                        itemStyle: {
                            normal: {
                                color: 'white',
                                barBorderRadius: 120,
                            }
                        },
                        z: 0
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //温度计2
            Echart21:function () {
    var that=this;
                var myChart = $echarts.init(document.getElementById('TYL_2_b'));
                var TP_value = that.APCUseNum;
                var kd = [];
                var Gradient = [];
                var leftColor = '';
                var showValue = '';
                var boxPosition = [50, 0];
                var TP_txt = ''
                // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
                for(var i = 0, len = that.APCLoopNum; i <= len; i++) {
                    if(i < 0 || i > that.APCLoopNum) {
                        kd.push('')
                    } else {

                        if(i  === that.APCLoopNum) {
                            kd.push('-6');
                        } else {
                            kd.push('');
                        }
                    }

                }
                //中间线的渐变色和文本内容
                if(TP_value >=0) {
                    TP_txt = '温度偏高';
                    Gradient.push({
                        offset: 1,
                        color: '#93FE94'
                    }, {
                        offset: 0.5,
                        color: '#E4D225'
                    }, {
                        offset: 0,
                        color: '#E01F28'
                    })
                }
                if(TP_value > that.APCUseNum) {
                    showValue = that.APCUseNum
                } else {
                    if(TP_value < 1) {
                        showValue = 0
                    } else {
                        showValue = TP_value
                    }
                }
                if(TP_value < 0) {
                    boxPosition = [that.APCLoopNum, 0];
                }
                leftColor = Gradient[Gradient.length - 1].color;
                // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
                var option = {
                    //backgroundColor: '#0C2F6F',
                    title: {
                        text: '温度计',
                        show: false
                    },
                    yAxis: [{
                        show: false,
                        data: [],
                        min: 0,
                        max: that.APCLoopNum,
                        axisLine: {
                            show: false
                        }
                    }, {
                        show: false,
                        min: 0,
                        max: that.APCLoopNum,
                    }
                        , {
                            type: 'category',

                            offset: -100,
                            y:50,
                            axisLabel: {
                                fontSize: 11,
                                color: 'white'
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            z:2
                        }
                    ],
                    xAxis: [{
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -40,
                        max: 80,
                        data: []
                    }, {
                        show: false,
                        min: -20,
                        max: 80,
                    }, {
                        show: false,
                        min: -70,
                        max: 80,
                    }],
                    series: [{
                        name: '条',
                        type: 'bar',
                        // 对应上面XAxis的第一个对)象配置
                        xAxisIndex: 0,
                        data: [{
                            value: showValue ,
                            label: {
                                normal: {
                                    show: true,
                                    position: [-40,0],
                                    width: 200,
                                    height: 150,
                                    formatter: '{back| ' + TP_value + ' \n}',
                                    rich: {
                                        back: {
                                            align: 'center',
                                            lineHeight: 70,
                                            fontSize: 30,
                                            fontFamily: 'digifacewide',
                                            color: '#64B9E9'
                                        },
                                        unit: {
                                            fontFamily: '微软雅黑',
                                            fontSize: 15,
                                            lineHeight: 50,
                                            color: leftColor
                                        },
                                        downTxt: {
                                            lineHeight: 50,
                                            fontSize: 25,
                                            align: 'center',
                                            color: '#fff'
                                        }
                                    }
                                }
                            }
                        }],

                        barWidth: 18,
                        itemStyle: {
                            normal: {
                                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                            }
                        },
                        z: 4
                    }, {
                        name: '白框',
                        type: 'bar',
                        xAxisIndex: 1,
                        barGap: '-100%',
                        data: [that.APCLoopNum+4],
                        barWidth: 28,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                barBorderRadius: 50,
                            }
                        },
                        z: 1
                    }, {
                        name: '外框',
                        type: 'bar',
                        xAxisIndex: 2,
                        barGap: '-100%',
                        data: [that.APCLoopNum+5],
                        barWidth: 38,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                barBorderRadius: 50,
                            }
                        },
                        z: 0
                    }, {
                        name: '圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 0,
                        symbolSize: 40,
                        itemStyle: {
                            normal: {
                                color: '#E01F28',
                                opacity: 1,
                            }
                        },
                        z: 2
                    }, {
                        name: '白圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 1,
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                opacity: 1,
                            }
                        },
                        z: 1
                    }, {
                        name: '外圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 2,
                        symbolSize: 60,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                opacity: 1,
                            }
                        },
                        z: 0
                    }, {
                        name: '刻度',
                        type: 'bar',
                        yAxisIndex: 0,
                        xAxisIndex: 3,
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                distance: 10,
                                color: '#93FE94',
                                fontSize: 20,
                                formatter: function(params) {

                                    if(params.dataIndex === that.APCUseNum) {
                                        return params.dataIndex;
                                    }else if(params.dataIndex === that.APCLoopNum){
                                        return params.dataIndex;
                                    }
                                    else {
                                        return '';
                                    }

                                }
                            }
                        },
                        barGap: '-100%',
                        data: kd,
                        barWidth: 1,
                        itemStyle: {
                            normal: {
                                color: 'white',
                                barBorderRadius: 120,
                            }
                        },
                        z: 0
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            //圆形自适应屏幕
            circleChange:function () {
            var width= document.getElementById('fh1_b2_a').offsetWidth;
            //console.log(width);
                var height= document.getElementById('fh1_b2_a').offsetHeight;
                //console.log(height);
                if(width>height){
                    document.getElementById('fh1_b2_a').style.width=height*0.8+'px';
                    document.getElementById('fh1_b2_a').style.height=height*0.8+'px';
                }else {
                    document.getElementById('fh1_b2_a').style.height=width*0.8+'px';
                    document.getElementById('fh1_b2_a').style.width=width*0.8+'px';
                }
            },
            TableChange:function(fh1_b,child,speed){
                var that=this;
                var ts = this.G(fh1_b).getElementsByClassName(child);//获取容器内需要轮流显示的子元素：这里是 div

                that.timer1 = setInterval(function(){//定义时间控制器
                    if(that.k>0){
                        ts[that.k-1].style.display='none';

                    }
                    ts[that.k].style.display='block';//显示需要显示的

                    //debugger;
                    if(that.k==0){

                        that.Echarts11("fh1_b1","纯苯",that.hisProValue0);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=(parseFloat(that.proCTValueList[that.k])/1000).toFixed(1)+'t/h';

                    }else if(that.k==1){
                        that.Echarts11("fh1_b1_a","甲苯",that.hisProValue1);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=(parseFloat(that.proCTValueList[that.k])/1000).toFixed(1)+'t/h';
                    }else if(that.k==2){
                        that.Echarts11("fh1_b1_b","二甲苯",that.hisProValue2);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=(parseFloat(that.proCTValueList[that.k])/1000).toFixed(1)+'t/h';
                    }else if(that.k==3){
                        that.Echarts11("fh1_b1_c","重苯",that.hisProValue3);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=(parseFloat(that.proCTValueList[that.k])/1000).toFixed(1)+'t/h';
                    }else if(that.k==4){
                        that.Echarts11("fh1_b1_d","C8",that.hisProValue4);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=that.proCTValueList[that.k].toFixed(0)+'kg/h';
                    }else if(that.k==5){
                        that.Echarts11("fh1_b1_e","C9",that.hisProValue5);

                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=that.proCTValueList[that.k].toFixed(0)+'kg/h';
                    }else if(that.k==6){
                        that.Echarts11("fh1_b1_f","非芳",that.hisProValue6);
                        document.getElementById("titleText1").innerText=that.proCTValueFlagList[that.k];
                        document.getElementById("titleText2").innerText=that.proCTValueList[that.k].toFixed(0)+'kg/h';
                    }
                    for(var m=0;m<ts.length;m++)
                    {
                        if(m!=that.k){
                            ts[m].style.display='none';
                        }
                    }
                    if(that.k>ts.length-2){
                        that.k=0;
                    }else{
                        that.k++;
                    }


                },speed);
            },
            TableChange1:function(NH_2,child,speed){
                var that=this;
                var ts = this.G(NH_2).getElementsByClassName(child);//获取容器内需要轮流显示的子元素：这里是 div

                that. timer2 = setInterval(function(){//定义时间控制器

                    if(that.f>0){
                        ts[that.f-1].style.display='none';

                    }
                    ts[that.f].style.display='block';//显示需要显示的

                    //debugger;
                    if(that.f==0){
                        that.Echarts3("NH_2_a","S40历史能耗",that.hisConsumptionValue0,'万元');

                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;

                    }else if(that.f==1){
                        that.Echarts3("NH_2_a1","H₂历史能耗",that.hisConsumptionValue1,'万元');

                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                    }else if(that.f==2){
                        that.Echarts3("NH_2_a2","S16历史能耗",that.hisConsumptionValue2,'万元');

                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                    }else if(that.f==3){
                        that.Echarts3("NH_2_a3","COG历史能耗",that.hisConsumptionValue3,'万元');
                        //
                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                    }else if(that.f==4){
                        that.Echarts3("NH_2_a4","N₂历史能耗",that.hisConsumptionValue4,'元');

                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                    }else if(that.f==5){
                        that.Echarts3("NH_2_a5","S3历史能耗",that.hisConsumptionValue5,'万元');

                        // document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                        // document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                     }
                     //else if(that.k==6){
                    //     that.Echarts11("fh1_b1_f","非芳");
                    //     document.getElementById("titleText1").innerText=that.proCTValueList[that.k].name;
                    //     document.getElementById("titleText2").innerText=that.proCTValueList[that.k].value;
                    // }
                    for(var m=0;m<ts.length;m++)
                    {
                        if(m!=that.f){
                            ts[m].style.display='none';
                        }
                    }
                    if(that.f>ts.length-2){
                        that.f=0;
                    }else{
                        that.f++;
                    }


                },speed);
            },
            TableChange2:function(NH_2,child,speed){
                var that=this;

                var ts = this.G(NH_2).getElementsByClassName(child);//获取容器内需要轮流显示的子元素：这里是 div
                var ts1=this.G(NH_2).getElementsByClassName("ZB_1_N");
                that.timer3 = setInterval(function(){//定义时间控制器

                    if(that.g>0){
                        ts[that.g-1].style.display='none';
                        ts1[that.g-1].style.display='none';

                    }
                    ts[that.g].style.display='block';//显示需要显示的
                    ts1[that.g].style.display='block';

                    for(var m=0;m<ts.length;m++)
                    {
                        if(m!=that.g){
                            ts[m].style.display='none';
                            ts1[m].style.display='none';
                        }
                    }
                    if(that.g>ts.length-2){
                        that.g=0;
                    }else{
                        that.g++;
                    }


                },speed);
            },
            G:function(e){

    var a=document.getElementById(e);
                return document.getElementById(e);

            },
            //后台返回数据
            FirstData:function(){
    var that=this;
                if ('WebSocket' in window) {
                    that.ws = new WebSocket('ws://192.168.1.113:1001/api/ShowPanel/Get?');
                    //this.ws = new WebSocket('ws://localhost:59769/api/ShowPanel/Get');
                    //this.ws = new WebSocket('ws://localhost:59769/api/OPCOper/Get');
                    that.ws.onopen = function () {
                        //debugger;
                        console.log('WebSocket连接成功！');
                    };
                    that.ws.onmessage = function (res) {
                        //  var titleGZ1=document.getElementById('titleGZ1').innerHTML;
                        //  document.getElementById('titleGZ1').innerHTML='测试title';
                        var res1=JSON.parse(res.data);
                        var panelProduct=res1.panelProduct;
                        that.proCTValueFlagList=res1.FlagProCTID;//产品顺序
                        // var res3=res1.dataToWebCTList;
                        console.log(res1);
                        //仪表盘
                        var loadCT=panelProduct[9].toFixed(1);
                        var loadMonth=panelProduct[10].toFixed(1);
                        var loadYear=panelProduct[11].toFixed(1);
                        that. Echarts1(loadCT,loadMonth,loadYear);

                        that.hisProValue0= panelProduct[0];
                        that.hisProValue1= panelProduct[1];
                        that.hisProValue2= panelProduct[2];
                        that.hisProValue3= panelProduct[3];
                        that.hisProValue4= panelProduct[4];
                        that.hisProValue5= panelProduct[5];
                        that.hisProValue6= panelProduct[6];

                        that.proCTValueList=panelProduct[8];
                         that.tableData0=panelProduct[7][0];
                        that.tableData1=panelProduct[7][1];
                        that.tableData2=panelProduct[7][2];
                        that.tableData3=panelProduct[7][3];
                        that.tableData4=panelProduct[7][4];
                        that.tableData5=panelProduct[7][5];
                        that.tableData6=panelProduct[7][6];
                        that.tableData7=panelProduct[7][7];
                        that.tableData8=panelProduct[7][8];
                        that.tableData9=panelProduct[7][9];
                        that.tableData10=panelProduct[7][10];
                        that.tableData11=panelProduct[7][11];
                        that.tableData12=panelProduct[7][12];
                        that.tableData13=panelProduct[7][13];
                        that.tableData14=panelProduct[7][14];
                        that.tableData15=panelProduct[7][15];
                        that.tableData16=panelProduct[7][16];
                        that.tableData17=panelProduct[7][17];
                        that.tableData18=panelProduct[7][18];
                        that.tableData19=panelProduct[7][19];
                        that.tableData20=panelProduct[7][20];
                        //that.tableData21=res1.dataToWebProTableList[1].value;
                        //实时能耗散点图
                        that.consumptionProValue=res1.panelConsumption[6];
                        var consumptionProValue= that.consumptionProValue;
                        that.Echarts2(consumptionProValue);
                        //实时单耗六芒星
                        var consumptionUnitValueTable=res1.panelConsumption[8];
                        that.consumptionUnitProValue=consumptionUnitValueTable;
                        //实时单耗表格
                        that.consumptionUnitProValue0=consumptionUnitValueTable[0].toFixed(2);
                        that.consumptionUnitProValue1=consumptionUnitValueTable[1].toFixed(2);
                        that.consumptionUnitProValue2=consumptionUnitValueTable[2].toFixed(2);
                        that.consumptionUnitProValue3=consumptionUnitValueTable[3].toFixed(2);
                        that.consumptionUnitProValue4=consumptionUnitValueTable[4].toFixed(2);
                        that.consumptionUnitProValue5=consumptionUnitValueTable[5].toFixed(2);

                        var consumptionUnitProValue=that.consumptionUnitProValue;
                        that.Echarts18(consumptionUnitProValue);
                        //单耗表格
                        var panelConsumptionTable=res1.panelConsumption[7];
                        that.dataToWebConsumptionTableList0=panelConsumptionTable[0];
                        that.dataToWebConsumptionTableList1=panelConsumptionTable[1];
                        that.dataToWebConsumptionTableList2=panelConsumptionTable[2];
                        that.dataToWebConsumptionTableList3=panelConsumptionTable[3];
                        that.dataToWebConsumptionTableList4=panelConsumptionTable[4];
                        that.dataToWebConsumptionTableList5=panelConsumptionTable[5];
                        that.dataToWebConsumptionTableList6=panelConsumptionTable[6];
                        that.dataToWebConsumptionTableList7=panelConsumptionTable[7];
                        that.dataToWebConsumptionTableList8=panelConsumptionTable[8];
                        //历史能耗折线图
                        that.hisConsumptionValue0=res1.panelConsumption[0];
                        that.hisConsumptionValue1=res1.panelConsumption[1];
                        that.hisConsumptionValue2=res1.panelConsumption[2];
                        that.hisConsumptionValue3=res1.panelConsumption[3];
                        that.hisConsumptionValue4=res1.panelConsumption[4];
                        that.hisConsumptionValue5=res1.panelConsumption[5];

                        //粗苯组分测量值
                        var analyserCOLOValueFromS=res1.panelAnalyser[0];
                        that.analyserCOLOValue0=analyserCOLOValueFromS[0];
                        that.analyserCOLOValue1=analyserCOLOValueFromS[1];
                        that.analyserCOLOValue2=analyserCOLOValueFromS[2];
                        that.analyserCOLOValue3=analyserCOLOValueFromS[3];
                        that.analyserCOLOValue4=analyserCOLOValueFromS[4];
                        that.analyserCOLOValue5=analyserCOLOValueFromS[5];
                        that.analyserCOLOValue6=analyserCOLOValueFromS[6];
                        that.analyserCOLOValue7=analyserCOLOValueFromS[7];
                        that.analyserCOLOValue8=analyserCOLOValueFromS[8];
                        that.analyserCOLOValue9=analyserCOLOValueFromS[9];
                        that.analyserCOLOValue10=analyserCOLOValueFromS[10];
                        that.analyserCOLOValue11=analyserCOLOValueFromS[11];
                        that.analyserCOLOValue12=analyserCOLOValueFromS[12];
                        //芳香烃测量值
                        var analyserBTAROValueFromS=res1.panelAnalyser[3];
                        that.analyserBTAROValue=analyserBTAROValueFromS;
                        that.analyserBTAROValue0=analyserBTAROValueFromS[0];
                        that.analyserBTAROValue1=analyserBTAROValueFromS[1];
                        that.analyserBTAROValue2=analyserBTAROValueFromS[2];
                        that.analyserBTAROValue3=analyserBTAROValueFromS[3];
                        that.analyserBTAROValue4=analyserBTAROValueFromS[4];
                        that.Echarts4();

                        //非芳烃测量值
                        var analyserNONAROValueFromS=res1.panelAnalyser[1];
                        that.analyserNONAROValue0=analyserNONAROValueFromS[0];
                        that.analyserNONAROValue1=analyserNONAROValueFromS[1];
                        that.analyserNONAROValue2=analyserNONAROValueFromS[2];
                        that.analyserNONAROValue3=analyserNONAROValueFromS[3];
                        that.Echarts5();
                        //循环气测量值
                        var analyserRECGASValueFromS=res1.panelAnalyser[5];
                        that.analyserRECGASValue0=analyserRECGASValueFromS[0];
                        that.analyserRECGASValue1=analyserRECGASValueFromS[1];
                        that.analyserRECGASValue2=analyserRECGASValueFromS[2];
                        that.analyserRECGASValue3=analyserRECGASValueFromS[3];
                        that.analyserRECGASValue4=analyserRECGASValueFromS[4];
                        that.analyserRECGASValue5=analyserRECGASValueFromS[5];
                        that.Echarts6();
                        //甲苯测量值
                        var analyserTOLValueFromS=res1.panelAnalyser[4];
                        that.analyserTOLValue0=analyserTOLValueFromS[0];
                        that.analyserTOLValue1=analyserTOLValueFromS[1];
                        that.analyserTOLValue2=analyserTOLValueFromS[2];
                        that.analyserTOLValue3=analyserTOLValueFromS[3];
                        that.Echarts8();
                        //纯苯测量值
                        var analyserBENValueFromS=res1.panelAnalyser[2];
                        that.analyserBENValue0=analyserBENValueFromS[0];
                        that.analyserBENValue1=analyserBENValueFromS[1];
                        that.analyserBENValue2=analyserBENValueFromS[2];
                        that.analyserBENValue3=analyserBENValueFromS[3];
                        that.Echarts7();



                        //自控投用率
                        that.PIDRatio=res1.panelRatio[1];
                        //APC投用率
                        that.APCRatio=res1.panelRatio[4];
                        //PID投用个数
                        that.PIDUseNum=res1.panelRatio[2];
                        //PID总数
                        that.PIDLoopNum=res1.panelRatio[3];
                        //apc投用个数
                        that.APCUseNum=res1.panelRatio[5];
                        //apc总数
                        that.APCLoopNum=res1.panelRatio[6];
                        //7天自控投用率历史记录
                        that.hisPIDRatioValue=res1.panelRatio[0];
                         that.Echarts12();

                         //温度计
                        that.Echart20();
                        that.Echart21();
                       // console.log(that.hisPIDRatioValue);
//液位圆
                        that.liquidFill();
                        that.liquidFill2();
                        //产量历史趋势
                       // that.Echarts11(fh1_b1,'纯苯',this.hisProValue);
                        var parentCP = document.getElementById('parentCP');
                        var childCP = document.getElementById('childCP');
                        var childCP1 = document.getElementById('childCP1');
                        childCP1.innerHTML = childCP.innerHTML;

                        var parentZZ = document.getElementById('parentZZ');
                        var childZZ = document.getElementById('childZZ');
                        var childZZ1 = document.getElementById('childZZ1');
                        childZZ1.innerHTML = childZZ.innerHTML;
                    };
                    that.ws.onerror = function (error) {
                        console.log('WebSocket连接失败,错误:' + error);
                    };
                    that.ws.onclose = function () {
                        //debugger;
                        console.log('WebSocket连接关闭！');
                    };
                }

            },
//第二部分后台返回数据

            },

//最后在beforeDestroy()生命周期内清除定时器：
        beforeDestroy(){
    clearInterval(this.timer1);
    this.timer1 = null;
            clearInterval(this.timer2);
            this.timer2 = null;
            clearInterval(this.timer3);
            this.timer3 = null;
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
    .imgtitle{
        width: 100%;
        height: 8%;
    }

    .content{
        width:100%;
        height: 46%;
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
        /*display: none;*/
        margin-left: 20px;
        margin-top: -20px;
        width: 70%;
        height: 100%;
    }
    .fh1_b2{
        width:30%;
        padding-top: 25px;
        height: 100%;
        /*display: flex;!*设置为弹性容器*!*/
        /*align-items: center; !*定义div1的元素垂直居中*!*/
        /*justify-content: center; !*定义div1的里的元素水平居中*!*/
        /*text-align: center;*/
        /*line-height: 100%;*/
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
        border:5px solid #64B9e9;
        border-radius:50% ;
        margin: 0 auto;
        display: flex;/*设置为弹性容器*/
        align-items: center; /*定义div1的元素垂直居中*/
        justify-content: center; /*定义div1的里的元素水平居中*/
    }
    .fh1_b2_a_1{

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
        /*background-color: red;*/
    }
    .NH_2{
        display: flex;
        width: 100%;
        height: 50%;
        /*padding-bottom: 20px;*/
        /*margin-bottom: 20px;*/
        /*background-color: blue;*/
    }
    .NH_1_a{
        width: 50%;
        height: 100%;
        /*background-color: yellow;*/
    }
    .NH_1_b{
        width: 25%;
        height: 100%;
        /*background-color: darkslategray;*/
    }
    .NH_1_c{
        width: 25%;
        height: 100%;
        padding-right: 20px;
        /*background-color: darkslategray;*/
    }
    .NH_2_a{
        width: 50%;
        height: 100%;

        /*background-color: aliceblue;*/
    }
    .NH_2_b{
        width: 50%;
        height: 100%;
        /*background-color: fuchsia;*/
    }
    .TableStyle1{
        margin-top: 30px;
        /*margin-right: 20px;*/
        color: white;
        border-collapse:separate;
        border:2px solid #64B9E9;
        border-radius: 0.5em;
        width: 100% ;
        font-size: 18px;

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
        /*background-color: red;*/
    }
    .ZB_1_N{
        width: 6%;
        height: 100%;
        padding-left:10px;
        padding-top: 50px;
        text-align: center;
        line-height: 32px;
        font-size:1em;
        color: #64B9E9;
    }
    .ZB_1_a{
        width: 34%;
        height: 100%;
        /*padding-left:10px;*/
        padding-top: 20px;
        /*margin-right:10px;*/
        /*background-color: aliceblue;*/
    }
    .ZB_1_b{
        width: 30%;
        height: 100%;
        /*background-color:sienna;*/
    }
    .ZB_1_c{
        width: 30%;
        height: 100%;
        /*background-color:green;*/
    }
    .ZB_2{
        display: flex;
        width: 100%;
        height: 50%;
        /*background-color: blueviolet;*/

    }
    .ZB_2_N{
        width: 6%;
        height: 100%;
        padding-left:10px;
        padding-top: 50px;
        text-align: center;
        line-height: 32px;
        font-size:1em;
        color: #64B9E9;
    }
    .ZB_2_a{

        width: 34%;
        height: 100%;

        /*background-color:darkslategray;*/
    }
    .ZB_2_b{
        width: 30%;
        height: 100%;
        /*background-color:rosybrown;*/
    }
    .ZB_2_c{
        width: 30%;
        height: 100%;
        /*background-color:tomato;*/
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
        /*background-color: red;*/
    }
    .TYL_1_a{
        width: 25%;
        height: 100%;
        padding-top: 50px;
        /*background-color: aliceblue;*/
    }
    .TYL_1_b{
        width: 20%;
        height: 100%;
        padding-top: 30px;
        /*background-color:sienna;*/
    }
    .TYL_1_c{
        width: 55%;
        height: 100%;
        /*background-color:green;*/
    }
    /*.TYL_1_d{*/
    /*display: flex;*/
    /*align-items: center;*/
    /*width: 15%;*/
    /*height: 100%;*/
    /*!*background-color:green;*!*/
    /*}*/
    .TYL_2{
        display: flex;
        width: 100%;
        height: 50%;
        padding-bottom:20px;
        /*background-color: blueviolet;*/
    }
    .TYL_2_a{
        width: 25%;
        height: 100%;
        padding-top: 20px;
        /*background-color:darkslategray;*/
    }
    .TYL_2_b{
        width:20%;
        height:100%;
        /*margin-bottom: 50px;*/
        /*//margin:0 auto;*/
        /*background-color:rosybrown;*/
    }
    .TYL_2_c{
        width:55%;
        height:100%;

        /*background-color:tomato;*/
    }
    table,tr,td{
        /*border:1px solid red;*/
        /*border-collapse: collapse;*/
        border: 0px solid #888;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 3px;
        margin-bottom: 3px;
        border-collapse: collapse;
        font-size: 16px;
        text-align: center;
    }
    .jishu {
        background-color: rgba(0%, 0%, 0%, 0);
    }

    .oushu {
        background-color: rgba(21, 214, 198, 0.12);
    }
</style>
