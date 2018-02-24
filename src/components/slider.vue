<template>
  <div class="slideBox">
    <div>
    	as
    </div>
    <h3>464646</h3>
    <ul class="slidePages" >
    	<li>&lt;</li>
    	<li>2</li>
    	<li>5</li>
    	<li>&gt;</li>
    </ul>
  </div>
</template>

<script>

export default {
	props:{
		sliders:{
			type:Array,
			default:[]
		}
	},
	mounted(){
	},
	watch:{
		sliders(){
			console.log(this.sliders)
		}
	}
}
</script>

<style scoped>
	ul{overflow: hidden;}
	li{float: left; margin-left: 5px;}
	.slideBox{position: relative;}
</style>
