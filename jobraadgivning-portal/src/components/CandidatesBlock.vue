<template>
	<input type="text" v-model="search" placeholder="Søg efter kandidat" class="mb-4 rounded-lg p-2" @input="searchCandidates" />
	
	<h2 class="text-xl font-semibold mb-2">
		Dine kandidater <span v-if="search !== ''" class="text-sm text-gray-500">({{ filteredCandidates.length }} / {{ candidates.length }})</span>
	</h2>
	
	<section v-if="filteredCandidates.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<CandidateCard v-for="candidate in filteredCandidates" :key="candidate.id" :candidate="candidate" />
	</section>
	<section v-else class="text-center text-gray-500">
		<p>Ingen kandidater fundet der matcher søgningen</p>
	</section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useCandidateStore } from '../store/candidateStore';
import CandidateCard from './CandidateCard.vue';

const candidateStore = useCandidateStore();
const {filteredCandidates, candidates } = storeToRefs(candidateStore);
const search = ref('');

function searchCandidates() {
	candidateStore.searchCandidates(search.value);
}
</script>

<style scoped>
</style>