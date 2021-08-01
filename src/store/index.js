import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [
			{
				_id: 1,
				heading: 'Pinky',
				price: 39.9,
				imgUrl:
					'https://www.carouselshop.co.uk/media/catalog/product/cache/9/image/2000x/040ec09b1e35df139433887a97daa66f/F/0/F04C90EA6083F3C730E25B4D9C64F155.jpg',
			},
			{
				_id: 2,
				heading: 'Doggo',
				price: 49.9,
				imgUrl:
					'https://static.archiesonline.com/public/images/product/large/89070890055602(D)_1.jpg',
			},
			{
				_id: 3,
				heading: 'Oh Deer',
				price: 59.9,
				imgUrl: 'http://wallpapers9.org/wp-content/uploads/2017/12/Christmas-toy-6.jpg',
			},
			{
				_id: 4,
				heading: 'I Am Groot!',
				price: 19.9,
				imgUrl:
					'https://www.disneyfoodblog.com/wp-content/uploads/2020/11/Groot-Interactive-Talking-Toy.jpg',
			},
			{
				_id: 5,
				heading: 'Donkeyyy',
				price: 119.9,
				imgUrl:
					'https://cdn.shopify.com/s/files/1/0012/3420/6827/products/4487_1200x.jpg?v=1536764622',
			},
			{
				_id: 6,
				heading: 'Sus',
				price: 89.9,
				imgUrl:
					'https://bkids.net/wp-content/uploads/2020/11/20cm-Soft-Stuffed-Among-Us-Plush-Toy-Cute-Plush-Among-Us-Game-Alien-Brinquedos-Kids-Toys-5.jpg',
			},
			{
				_id: 7,
				heading: 'Car',
				price: 79.9,
				imgUrl: 'https://img1.cgtrader.com/items/27422/f4158abb9e/car-toy-3d-model-max-obj-fbx.jpg',
			},
		],
		cart: [],
	},
	getters: {
		products(state) {
			return state.products
		},
		cart(state) {
			return state.cart
		},
	},
	mutations: {
		addToCart(state, { product }) {
			const idx = state.cart.findIndex(p => p._id === product._id)
			if (idx === -1) {
				product.quantity = 1
				state.cart.unshift(product)
			} else {
				state.cart[idx].quantity++
			}
		},
	},
})
