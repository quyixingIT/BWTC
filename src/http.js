import  axios from 'axios';
import { Message,Loading } from 'element-ui';
import  router from './router';
let loading;
function startLoading() {
    loading =Loading.service({
        lock:true,
        text:"拼命加载中...",
        background:'rgba(0,0,0,0,7)',
        target:document.querySelector('.rightContainer'),//设置加载动画区域
    });
    loadingArray.push(loading);

}
function endLoading() {
    if (!loadCount) {
        loadingArray.forEach(item=>item.close())
    }
    //loading.close();
}
let loadCount = 0, loadingArray=[];
//请求拦截
axios.interceptors.request.use(config =>{
    config.baseURL='http://192.168.1.113:82';
    loadCount++;
    //加载动画
    startLoading();
    if(localStorage.eleToken){
        //设置统一的请求头
        config.headers.Authorization=localStorage.eleToken;

    }
    return config;
},error => {
    loadCount--
    if (!loadCount) {
        loadingArray.forEach(item=>item.close())
    }
    return Promise.reject(error);
});
//响应拦截
axios.interceptors.response.use(response =>{
    loadCount--
    //结束加载动画
    endLoading();
    return response;

},error => {
    //错误提醒
    endLoading();
    Message.error(error.response.data);
    //获取错误状态码
    const { status} =error.response;
    if (status ==401){
        Message.error("token失效，请重新登录！");
        //清除token
        localStorage.removeItem("eleToken");
        //跳转到登录界面
        router.push("/login");

    }
    return Promise.reject(error);
})
export  default  axios;
