<template>
	<header class="header">
		<div class="logo">
			<img :src="require('@/assets/amoza-logo.jpeg')" alt="logo" />
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/cart">Cart</router-link>
			<div class="cart-info">({{ cartLength }} items)</div>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		cartLength() {
			return this.$store.getters.cart.reduce((acc, product) => {
				return acc + product.quantity
			}, 0)
		},
	},
}
</script>
