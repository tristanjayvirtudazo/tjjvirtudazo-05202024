<script lang="ts" setup>
	import VTaskItem from '@/components/VTaskItem.vue'
	import VModal from '@/components/VModal.vue'
	import { useTaskStore } from '@/stores/task'

	const props = defineProps<{ title: string, tasks?: Task[] }>()
	const taskStore = useTaskStore()

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
			>
				<template #modal>
					<VModal/>
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