<script lang="ts" setup>
	import VTaskItem from '@/components/VTaskItem.vue'
	import VModal from '@/components/VModal.vue'
	const props = defineProps<{ title: string, tasks?: Task[] }>()
</script>

<template>
	<section class="board__container">
		<h2>{{ title }}</h2>

		<ul>
			<VTaskItem v-for="task in tasks" :task="task">
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