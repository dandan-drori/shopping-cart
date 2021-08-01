<template>
	<section class="product-list">
		<product-preview v-for="product in products" :key="product._id" :product="product" />
	</section>
</template>

<script>
import productPreview from './product-preview'
export default {
	components: { productPreview },
	computed: {
		products() {
			return this.$store.getters.products
		},
	},
}
</script>
