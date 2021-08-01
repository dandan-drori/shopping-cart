<template>
	<div class="cart">
		<product-preview
			v-for="product in cart"
			:key="product._id"
			:product="product"
			:is-cart="true"
		/>
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
	},
}
</script>
