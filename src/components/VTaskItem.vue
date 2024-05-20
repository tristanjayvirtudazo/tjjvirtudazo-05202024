<script lang="ts" setup>
	const props = defineProps<{ task?: Task }>()
</script>

<template>
	<li>
		<div>
			<h3>{{ task.name }}</h3>
			<small>{{ task.status }}</small>
			<p>{{ task.description ? task.description : "None" }}</p>
		</div>
		<div class="btn__group">
			<button>Edit</button>
			<button>Start task</button>
			<button>Mark as complete</button>
		</div>
	</li>
</template>

<style scoped>
	.btn__group {
		
	}
</style>