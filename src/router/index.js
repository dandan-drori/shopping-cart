import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import cart from '../views/cart'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: home,
	},
	{
		path: '/cart',
		component: cart,
	},
]

const router = new VueRouter({
	routes,
})

export default router
