<template>
    <div class="contain">
<div class="title">
    <img src="../assets/BWlogo.png" class="logo" alt="logo">
    <span class="titleText">宝武炭材新一期苯加氢自适应生产信息系统</span>
</div>
        <div class="content">
            <div class="login">
            <section class="form_container">
            <div class="manage_tip">

            <el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="60px" class="loginForm">
            <el-form-item label="邮箱" prop="Email">
            <el-input  v-model="loginUser.Email" placeholder="请输入email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="Password" :rules="[
      { required: true, message: '密码不能为空'},
    ]">
            <el-input type="password"  v-model="loginUser.Password" placeholder="请输入密码"></el-input>
            </el-form-item>


            <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
            <template>
            <!-- `checked` 为 true 或 false -->
            <el-checkbox class="remeber" v-model="checked" @change="remeber">记住我</el-checkbox>
            </template>
            <div class="tiparea">
            <p>还没有账号？现在<router-link to="/register">注册</router-link></p>
            </div>
            </el-form>
            </div>
            </section>
            </div>

        </div>
    </div>

</template>

<script>
    import  jwt_decode from 'jwt-decode'
    export default {
        name: "login",
        component:{

        },
        data(){

            //var validatePass2 = (rule, value, callback) => {
            //  if (value !== this.registerUser.Password) {
            //  callback(new Error('两次输入密码不一致!'));
            // } else {
            //    callback();
            //  }
            //};
            return{
                checked: false,
                userInfo:[],
                loginUser:{
                    //UserName:'',
                    Email:'',
                    Password:'',

                    //RoleCode:''
                },
                rules: {
                    Email:[{
                        type:"email",
                        required:"true",
                        message:'邮箱格式不正确',
                        trigger:'blur'

                    }],
                    Password:[
                        {
                            required:false,
                            message:"密码不能为空",
                            trigger:'blur'
                        },{
                            min:6,
                            max:30,
                            message:"长度在6到30之间",
                            trigger:'blur'
                        }
                    ],
                    // password2:[ {
                    //required:true,
                    // message:"确认密码不能为空",
                    // trigger:'blur'
                    // },
                    //{
                    // min:6,
                    // max:30,
                    // message:"长度在6到30之间",
                    //trigger:'blur'
                    // },
                    // {
                    //validator:validatePass2,
                    // trigger:'blur'

                    //}
                    // ]
                }
            }
        },
        mounted(){
            // if(localStorage.getItem("eleUserinfo")){
            //     this.remeberme();
            // }
            this.checked=localStorage.getItem("checked");
            //console.log(this.checked);
            if(this.checked){
                this.remeberme();
            }


        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //let aa=JSON.stringify(this.loginUser);
                        let userEmail=this.loginUser.Email;
                        let password=this.loginUser.Password;
                      //  this.$axios({
                        //    method:'get',
                         //   url:'/FuelOilService.asmx/login?userName='+userEmail+'&password='+password,
                        //    responseType:'json',
                       // }).then(res=>{
                       //     console.log(res);
                      //  })
                        this.$axios.get('/api/Login/login?userName='+userEmail+'&password='+password).then(res=>{
                           //console.log(res);
                           if (res.data.success){
                              let userinfo = JSON.stringify(res.data.user);
                               let token = res.data.data;
                               //let token =res.data.data;
                               localStorage.setItem('eleUserinfo',userinfo);
                               localStorage.setItem('eleToken',token);
                               //解析token
                               //let decoded=jwt_decode(token);

                               this.$store.dispatch("setAuthenticated",!this.isEmpty(localStorage.eleUserinfo));
                               this.$store.dispatch("setUser",localStorage.eleUserinfo);
                                this.$router.push('/index');
                           }else {
                               this.$message({
                                   message:res.data.msg,
                                   type:'error'
                               });
                            }
                        });
                    }
                });
            },
            remeberme(){
                    //this.checked = true;
                    this.userInfo=JSON.parse(localStorage.getItem("eleUserinfo"));
                    this.loginUser.Password=this.userInfo.Password;
                    this.loginUser.Email=this.userInfo.UserEmail;
                // this.checked=true;
                // this.userInfo=JSON.parse(localStorage.getItem("eleUserinfo"));
                // this.loginUser.Password=this.userInfo.Password;
                // this.loginUser.Email=this.userInfo.UserEmail;
            },
            remeber(){
                localStorage.setItem('checked',this.checked);
            },
            isEmpty(value){
                return(
                    value ===undefined||
                            value ===null ||
                    (typeof value === "object"&&Object.keys(value).length ===0)||
                    (typeof value ==="string"&& value.trim().length ===0)
                );
            }
        }
    }
</script>

<style scoped>
    .contain {
        /*position: relative;*/
        width: 100%;
        height: 100%;
        background-color: #000;
        background-size: 100% 100%;
    }
    .title {
        position: relative;
        width: 100%;
        height: 80px;
        border: none;
        color:#ffff;
        font-size:2em;

        /*line-height: 80px;*/
        /*vertical-align:middle;*/
        /*text-align: center;*/
    }
    /*.manage_tip{*/
        /*border: 1px solid darkgrey;*/
        /*width: 350px;*/

    /*}*/
    .title1{
        font-family: "Microsoft YaHei";
        /*font-weight: bold;*/
        font-size: 23px;
        color: #fff;

    }
    .form_container .manage_tip  {
        font-family: "Microsoft YaHei";
        /*font-weight: bold;*/
        font-size: 23px;
        color: #fff;
    }
    .logo{
        height:80px;
        width:160px;
    }
    .titleText{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

    }
    .content{
        height: 100%;
        width: 100%;
        border-top: 2px solid darkgrey;
        overflow: hidden;
        /*background-image: url("../assets/BWbg.png") ;*/
        background:url("../assets/BWbg.png") no-repeat;
        background-size: 100% 100%


    }
    .login{
        margin-left: 60%;
        margin-top: 10%;
        /*width: 400px;*/
        /*height: 600px;*/
        /*margin-left: 800px;*/
    }
    .loginForm {
        width:70%;
        height:100%;
        /*margin-top: 20px;*/

        background-color: rgb(8,44,44);
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;
    }

    .submit_btn {
        width: 100%;
    }
    .tiparea {
        text-align: right;
        font-size: 12px;
        color: #333;
    }
    .tiparea p a {
        color: #409eff;
    }
    .remeber{
        float:left;
        margin-left: 20px;
    }
</style>







