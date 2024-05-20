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
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20;
	}

	li {
		border: solid 1px black;
		margin: 5px;
		padding: 5px;
	}
</style>