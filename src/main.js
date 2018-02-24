// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from "vue-router"
import vueRsourse from "vue-resource"

import HelloWorld from './components/layout.vue'
import Index from './pages/index.vue'



Vue.use(vueRouter)
Vue.use(vueRsourse)
Vue.config.productionTip = false

let router=new vueRouter({
	mode:"history",
	base:"",//服务器根目录下的路径
	routes:[
		{
			path:"/",
			component:Index
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { HelloWorld },
  template: '<HelloWorld />'
})
