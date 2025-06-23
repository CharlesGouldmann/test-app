<template>
	<select v-model="selected" class="rounded-lg py-2 px-4 bg-white min-w-30">
		<option value="">Alle {{ label }}</option>
		<option v-for="option in uniqueOptions" :key="option" :value="option">{{ option }}</option>
	</select>
</template>

<script lang="ts" setup>
	import { watch, computed, ref } from 'vue';

	const selected = ref('');
	const emit = defineEmits(['update:modelValue']);

	const props = defineProps<{
		options: string[];
		label: string;
		modelValue: string;
	}>();

	// Emit the filter value on change
	watch(() => selected.value, (value) => {
		emit('update:modelValue', value);
	})

	// Remove duplicates from options
	const uniqueOptions = computed(() => {
		return [...new Set(props.options)].sort();
	});
</script>