<template>
  <div style="background: #f0f0f0; min-height: 100%;">
    <div class="header">
    	<router-link :to="{path:'/'}">
    	<img src="../../static/images/logo.png"/>
    	</router-link>
    	<ul>
    		<li @click="show('Login')">登陆</li>
    		<li @click="show('Regist')">注册</li>
    		<li @click="show('About')">关于</li>
    	</ul>
    </div>
    <router-view style="width: 900px; margin: auto;"></router-view>
    <div class="footer">
    	<div class="weui-footer">
        <p class="weui-footer__links">
            <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
            <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
        </p>
        <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
    	</div>
    </div>
    <my-dialog :isshow="isShow" @close="onclose('isShow')">
    	<div :is="cont" ></div><!--动态组件-->
    </my-dialog>
    
    
  </div>
</template>

<script>
import myDialog from "./dialog"
import Login from "./Login"
import Regist from "./regist"
import About from "./About"
export default {
	data(){
		return {
			isShow:false,
			
			cont:"",
			comp:""
		}
	},
  components:{
  	myDialog,Login,Regist,About
  },
  methods:{
  	show(val){
  		this.isShow=true
  		this.cont=val
  	},
  	onclose(val){
  		this.isShow=false
  	}
  }
}
</script>

<style scoped>
	img{height: 30px;}
	ul{float: right;overflow: hidden;}
	li{float: left; margin-left: 15px;line-height: 30px; color: #fff; cursor: pointer;}
	.header,.footer{padding: 15px; background: #2C3E50;}
	
</style>
