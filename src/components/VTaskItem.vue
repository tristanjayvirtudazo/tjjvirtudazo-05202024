<script lang="ts" setup>
	const props = defineProps<{ task?: Task }>()
	const emits = defineEmits(['start', 'complete', 'edit'])
</script>

<template>
	<li>
		<div>
			<h3>{{ task.name }}</h3>
			<small>{{ task.status }}</small>
			<p>{{ task.description ? task.description : "None" }}</p>
		</div>
		<div class="btn__group">
			<button @click="emits('edit', task)">Edit</button>
			<button @click="emits('start', task.id)">Start task</button>
			<button @click="emits('complete', task.id)">Mark as complete</button>
		</div>
	</li>
	<slot name="modal"/>
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