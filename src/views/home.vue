<template>
	<div class="home">
		<product-list />
		<div class="paging">
			<button>&lt;</button>
			<div class="current-page">1</div>
			<button>&gt;</button>
		</div>
	</div>
</template>

<script>
import productList from '@/cmps/product-list'
export default {
	components: { productList },
}
</script>
