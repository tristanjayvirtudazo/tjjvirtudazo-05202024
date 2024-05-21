<script lang="ts" setup>
	import VTaskItem from '@/components/VTaskItem.vue'
	import VModal from '@/components/VModal.vue'
	import { useTaskStore } from '@/stores/task'
	import { storeToRefs } from 'pinia'

	const props = defineProps<{ title: string, tasks?: Task[] }>()
	const taskStore = useTaskStore()
	const { id, name, status, description } = storeToRefs(taskStore)

	function handleEdit(task: Task): void {
		id.value = task.id
		name.value = task.name
		status.value = task.status
		description.value = task.description
	}

</script>

<template>
	<section class="board__container">
		<h2>{{ title }}</h2>

		<ul>
			<VTaskItem 
				v-for="task in tasks" 
				:task="task"
				:key="task.id"
				@start="taskStore.startTask($event)"
				@complete="taskStore.markAsDone($event)"
				@edit="handleEdit($event)"
			>
				<template #modal>
					<VModal action="edit"/>
				</template>
			</VTaskItem>
		</ul>
	</section>
</template>

<style scoped>
	.board__container {
		width: 450px;
		border: solid 1px black;
		height: 100vh;
	}
</style>