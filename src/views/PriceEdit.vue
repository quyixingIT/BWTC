<template>
<div>
    <div class="fillContainer">
        <!--:header-cell-style="tableHeaderColor"-->
                <el-table
                        :data="tableData"
                        v-if="tableData.length >0"
                        max-height="600"

                        border
                        style="width: 100%">
                    <el-table-column

                            align="center"
                            label="能耗介质"
                            width="180">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.MediumName }}</span>
                        </template>
                    </el-table-column>

                    <!--<el-table-column  v-for="col in cols":label="col.CompName" :property="col.CompCode"-->
                                      <!--width="120" align="center">-->
                        <!--<template slot-scope="scope">-->
                            <!--<el-input  v-model="scope.row[scope.column.property]" v-if="showEdit[scope.$index]"></el-input>-->
                            <!--<span v-if="!showEdit[scope.$index]">{{scope.row[scope.column.property]}}</span>-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                    <el-table-column

                            align="center"
                            label="单位"
                            width="180">
                        <template slot-scope="scope">
                            <!--<i class="el-icon-time"></i>-->
                            <span style="margin-left: 10px">{{ scope.row.MediumUnit }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column

                            align="center"
                            label="价格"
                            width="180">
                        <template slot-scope="scope">
                            <!--<i class="el-icon-time"></i>-->
                            <span style="margin-left: 10px">{{ scope.row.Price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column

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



    </div>
</div>
</template>

<script>
    export default {
        name: "PriceEdit",
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
                this.$axios.get('/api/MediumPrice/getMediumPriceList').then(res=>{
                    console.log(res);
                    this.tableData=res.data.mediumPrice;
                    var tableData=res.data.mediumPrice;
                    console.log(tableData);
                    //this.cols=res.data.compConfigList;
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
                    this.getList();
                    this.showEdit[index] = false;
                    this.showBtn[index] = false;
                },


//点击更新
            handleUpdate(index, row) {
                console.log(row);
                let aa=JSON.stringify(row);
                    this.$axios.get('/FuelOilService.asmx/updatePropertyValue?propertyValue='+aa).then(res =>{

                    })

            },
            // handleClick(tab, event) {
            //     if(tab.index==1){
            //         this.flag=1;
            //         this.getProList();
            //     }else {
            //         this.flag=0;
            //         this.getList();
            //     }
            //
            //
            // },
            // //修改表格表头样式
            // tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            //     if (rowIndex === 0) {
            //         return 'background-color: lightblue;color: #fff;font-weight: 500;'
            //     }
            // },
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
    .el-table{
         /* 表格字体颜色 */
                 color:white;
         /* 表格边框颜色 */
                  border: 0.5px solid #758a99;
                 height: 500px;
         }
    /* 表格内背景颜色 */
     .el-table th, .el-table tr,.el-table td{
            border: 0;
            background-color: transparent;
            }
     /* 双数行背景颜色 */
     .el-table--striped .el-table__body tr.el-table__row--striped td {

                    background-color:#fff;
            background-color: rgba(148, 144, 144, 0.3)
            }
     /* 使表格背景透明 */
     .el-table th, .el-table tr {
            background-color: transparent;
            }
     /* 删除表格下横线 */
     .el-table::before {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0px;
            }
     /* 表格表头字体颜色 */
     .el-table thead {
            color: white;
            font-weight: 500;
            background-color: rgba(148, 144, 144, 0.3)
            }
</style>
