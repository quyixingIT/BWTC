<template>
  <header id="head-nav"  class="head-nav"style="overflow: hidden">
      <el-row>
          <el-col :span="6" class="logo-container">
              <img src="../assets/BWlogo.png" class="logo" alt="">
              <span class="title">宝武炭材新一期苯加氢自适应生产信息系统</span>
          </el-col>
          <el-col :span="6" class="user">
              <div class="userinfo">
                  <img src="" class="avatar" alt="" >
                  <div class="welcome">
                      <p class="name comename">欢迎</p>
                      <p class="name avatarname">{{user.UserName}}</p>
                  </div>
                  <span class="username">
                      <!--下拉箭头哦 -->
<el-dropdown trigger="click" @command="setDialogInfo">
  <span class="el-dropdown-link">
    <i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="info">个人信息</el-dropdown-item>
    <el-dropdown-item command="logout">登出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
                  </span>
              </div>
          </el-col>
      </el-row>
  </header>
</template>
<script>
    export default {
        name:'head-nav',
        computed:{
            user(){
                //let  aa=localStorage.eleToken;
                return JSON.parse(this.$store.getters.user);
            }
        },
        methods:{
            setDialogInfo(cmdItem){
                switch (cmdItem) {
                    case "info":
                        this.showInfoList();
                        break;
                    case 'logout':
                        this.logout();
                        break;
                }
            },
            showInfoList(){
this.$router.push('/infoshow');
            } ,
            logout(){
                //清楚token
              localStorage.removeItem("eleToken");
              //设置vuex store
                this.$store.dispatch('clearCurrentState');
                //跳转的登陆界面
                this.$router.push("/login");
            }
        }
    };
</script>
<style scoped>
    .head-nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #0B2643;
        color: #fff;
        border-bottom: 5px solid #016577;
    }
    .logo-container {
        line-height: 60px;
        min-width: 700px;
    }
    .logo {
        height: 50px;
        width: 190px;
        margin-right: 5px;
        vertical-align: middle;
        display: inline-block;
    }
    .title {
        vertical-align: middle;
        font-size: 22px;
        font-family: "Microsoft YaHei";
        letter-spacing: 3px;
    }
    .user {
        line-height: 60px;
        text-align: right;
        float: right;
        padding-right: 10px;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        padding: 0 5px;
    }
    .name {
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }
    .comename {
        font-size: 12px;
    }
    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }
    .username {
        cursor: pointer;
        margin-right: 5px;
    }
   .el-dropdown {
        color: #fff;
    }
</style>
