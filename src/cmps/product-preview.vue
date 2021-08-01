<template>
	<section class="product-preview">
		<img :src="product.imgUrl" alt="product" />
		<h2>{{ product.heading }}</h2>
		<small>${{ product.price }}</small>
		<p v-if="isCart">Quantity: {{ product.quantity }}</p>
		<button @click="addToCart">Add To Cart</button>
	</section>
</template>

<script>
export default {
	props: { product: Object, isCart: Boolean },
	methods: {
		addToCart() {
			this.$store.commit({ type: 'addToCart', product: this.product })
		},
	},
}
</script>
