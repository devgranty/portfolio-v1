import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import Scrollspy from 'vue2-scrollspy'
import VueAnalytics from 'vue-ua'

import HomePage from './pages/HomePage/index.vue'
import ShowcasePage from './pages/ShowcasePage/index.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

Vue.use(VueRouter)
Vue.use(VueHead)
Vue.use(Scrollspy)

const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/case/:pageId', name: 'case', component: ShowcasePage},
    {path: '*', name: '404', component: NotFoundPage}
]

const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
	}
})

Vue.use(VueAnalytics, {
	appName: 'Grant Adiele',
	appVersion: '1.1',
	trackingId: 'UA-170094721-1',
	VueRouter: router,
})

var vm = new Vue({
    router
}).$mount('#app')
