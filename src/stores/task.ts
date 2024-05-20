import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
	
export const useTaskStore = defineStore('task', () => {
	const tasks: Ref<Task[]> = ref([
		{
		    "id": "a47e88a8-1c0f-4d61-a3d6-8a5b6f0f4f2a",
		    "name": "Task 1",
		    "status": "Pending",
		    "description": "This is the first task."
		  },
		  {
		    "id": "b59f1b85-6b4c-4a9a-a2d3-ecb6e8ed9f4e",
		    "name": "Task 2",
		    "status": "In Progress",
		    "description": "This task is currently being worked on."
		  },
		  {
		    "id": "c68e2e99-2f45-4298-9d4c-8157d6b6f67e",
		    "name": "Task 3",
		    "status": "Completed",
		    "description": "This task has been completed."
		  },
		  {
		    "id": "d78f3a7d-3e5b-4e99-9b2c-2f78e6f7f4d8",
		    "name": "Task 4",
		    "status": "Pending",
		    "description": "This task is waiting to be started."
		  },
		  {
		    "id": "e89f4b8a-4e0c-4a8a-9d5d-3f89f9e8f8e7",
		    "name": "Task 5",
		    "status": "In Progress"
		  }
	])
	const name: Ref<string> = ref('')
	const status: Ref<string> = ref('TO DO')
	const description: Ref<string | undefined> = ref(undefined)
	const taskLists: Ref<Task[]> = computed(() => {
		return tasks.value
	})

	function addTask(): void {
		if(name.length <= 250 && description?.value.length <= 1000) {
			tasks.value.push({
				name: name.value,
				status: status.value,
				description: description.value 
			} as Task)
		} else if(name.length <= 250 && !description.value){
			tasks.value.push({
				name: name.value,
				status: status.value,
			} as Task)
		}
	}

	function updateTask(id: string): void {
		const found = tasks.value.find((task:Task) => {
			if(task.id === id) {
				task.name = name.value
				task.status = status.value
				task?.description = description?.value
			}
		})
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

	return { taskLists, tasks, name, status, description, addTask, updateTask, startTask, markAsDone }
})