<template>
  <div id="Index">
    <div class="side side-left">
    		<div class="title">全部产品</div>
    		<template v-for="item in productList.body">
	    		<h3 >{{item.title}}</h3>
	    		<ul >
	    			<li v-for="item in item.list" >{{item.name}} <span v-if="item.hot">HOT</span> </li>
	    		</ul>
    		</template>
    </div>
    <div class="side side-right">
    	<slider :sliders="sliderList"></slider>
    	<div class="productBox">
    		<div class="obj" v-for="(item,index) in product.body" :class="{last:index%2!==0}">
    			<div class="weui-media-box weui-media-box_appmsg">
	            <div class="weui-media-box__hd" :style="'background-image: url(../../static/images/'+item.Url+');'"></div>
	            <div class="weui-media-box__bd">
	                <h4 class="weui-media-box__title">{{item.title}}</h4>
	                <p class="weui-media-box__desc">{{"$"+item.price}}</p>
	                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">购买</a>
	            </div>
	        </div>
    		</div>
    		
    	</div>
    </div>
    
  </div>
</template>

<script>
import Slider from "../components/slider"
export default {
	data(){
		return{
			productList:"",
			product:"",
			sliderList:[]
		}
	},
	components:{
		Slider
	},
  mounted(){
  	//左侧产品类型
		this.$http.get('../../static/test.json').then(response => {
//    	console.log(response);//成功回调
      	this.productList=response
	  }, response => {
	      console.log("response"); //成功回调
	  });
	  //右下部产品购买
	  this.$http.get('../../static/productList.json').then(response => {
//    	console.log(response);//成功回调
      	this.product=response
	  }, response => {
	      console.log("response"); //成功回调
	  });
	  //获取轮播参数
	  this.$http.get('../../static/sliderList.json').then(response => {
      	
      	this.sliderList=response.body
      	console.log(this.sliderList);//成功回调
	  }, response => {
	      console.log("response"); //成功回调
	  });
  }
}
</script>

<style scoped>
	#Index{overflow: hidden;}
	.side{padding: 10px;}
	.side-left{float: left; width: 300px; background: #fff;}
	.side-right{margin-left: 310px; padding: 0;}
	.title{background: #09BB07;color: #fff;padding: 5px;}
	ul{padding-left: 15px; }
	h3{margin: 5px; }
	li{color: #666; cursor:pointer;}
	li:hover{background:#09BB07;color:#fff;}
	.weui-media-box__hd{background: url(../../static/images/xuezi.jpg) no-repeat center center; background-size:cover;}
	.obj{width: 290px; margin-right: 10px; float: left; margin-bottom:10px;background: #fff;}
	.obj.last{margin-right: 0;}
	.productBox{overflow: hidden;}
	.weui-btn{margin-top: 10px;}
</style>
