<template>
	<header class="flex justify-between items-center flex-wrap">
		<h2 class="text-xl font-semibold mb-2">
			Dine kandidater <span v-if="search !== '' || filtersHaveValues()" class="text-sm text-gray-500">({{ filteredCandidates.length }} / {{ allCandidates.length }})</span>
		</h2>
	
		<section class="flex items-center gap-6 items-center mb-4 flex-wrap">
			<!-- Filters -->
			<div class="flex items-center gap-2 flex-wrap">
				<label class="text-sm text-gray-500"> Sorter efter: </label>
				<filter-select v-if="advisors.length > 1" v-model="filters.advisor" :options="advisors" :label="'Rådgivere'" />
				<filter-select v-if="countries.length > 1" v-model="filters.country" :options="countries" :label="'Lande'" />
				<filter-select v-if="languages.length > 1" v-model="filters.language" :options="languages" :label="'Sprog'" />
			</div>

			<!-- Search -->
			<input type="text" v-model="search" placeholder="Søg efter kandidat" class="rounded-lg py-2 px-4" @input="searchCandidates" />
		</section>
	</header>
	
	<!-- Candidates -->
	<section v-if="filteredCandidates.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<router-link v-for="candidate in filteredCandidates" :key="candidate.id" :to="`/candidate/${candidate.id}`" class="flex">
			<CandidateCard :candidate="candidate" />
		</router-link>
	</section>
	<section v-else class="text-center text-gray-500">
		<p>Ingen kandidater fundet der matcher søgningen</p>
	</section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { useCandidateStore } from '../store/candidateStore';
import CandidateCard from './CandidateCard.vue';
import FilterSelect from './FilterSelect.vue';


const candidateStore = useCandidateStore();
const { searchedCandidates, allCandidates } = storeToRefs(candidateStore);
const search = ref('');
const filters = ref({
	advisor: '',
	country: '',
	language: '',
});


// Get filter options from candidate parameters
const advisors = computed(() => {
	return [...new Set(allCandidates.value.map((candidate) => candidate.advisor))].sort();
});
const countries = computed(() => {
	return [...new Set(allCandidates.value.map((candidate) => candidate.country))].sort();
});
const languages = computed(() => {
	return [...new Set(allCandidates.value.map((candidate) => candidate.language))].sort();
});


/**
 * Filter candidates based on the selected filters
 */
const filteredCandidates = computed(() => {
	return searchedCandidates.value.filter((candidate) => {
		return (
			(filters.value.advisor === '' || filters.value.advisor === candidate.advisor) &&
			(filters.value.country === '' || filters.value.country === candidate.country) &&
			(filters.value.language === '' || filters.value.language === candidate.language)
		);
	});
});


/**
 * Search candidates based on the search value
 */
function searchCandidates() {
	candidateStore.searchCandidates(search.value);
}

// Helper function to check if any filters have values
function filtersHaveValues() {
	return Object.values(filters.value).some((value) => value !== '');
}


// Reset search when component is mounted
onMounted(() => {
	searchCandidates();
});
</script>

<style scoped>
</style>