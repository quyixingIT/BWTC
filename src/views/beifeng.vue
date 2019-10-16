<template>
    <div class="fillContainer">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="组分油参数" name="first">
                <el-table
                        :data="tableData"
                        v-if="tableData.length >0"
                        max-height="600"
                        :header-cell-style="tableHeaderColor"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="CompName"
                            align="center"
                            label="属性名"
                            width="180">
                    </el-table-column>

                    <el-table-column  v-for="col in cols":label="col.CompName" :property="col.CompCode"
                                      width="120" align="center">
                        <template slot-scope="scope">
                            <el-input  v-model="scope.row[scope.column.property]" v-if="showEdit[scope.$index]"></el-input>
                            <span v-if="!showEdit[scope.$index]">{{scope.row[scope.column.property]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="operation123"
                            align="center"
                            label="操作"
                            width="180">
                        <template slot-scope="{row,$index}">

                            <div v-if="row.CompCode!=='CCAI'">
                                <el-button type="danger" size="mini"     @click.native="handelCancel($index, row)"     v-if="showBtn[$index]">取消</el-button>
                                <el-button type="warning" size="mini"     @click.native="handleUpdate($index, row)"     v-if="showBtn[$index]">更新</el-button>
                                <el-button type="warning" size="mini"     @click.native="handleEdit($index, row)"     v-if="!showBtn[$index]">编辑</el-button>
                            </div>
                        </template>

                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="成品油指标" name="second">
                <el-table
                        :data="ProData"
                        v-if="ProData.length >0"
                        :header-cell-style="tableHeaderColor"
                        max-height="600"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="CompName"
                            align="center"
                            label="属性名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="Relation"
                            align="center"
                            label="关系"
                            width="180">
                    </el-table-column>
                    <el-table-column  v-for="col in cols":label="col.CompName" :property="col.CompCode"
                                      width="120" align="center">
                        <template slot-scope="scope">
                            <el-input  v-model="scope.row[scope.column.property]" v-if="showEdit[scope.$index]"></el-input>
                            <span v-if="!showEdit[scope.$index]">{{scope.row[scope.column.property]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="operation123"
                            align="center"
                            label="操作"
                            width="180">

                        <template slot-scope="{row,$index}">
                            <div v-if="row.CompCode!=='CCAI'">
                                <el-button type="danger" size="mini"     @click.native="handelCancel($index, row)"     v-if="showBtn[$index]">取消</el-button>
                                <el-button type="warning" size="mini"     @click.native="handleUpdate($index, row)"     v-if="showBtn[$index]">更新</el-button>
                                <el-button type="warning" size="mini"     @click.native="handleEdit($index, row)"     v-if="!showBtn[$index]">编辑</el-button>
                            </div>
                        </template>

                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        name: "beifeng",
        data(){
            return {
                cols:[],
                tableData:[],
                showEdit: [], //显示编辑框
                showBtn: [],
                activeName2: 'first',
                ProData:[],
                flag:0,
                // showBtnOrdinary: true,
            }
        },
        created(){
            this.getList();
        },
        methods:{
            //获取组分油数据
            getList:function (){
                this.$axios.get('/FuelOilService.asmx/getCompAndProdProperty').then(res=>{
                    // console.log(res);
                    this.tableData=res.data.data;
                    this.cols=res.data.compConfigList;
                })
            },
            getProList:function (){
                this.$axios.get('/FuelOilService.asmx/getCompAndProdProperty').then(res=>{
                    //console.log(res.data.data.CompName);
                    this.ProData=res.data.data;
                    //console.log(res);
                    this.cols=res.data.productConfigList;
                })
            },
            handleEdit(index,row) {
                this.showEdit[index] = true;
                this.showBtn[index] = true;
                this.$set(this.showEdit,index,true);
                this.$set(this.showBtn,index,true);
            },
//取消编辑
            handelCancel(index,row) {
                if (this.flag==0) {
                    this.getList();
                    this.showEdit[index] = false;
                    this.showBtn[index] = false;
                }else {
                    this.getProList();
                    this.showEdit[index] = false;
                    this.showBtn[index] = false;
                }

            },

//点击更新
            handleUpdate(index, row) {
                console.log(row);
                let aa=JSON.stringify(row);
                if(this.flag==0){
                    this.$axios.get('/FuelOilService.asmx/updatePropertyValue?propertyValue='+aa).then(res =>{
                        // this.getList();
                        // this.showEdit[index] = false;
                        // this.showBtn[index] = false;
                        if(res.data.success){
                            this.getList();
                            this.showEdit[index] = false;
                            this.showBtn[index] = false;
                            this.$message({
                                message:res.data.msg,
                                type:'success'
                            });
                        }else {
                            this.getList();
                            this.showEdit[index] = false;
                            this.showBtn[index] = false;
                            this.$message({
                                message:res.data.msg,
                                type:'error'
                            });
                        }
                    })
                }else {
                    this.$axios.get('/FuelOilService.asmx/updatePropertyValue?propertyValue='+aa).then(res =>{
                        // this.getList();
                        // this.showEdit[index] = false;
                        // this.showBtn[index] = false;
                        if(res.data.success){
                            this.getProList();
                            this.showEdit[index] = false;
                            this.showBtn[index] = false;
                            this.$message({
                                message:res.data.msg,
                                type:'success'
                            });
                        }else {
                            this.getProList();
                            this.showEdit[index] = false;
                            this.showBtn[index] = false;
                            this.$message({
                                message:res.data.msg,
                                type:'error'
                            });
                        }
                    })
                }



            },
            handleClick(tab, event) {
                if(tab.index==1){
                    this.flag=1;
                    this.getProList();
                }else {
                    this.flag=0;
                    this.getList();
                }


            },
            //修改表格表头样式
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'background-color: lightblue;color: #fff;font-weight: 500;'
                }
            },
            //     formatRole(index,row){
            // return row.IsEnable = 0 ? "已弃用": "已启用";
            //     },
        },

    }
</script>

<style scoped>
    .fillContainer{
        width:100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
    /*.demo-table-expand {*/
    /*font-size: 0;*/
    /*}*/
    /*.demo-table-expand label {*/
    /*width: 90px;*/
    /*color: #99a9bf;*/
    /*}*/
    /*.demo-table-expand .el-form-item {*/
    /*margin-right: 0;*/
    /*margin-bottom: 0;*/
    /*width: 50%;*/
    /*}*/
</style>
