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
    	<router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
	data(){
		return{
			productList:"",
			
		}
	},
	components:{
	},
	methods:{
		
	},
  mounted(){
  	//左侧产品类型
		this.$http.get('../../static/test.json').then(response => {
//    	console.log(response);//成功回调
      	this.productList=response
	  }, response => {
	      console.log("response"); //成功回调
	  });
	 
  }
}
</script>

<style scoped>
	.fadein-enter-active,.fadein-leave-active{transition: all 1s;}
	/*.fadein-enter,.fadein-leave-active{opacity: 0;}*/
	.fadein-enter{
		transform: translateY(-500px);
	}
	.fadein-leave-active{
		transform: translateX(500px);
	}
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
