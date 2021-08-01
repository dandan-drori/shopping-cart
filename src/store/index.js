import Vue from 'vue'
import Vuex from 'vuex'
import { productService } from '../services/product-service.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pageIdx: 0,
		products: productService.query(0),
		cart: [],
	},
	getters: {
		products(state) {
			return state.products
		},
		cart(state) {
			return state.cart
		},
		pageIdx(state) {
			return state.pageIdx
		},
	},
	mutations: {
		addToCart(state, { product }) {
			const idx = state.cart.findIndex(p => p._id === product._id)
			if (idx === -1) {
				product.quantity = 1
				state.cart.unshift(product)
			} else {
				const updatedProduct = state.cart[idx]
				updatedProduct.quantity++
				state.cart.splice(idx, 1, updatedProduct)
			}
		},
		nextPage(state) {
			if (state.pageIdx === (state.products.length / 6).toFixed(1) + 1) return
			state.pageIdx++
			state.products = productService.query(state.pageIdx)
		},
		prevPage(state) {
			if (state.pageIdx === 0) return
			state.pageIdx--
			state.products = productService.query(state.pageIdx)
		},
	},
})
