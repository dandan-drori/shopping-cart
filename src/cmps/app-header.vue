<template>
	<header class="header">
		<div class="logo">
			<img :src="require('@/assets/amoza-logo.jpeg')" alt="logo" />
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/cart">Cart</router-link>
		</div>
	</header>
</template>

<script>
export default {}
</script>
