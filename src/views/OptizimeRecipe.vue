<template>
    <div class="fillContainer">
        <el-tabs :data="tabs" v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane v-for="tab in tabs" :label='tab.CompName+"燃料油"' :name="tab.CompCode">
                <div class="prodiv"v-if="activeName2=='Prop1'">
                    <span>成本：</span> <input class="proinput" v-model='cost' disabled="true"/>
                    <span>利润：</span> <input class="proinput" v-model='gain'disabled="true"/>
                    <span>总产量(万吨/年)：</span> <input class="proinput" v-model='production' placeholder="请输入内容"@keyup.enter="inputSubmit"/>
                </div>
                <div class="prodiv"v-if="activeName2=='Prop2'">
                    <span>成本：</span> <input class="proinput" v-model='cost2' disabled="true"/>
                    <span>利润：</span> <input class="proinput" v-model='gain2'disabled="true"/>
                    <span>总产量(万吨/年)：</span> <input class="proinput" v-model='production2' placeholder="请输入内容"@keyup.enter="inputSubmit"/>
                </div>
                <div class="prodiv"v-if="activeName2=='Prop3'">
                    <span>成本：</span> <input class="proinput" v-model='cost3' disabled="true"/>
                    <span>利润：</span> <input class="proinput" v-model='gain3'disabled="true"/>
                    <span>总产量(万吨/年)：</span> <input class="proinput" v-model='production3' placeholder="请输入内容"@keyup.enter="inputSubmit"/>
                </div>
                <el-table
                        :data="data"
                        v-if="data.length >0"
                        max-height="600"
                        class="table"
                        border
                        style="width: 100%"
                        :row-style="tableRowStyle"
                        :header-cell-style="tableHeaderColor"
                        :cell-style="tableCellColor"
                        :cell-class-name="rowClass"
                >
                    <el-table-column
                            prop="CompName"
                            align="center"
                            label="属性名"
                            width="180">
                        <template slot-scope="scope">
                            <span style="color:rgb(96,98,102)">{{scope.row[scope.column.property]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  v-for="col in compConfigList":label="col.CompName" :property="col.CompCode"
                                      width="120" align="center">

                        <template slot-scope="scope">
                            <el-input  v-model="scope.row[scope.column.property]"v-if="showEdit[scope.$index]" @keyup.enter.native="submitForm(scope.$index,scope.row)"></el-input>
                            <span v-if="!showEdit[scope.$index]"@click="handleEdit(scope.$index,scope.row)">{{scope.row[scope.column.property]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="计算值"
                            property="value1"
                            align="center"
                            width="120"
                    >
                        <template slot-scope="scope">
                            <span>{{scope.row[scope.column.property]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            :label='tab.CompName+"燃料油"'
                            :prop="tab.CompCode"
                            align="center"
                            width="120">
                    </el-table-column>
                </el-table>

            </el-tab-pane>

        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "OptizimeRecipe",
        data(){
            return {
                tableData:[],
                //cols:[],
                compConfigList:[],
                data:[],
                showEdit: [], //显示编辑框
                showBtn: [],
                edit:false,//标识是否有在编辑的行
                activeName2: 'Prop1',
                ProData:[],
                //TAB1 数据
                production:0,
                //TAB2 数据
                production2:0,
                production3:0,
                //是否加载返回信息
                flag:0,
                //判断返回值是否成功
                status:true,
                tabs:[],
                cost:0,
                gain:0,
                cost2:0,
                gain2:0,
                cost3:0,
                gain3:0,
                // showBtnOrdinary: true,
            }
        },
        created(){
            //console.log(this.flag);
            this.getProList();
        },
        methods:{
            //点击回车提交input
            inputSubmit(){
                // if(this.activeName2=="Prop2"){
                //     var value=  this.production2;
                //     var propNo=this.activeName2;
                //     this.$axios.get('/FuelOilService.asmx/updateProduction?value='+value+'&propNo='+propNo).then(res=>{
                //
                //         //console.log(res);
                //     });
                //     this.getPro2Data();
                // }else {
                //     var value=  this.production;
                //     var propNo=this.activeName2;
                //     this.$axios.get('/FuelOilService.asmx/updateProduction?value='+value+'&propNo='+propNo).then(res=>{
                //         console.log(res);
                //     });
                //     this.getProData();
                // }
                var value;
                if(this.activeName2=="Prop1"){
                     value=  this.production;
                }else if(this.activeName2=="Prop2"){
                    value=  this.production2;
                }else {
                    value=  this.production3;
                }

                    var propNo=this.activeName2;
                    this.$axios.get('/FuelOilService.asmx/updateProduction?value='+value+'&propNo='+propNo).then(res=>{
                        this.flag=1;
                        if(res.data.success){
                            if(this.activeName2=="Prop1"){

                                this.getProData();
                            }else if(this.activeName2=="Prop2"){

                                this.getPro2Data();
                            }else {
                                this.getPro3Data();
                            }
                            this.$message({
                                message:res.data.msg,
                                type:'success'
                            });
                        }else {
                            this.$message({
                                message:res.data.msg,
                                type:'error'
                            });
                        }
                         //console.log(res);
                     });
            },
            //获取tab
            getProList:function (){
                this.$axios.get('/FuelOilService.asmx/getCompAndProdProperty').then(res=>{
                    this.tabs=res.data.productConfigList;
                    var bb;
                    bb=this.tabs;
                    for(var i=0;i<bb.length;i++){
                        this.activeName2=bb[0].CompCode;
                    };
                    if(this.activeName2=="Prop1"){
                        this.getProData();
                    }else if(this.activeName2=="Prop2"){
                        this.getPro2Data();
                    }else {
                        this.getPro3Data();
                    }


                })
            },
            //获取表格数据
            getProData:function(){
                this.$axios.get('/FuelOilService.asmx/OptimizeRecipeCalculate?propNo='+this.activeName2).then(res=>{
                    if(this.status){
                        if(this.flag!==0){
                            this.flag=0;
                            if(res.data.success){
                                    this.$message({
                                        message:res.data.msg,
                                        type:'success'
                                    });
                            }else {
                                    this.$message({
                                        message:res.data.msg,
                                        type:'error'
                                    });
                            }
                        }
                    }
                    this.compConfigList=res.data.compConfigList;
                    this.data=res.data.data;
                    this.production=res.data.production;
                    this.cost= parseFloat(res.data.cost).toFixed(0);
                    this.gain=parseFloat(res.data.gain).toFixed(0);

                })
            },
            getPro2Data:function(){
                this.$axios.get('/FuelOilService.asmx/OptimizeRecipeCalculate?propNo='+ this.activeName2).then(res=>{
                    if(this.status){
                        if(this.flag!==0) {
                            this.flag=0;
                            if (res.data.success) {
                                this.$message({
                                    message: res.data.msg,
                                    type: 'success'
                                });
                            } else {
                                this.$message({
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }

                        }
                    }
                    this.compConfigList=res.data.compConfigList;
                    this.data=res.data.data;
                    this.production2=res.data.production;
                   // this.cost2=res.data.cost;
                    //this.gain2=res.data.gain;
                    this.cost2= parseFloat(res.data.cost).toFixed(0);
                    this.gain2=parseFloat(res.data.gain).toFixed(0);
                })

            },
            getPro3Data:function(){
                this.$axios.get('/FuelOilService.asmx/OptimizeRecipeCalculate?propNo='+ this.activeName2).then(res=>{
                    if(this.status){
                        if(this.flag!==0) {
                            this.flag=0;
                            if (res.data.success) {
                                this.$message({
                                    message: res.data.msg,
                                    type: 'success'
                                });
                            } else {
                                this.$message({
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }

                        }
                    }
                    this.compConfigList=res.data.compConfigList;
                    this.data=res.data.data;
                    this.production3=res.data.production;
                    // this.cost3=res.data.cost;
                    // this.gain3=res.data.gain;
                    this.cost3= parseFloat(res.data.cost).toFixed(0);
                    this.gain3=parseFloat(res.data.gain).toFixed(0);

                })

            },
            //切换TAB
            handleClick(tab, event){
                this.activeName2=tab.name;
                if (this.activeName2=="Prop1") {
                    this.getProData();
                }else if(this.activeName2=="Prop2"){
                    this.getPro2Data();
                }else {
                    this.getPro3Data();
                }

            },
            //点击单元格
            handleEdit(index,row){
               if(row.CompCode=="LLIM"){
                   if(!this.edit){
                       this.edit=true;
                       this.showEdit[index] = true;
                       this.$set(this.showEdit,index,true);
                   }
               }else if(row.CompCode=="HLIM"){
                   if( !this.edit){
                       this.edit=true;
                       this.showEdit[index] = true;
                       this.$set(this.showEdit,index,true);
                   }
               // }else if(row.CompCode=="PRICE"){
               //     if( !this.edit){
               //         this.edit=true;
               //         this.showEdit[index] = true;
               //         this.$set(this.showEdit,index,true);
               //     }
                }else {
                   if(this.edit){
                       this.edit=false;
                       this.showEdit[0] = false;
                       this.$set(this.showEdit,index,false);
                       this.showEdit[1] = false;
                       this.$set(this.showEdit,index,false);
                       // this.showEdit[9] = false;
                       // this.$set(this.showEdit,index,false);
                       this.$axios.get('/FuelOilService.asmx/OptimizeRecipeCalculate?propNo='+this.activeName2).then(res=> {
                           this.compConfigList = res.data.compConfigList;
                           this.data = res.data.data;
                           if(this.activeName2=="Prop1"){
                               this.production=res.data.production;
                               // this.cost=res.data.cost;
                               // this.gain=res.data.gain;
                               this.cost= parseFloat(res.data.cost).toFixed(0);
                               this.gain=parseFloat(res.data.gain).toFixed(0);
                           }else if(this.activeName2=="Prop2"){
                               this.production2=res.data.production;
                               // this.cost2=res.data.cost;
                               // this.gain2=res.data.gain;
                               this.cost2= parseFloat(res.data.cost).toFixed(0);
                               this.gain2=parseFloat(res.data.gain).toFixed(0);
                           }else {
                               this.production3=res.data.production;
                               // this.cost3=res.data.cost;
                               // this.gain3=res.data.gain;
                               this.cost3= parseFloat(res.data.cost).toFixed(0);
                               this.gain3=parseFloat(res.data.gain).toFixed(0);
                           }
                       })
                   }

               }

                // if(row.CompCode=="LLIM"&&row.CompCode=="HLIM"&&row.CompCode=="PRICE"){
                //    this.edit=true;
                //     this.showEdit[index] = true;
                //     this.$set(this.showEdit,index,true);
                // }else {
                //     this.showEdit[7] = false;
                //     this.$set(this.showEdit,index,false);
                //     this.$axios.get('/FuelOilService.asmx/OptimizeRecipeCalculate?propNo='+this.activeName2).then(res=> {
                //         this.compConfigList = res.data.compConfigList;
                //         this.data = res.data.data;
                //         if(this.activeName2=="Prop1"){
                //             this.production=res.data.production;
                //         }else {
                //             this.production2=res.data.production;
                //         }
                //     })
                // }
            },
            //点击回车
            submitForm(index,row){
                this.flag=1;
                this.showEdit[index] = false;
                this.$set(this.showEdit,index,false);
                this.edit=false;
                let aa=JSON.stringify(row);
                this.$axios.get('/FuelOilService.asmx/updatePropValue?propertyValue='+aa).then(res =>{
                    //console.log(res);
                    if(res.data.success){
                        if(this.activeName2=="Prop1"){
                            this.getProData();
                        }else if(this.activeName2=="Prop2"){
                            this.getPro2Data();
                        }else {
                            this.getPro3Data();
                        }
                        // this.$message({
                        //     message:res.data.msg,
                        //     type:'success'
                        // });
                    }else {
                        this.status=false;
                        if(this.activeName2=="Prop1"){
                            this.getProData();
                        }else if(this.activeName2=="Prop2"){
                            this.getPro2Data();
                        }else {
                            this.getPro3Data();
                        }
                        //this.getProData();
                        this.$message({
                            message:res.data.msg,
                            type:'error'
                        });
                    }
                });
            },

            tableRowStyle({ row,rowIndex }){
                if(row.CompCode!=="LLIM"&&row.CompCode!=="HLIM"){
                    return 'background-color:rgb(245,247,250)';
                }
            },
            //改变表格表头样式
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'background-color: lightblue;color: #fff;font-weight: 500;'
                }
            },
            tableCellColor({ row, column, rowIndex, columnIndex}){
                //console.log(row.CompCode);
                if(row.CompCode=="Vol"||row.CompCode=="PCP"){
                    return 'color:#67c23a';
                }
            },

//改变任意单元格颜色需特别注意scope的用法
            rowClass ({ row, column, rowIndex, columnIndex }) {
                var x=0.999;
                //console.log(row);
                //console.log(column);
                if(this.activeName2=="Prop1"){
                    if (column.property == "CompName"){
                        return 'rgb196'
                    }
                    else if(column.property == "value1"){
                        if(row.CompCode=="KV"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }else if(row.CompCode=="MC"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="DEN"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="SUL"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="CCAI"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="FP"){
                            if(row.value1-(x*row.Prop1)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        return 'bacColor317eb0'

                    }
                    else if(column.property == "Prop2"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop1"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop3"){
                        return 'bacColorf4984e'
                    }
                }
                else if(this.activeName2=="Prop2") {
                    if (column.property == "CompName"){
                        return 'rgb196'
                    }
                    else if(column.property == "value1"){
                        if(row.CompCode=="KV"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }else if(row.CompCode=="MC"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="DEN"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="SUL"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="CCAI"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="FP"){
                            if(row.value1-(x*row.Prop2)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        return 'bacColor317eb0'
                    }
                    else if(column.property == "Prop2"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop1"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop3"){
                        return 'bacColorf4984e'
                    }
                }else {
                    if (column.property == "CompName"){
                        return 'rgb196'
                    }
                    else if(column.property == "value1"){
                        if(row.CompCode=="KV"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }else if(row.CompCode=="MC"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {

                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="DEN"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="SUL"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="CCAI"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        else if(row.CompCode=="FP"){
                            if(row.value1-(x*row.Prop3)>0){
                                return'warningcolor'
                            }else {
                                return'greencolor'
                            }
                        }
                        return 'bacColor317eb0'

                    }
                    else if(column.property == "Prop2"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop1"){
                        return 'bacColorf4984e'
                    }else if(column.property == "Prop3"){
                        return 'bacColorf4984e'
                    }
                }



            }

        }
    }
</script>

<style>
    .fillContainer{
        width:100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
    .rgb196{
        background: rgb(245,247,250);
    }
    .bacColor317eb0{
        background: rgb(245,247,250);
    }
    .bacColorf4984e{
        background: rgb(245,247,250);
    }
    .greencolor{
        color: #67c23a;
    }
    .warningcolor   {
        color:#E6A23C;
    }
    .proinput{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 30px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        margin-right:10px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100px;

    }
    .prodiv{
        float: right;
        margin-right: 80px;
        padding: 10px;

    }
</style>
