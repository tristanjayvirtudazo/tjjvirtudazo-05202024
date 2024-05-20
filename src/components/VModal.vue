<script lang="ts" setup>
	import { ref, type Ref, storeToRefs } from 'vue'
	import { useTaskStore } from '@/stores/task'

	const isOpen: Ref<boolean> = ref(false)
	const taskStore = useTaskStore()
	const { name, status, description } = storeToRefs(taskStore)
	const props = defineProps<{ id?: string }>()

	function handleEvents(): void {
		if(!id) {
			taskStore.addTask()
		} else {
			taskStore.updateTask(id)
		}
	}

	function handleCancel(): void {
		isOpen.vaue = false
		props.id = ''
	}


</script>

<template>
	<Teleport to="body">
		<form v-if="isOpen" @submit.prevent="handleAdd">
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
				<select v-model="status">
					<option selected value="TO DO">TO DO</option>
					<option value="IN PROGRESS">IN PROGRESS</option>
					<option value="DONE">DONE</option>
				</select>
			</label>
			<button type="submit">Save</button>
		</form>
		<button @click="handleCancel">Cancel</button>
	</Teleport>
</template>

<style scoped>
	form {
		width: 500px;
		border: solix 1px black;
		background: white;
		padding: 10px;
		position: fixed;
		z-index: 999;
		top: 20%;
		left: 50%;
		margin-left: -150px;
	}

	input {
		width: 100%;
	}
</style>