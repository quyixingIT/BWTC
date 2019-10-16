<template>
    <div class="fillContainer">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="组分油配置" name="first">
            <el-table
                v-if="tableData.length >0"
                :data="tableData"
                :header-cell-style="tableHeaderColor"
                max-height="600"
                border
                style="width: 100%">
            <el-table-column
                    type="index"
                    align="center"
                    label="序号"
                    width="70">
            </el-table-column>
            <el-table-column
                    prop="CompName"
                    align="center"
                    label="组分油名称"
                    width="250">
                <template slot-scope="{row,$index}">
                    <input class="edit-cell" v-if="showEdit[$index]"    v-model="row.CompName">
                    <span v-if="!showEdit[$index]">{{row.CompName}}</span>
                </template>

            </el-table-column>
            <el-table-column
                    prop="operation"
                    align="center"
                    label="启用/弃用"
                    width="180"
            >
                <template slot-scope="scope">
                    <el-button
                            type="warning"
                            size="mini"
                            icon="edit"
                            :disabled="scope.row.IsEnable===1?true:false"
                            @click="handleStart(scope.$index, scope.row)">启用</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            icon="delete"
                            :disabled="scope.row.IsEnable===0?true:false"
                            @click="handleDelete(scope.$index, scope.row)">弃用</el-button>
                </template>
            </el-table-column>
            <el-table-column

                    label="编辑名称"
                    width="200"
                    align="center">
                <template slot-scope="{row,$index}">

                    <el-button type="danger" size="mini"     @click.native="handelCancel($index, row)"     v-if="showBtn[$index]">取消</el-button>
                    <el-button type="warning" size="mini"     @click.native="handleUpdate($index, row)"     v-if="showBtn[$index]">更新</el-button>
                    <el-button type="warning" size="mini"     @click.native="handleEdit($index, row)"     v-if="!showBtn[$index]">编辑</el-button>

                </template>
            </el-table-column>
        </el-table>
        </el-tab-pane>
        <el-tab-pane label="成品油配置" name="second">
            <el-table
                    v-if="tableData.length >0"
                    :data="tableData"
                    max-height="600"
                    :header-cell-style="tableHeaderColor"
                    border
                    style="width: 100%">
                <el-table-column
                        type="index"
                        align="center"
                        label="序号"
                        width="70">
                </el-table-column>
                <el-table-column
                        prop="CompName"
                        align="center"
                        label="成品油名称"
                        width="250">
                    <template slot-scope="{row,$index}">
                        <el-input class="edit-cell" v-if="showEdit[$index]" v-model="row.CompName"></el-input>
                        <span v-if="!showEdit[$index]">{{row.CompName}}</span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop="operation"
                        align="center"
                        label="启用/弃用"
                        width="180"
                >
                    <template slot-scope="scope">
                        <el-button
                                type="warning"
                                size="mini"
                                icon="edit"
                                :disabled="scope.row.IsEnable===1?true:false"
                                @click="handleStart(scope.$index, scope.row)">启用</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                icon="delete"
                                :disabled="scope.row.IsEnable===0?true:false"
                                @click="handleDelete(scope.$index, scope.row)">弃用</el-button>
                    </template>
                </el-table-column>
                <el-table-column

                        label="编辑名称"
                        width="200"
                        align="center">
                    <template slot-scope="{row,$index}">

                        <el-button type="danger" size="mini"     @click.native="handelCancel($index, row)"     v-if="showBtn[$index]">取消</el-button>
                        <el-button type="warning" size="mini"     @click.native="handleUpdate($index, row)"     v-if="showBtn[$index]">更新</el-button>
                        <el-button type="warning" size="mini"     @click.native="handleEdit($index, row)"     v-if="!showBtn[$index]">编辑</el-button>

                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>

    </el-tabs>
    </div>

</template>

<script>

    export default {
        name: "fundList",
        data(){
            return{
                flag:0,
                activeName2: 'first',
                showEdit: [], //显示编辑框
                showBtn: [],
                showBtnOrdinary: true,
                tableData:[]
            }
        },
        created(){
            this.getProfile();
            // for(var i = 0; i < 100; i ++) {
            //     this.showEdit[i] = false;
            //     this.showBtn[i] = false;
            //     this.$set(vm.showEdit[i], false);
            //     this.$set(vm.showBtn[i], false);
            // }

        },
        methods:{
            //获取组分油数据
                       getProfile(){
                //let token=localStorage.eleToken;
                //获取表格数据
                 //var Flag=this.flag;
                this.$axios.get('/FuelOilService.asmx/getCompConfig?Flag='+this.flag).then(res =>{
                    this.tableData=res.data.data;
                    //this.editForm=res.data.data;
                 })
            },
         //     formatRole(index,row){
         // return row.IsEnable = 0 ? "已弃用": "已启用";
         //     },
            //获取成品油数据

            //点击启用
            handleStart(index, row) {
                row.IsEnable=1;
               this.handleUpdate(index, row);
            },
            //点击弃用
            handleDelete(index, row) {
                row.IsEnable=0;
                this.handleUpdate(index, row);
            },
//点击编辑
            handleEdit(index,row) {
                this.showEdit[index] = true;
                this.showBtn[index] = true;
                this.$set(this.showEdit,index,true);
                this.$set(this.showBtn,index,true);
            },
//取消编辑
            handelCancel(index,row) {
                this.getProfile();
                this.showEdit[index] = false;
                this.showBtn[index] = false;
            },

//点击更新
             handleUpdate(index, row) {
                           if(row.CompName){
                               let aa=JSON.stringify(row);

                               console.log(aa);
                               this.$axios.get('/FuelOilService.asmx/updateCompConfig?compConfig='+aa).then(res =>{
                                   if(res.data.success){
                                       this.getProfile();
                                       this.showEdit[index] = false;
                                       this.showBtn[index] = false;
                                       this.$message({
                                           message:res.data.msg,
                                           type:'success'
                                       });
                                   }else {
                                       this.getProfile();
                                       this.showEdit[index] = false;
                                       this.showBtn[index] = false;
                                       this.$message({
                                           message:res.data.msg,
                                           type:'error'
                                       });
                                   }
                               })
                           }else {
                               this.$message({
                                   message:"组分油名称不能为空！",
                                   type:'error'
                               })
                           }


          },
            handleClick(tab, event) {
                 if(tab.index==1){
                     this.flag=tab.index;
                     this.$axios.get('/FuelOilService.asmx/getCompConfig?Flag='+ this.flag).then(res =>{
                         this.tableData=res.data.data;

                     })
                 }else {
                     this.flag=0;
                     this.$axios.get('/FuelOilService.asmx/getCompConfig?Flag='+this.flag).then(res =>{
                         this.tableData=res.data.data;

                     })
                 }


            },
            //修改表格表头样式
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'background-color: lightblue;color: #fff;font-weight: 500;'
                }
            },
        }
    }
</script>

<style scoped>

    .fillContainer{
        width:100%;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
</style>
