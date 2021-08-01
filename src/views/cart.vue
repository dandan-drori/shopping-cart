<template>
	<div class="cart-container">
		<div class="cart">
			<product-preview
				v-for="product in cart"
				:key="product._id"
				:product="product"
				:is-cart="true"
			/>
		</div>
		<div class="total">Total: ${{ total }}</div>
	</div>
</template>

<script>
import productPreview from '@/cmps/product-preview'
export default {
	components: { productPreview },
	computed: {
		cart() {
			return this.$store.getters.cart
		},
		total() {
			return this.cart.reduce((acc, product) => {
				return acc + product.price * product.quantity
			}, 0)
		},
	},
}
</script>
