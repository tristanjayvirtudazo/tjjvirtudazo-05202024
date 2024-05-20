<script lang="ts" setup>
	const props = defineProps(['title'])
</script>

<template>
	<section class="board__container">
		<h2>{{ title }}</h2>

		<ul>
			<li></li>
		</ul>
	</section>
</template>

<style scoped>
	.board__container {

	}
</style>