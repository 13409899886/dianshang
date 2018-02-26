// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from "vue-router"
import vueRsourse from "vue-resource"

import HelloWorld from './components/layout.vue'
import Index from './pages/index.vue'
import Dtails from './pages/details.vue'
import Details1 from "./pages/details/details1"
import Details2 from "./pages/details/details2"
import Details3 from "./pages/details/details3"
import Details4 from "./pages/details/details4"

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
		},
		{
			path:"/details/:num",
			component:Dtails,
			children:[
				{
					path:"details1",
					component:Details1,
				},
				{
					path:"details2",
					component:Details2,
				},
				{
					path:"details3",
					component:Details3,
				},
				{
					path:"details4",
					component:Details4,
				}
			]
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
