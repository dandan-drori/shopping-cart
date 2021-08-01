<template>
	<div class="home">
		<product-list />
		<div class="paging">
			<button v-if="pageIdx > 0" @click="prevPage">&lt;</button>
			<div class="current-page">{{ pageIdx + 1 }}</div>
			<button v-if="pageIdx < (productsLength / 6).toFixed(1) + 1" @click="nextPage">&gt;</button>
		</div>
	</div>
</template>

<script>
import productList from '@/cmps/product-list'
export default {
	components: { productList },
	computed: {
		pageIdx() {
			return this.$store.getters.pageIdx
		},
		productsLength() {
			return this.$store.getters.products.length
		},
	},
	methods: {
		prevPage() {
			this.$store.commit({ type: 'prevPage' })
		},
		nextPage() {
			this.$store.commit({ type: 'nextPage' })
		},
	},
}
</script>
