<script lang="ts" setup>
	import { ref, type Ref } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useTaskStore } from '@/stores/task'

	const isOpen: Ref<boolean> = ref(false)
	const taskStore = useTaskStore()
	const { name, status, description } = storeToRefs(taskStore)
	const props = defineProps<{ task?: Task }>()

	function handleEvents(): void {
		if(props.task === undefined) {
			taskStore.addTask()
		} else {
			taskStore.updateTask(id)
		}
	}

	function handleCancel(): void {
		isOpen.value= false
		props.id = ''
	}


</script>

<template>
	<button @click="isOpen = true">Add</button>
	<Teleport to="body">
		<div v-if="isOpen">
			<label>
				Name
				<input type="text" maxlength="250" v-model="name">
			</label>
			<label>
				Description
				<textarea maxlength="1000" placeholder="Write something..." v-model="description"/>
			</label>
			<label>
				Status
				<select v-model="status" :value="task?.status">
					<option selected value="TO DO">TO DO</option>
					<option value="IN PROGRESS">IN PROGRESS</option>
					<option value="DONE">DONE</option>
				</select>
			</label>
			<button @click="handleEvents">Save</button>
			<button @click="handleCancel">Cancel</button>
		</div>
	</Teleport>
</template>

<style scoped>
	form {
		width: 500px;
		box-shadow: 0px 2px 2px;
		border: solid 1px black;
		background: white;
		padding: 10px;
		position: fixed;
		z-index: 999;
		top: 20%;
		left: 50%;
		margin-left: -150px;
	}

	input, select, textarea {
		width: 100%;
	}
</style>