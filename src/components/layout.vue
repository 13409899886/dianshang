<template>
  <div style="background: #f0f0f0;">
    <div class="header">
    	<img src="../../static/images/logo.png"/>
    	<ul>
    		<li>登陆</li>
    		<li>注册</li>
    		<li>关于</li>
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
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
	img{height: 30px;}
	ul{float: right;overflow: hidden;}
	li{float: left; margin-left: 15px;line-height: 30px; color: #fff; cursor: pointer;}
	.header{padding: 15px; background: #2C3E50;}
	
</style>
