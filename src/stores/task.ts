import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
	
export const useTaskStore = defineStore('task', () => {
	const tasks: Ref<Task[]> = ref([
		{
		    "id": "a47e88a8-1c0f-4d61-a3d6-8a5b6f0f4f2a",
		    "name": "Task 1",
		    "status": "TO DO",
		    "description": "This is the first task."
		  },
		  {
		    "id": "b59f1b85-6b4c-4a9a-a2d3-ecb6e8ed9f4e",
		    "name": "Task 2",
		    "status": "IN PROGRESS",
		    "description": "This task is currently being worked on."
		  },
		  {
		    "id": "c68e2e99-2f45-4298-9d4c-8157d6b6f67e",
		    "name": "Task 3",
		    "status": "DONE",
		    "description": "This task has been completed."
		  },
		  {
		    "id": "d78f3a7d-3e5b-4e99-9b2c-2f78e6f7f4d8",
		    "name": "Task 4",
		    "status": "TO DO",
		    "description": "This task is waiting to be started."
		  },
		  {
		    "id": "e89f4b8a-4e0c-4a8a-9d5d-3f89f9e8f8e7",
		    "name": "Task 5",
		    "status": "IN PROGRESS"
		  }
	])
	const name: Ref<string> = ref('')
	const status: Ref<string> = ref('TO DO')
	const description: Ref<string | undefined> = ref(undefined)
	const todoList: Ref<Task[]> = computed(() => {
		return tasks.value.filter((task: Task): boolean => task.status === "TO DO")
	})
	const inprogList: Ref<Task[]> = computed(() => {
		return tasks.value.filter((task: Task): boolean => task.status === "IN PROGRESS")
	})
	const doneList: Ref<Task[]> = computed(() => {
		return tasks.value.filter((task: Task): boolean => task.status === "DONE")
	})

	function addTask(): void {
		tasks.value.push({
			id: crypto.randomUUID(),
			name: name.value,
			status: status.value,
			description: description.value 
		} as Task)

		name.value = ''
		status.value = ''
		description.value = undefined
	}

	function updateTask(id: string): void {
		const found = tasks.value.find((task:Task) => {
			if(task.id === id) {
				task.name = name.value
				task.status = status.value
				task.description = description.value
			}
		})

		name.value = ''
		status.value = ''
		description.value = undefined
	}

	function startTask(id: string): void {
		const found = tasks.value.find((task:Task) => {
			if(task.id === id) {
				task.status = "IN PROGRESS"
			}
		})
	}

	function markAsDone(id: string): void {
		const found = tasks.value.find((task:Task) => {
			if(task.id === id) {
				task.status = "DONE"
			}
		})
	}

	return { 
		todoList, 
		inprogList, 
		doneList, 
		tasks, 
		name, 
		status, 
		description, 
		addTask, 
		updateTask, 
		startTask, 
		markAsDone
	}
})