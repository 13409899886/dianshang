<template>
  <div id="Index">
    <div class="side side-left">
    		<img v-if="productList" :src="'../../static/images/'+productList[nowIndex].Url" style="height: 50px;margin: auto;display: block;margin-bottom: 15px;"/>
	    		<ul >
		    		<template v-for="(item,index) in productList">
			    			<router-link :to="{path:'/details/2/details'+(index+1)}" :class="{active:index==nowIndex}" @click.native="tab(index)" tag="li">{{item.title}}</router-link>
		    		</template>
	    		</ul>
    		
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
			nowIndex:0
			
		}
	},
	components:{
	},
	methods:{
	  tab(index){
	  	console.log
	  	this.nowIndex=index
	  }
	},
  mounted(){
//	console.log(this.$route.params)
  	//左侧产品类型
		this.$http.get('../../static/detailProductList.json').then(response => {
      	console.log(response);//成功回调
      	this.productList=response.body
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
	.side-right{margin-left: 310px; padding: 0; background:#fff;}
	.title{background: #09BB07;color: #fff;padding: 5px;}
	ul{padding-left: 15px; }
	h3{margin: 5px; }
	li{color: #666; cursor:pointer;}
	li:hover,li.active{background:#09BB07;color:#fff;}
	.weui-media-box__hd{background: url(../../static/images/xuezi.jpg) no-repeat center center; background-size:cover;}
	.obj{width: 290px; margin-right: 10px; float: left; margin-bottom:10px;background: #fff;}
	.obj.last{margin-right: 0;}
	.productBox{overflow: hidden;}
	.weui-btn{margin-top: 10px;}
</style>
