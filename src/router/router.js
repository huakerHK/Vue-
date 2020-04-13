import Vue from 'vue'
import Route from 'vue-router'

import Home from '../components/home.vue'
import Infes from '../components/infes.vue'
import About from '../components/about.vue'
import Production from '../components/production.vue'

Vue.use(Route);
export default new Route({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',name:Home,component:Home},
		{path:'/production',name:Production,component:Production},
		{path:'/infes',name:Infes,component:Infes},
		{path:'/about',name:About,component:About}
		
	]
})