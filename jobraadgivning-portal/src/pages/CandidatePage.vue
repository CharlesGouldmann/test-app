<template>
	<article class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Kandidat</h1>
		<p class="mb-6">Her kan du se information om kandidaten</p>

		<section class="bg-white p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
			<figure class="flex justify-end w-full mb-4 md:order-2">
				<picture class="bg-gray-200 max-w-xs max-h-xs rounded-lg overflow-hidden aspect-square">
					<img v-if="candidate?.image" :src="candidate?.image" alt="Profile picture" class="w-full h-full object-cover ">
					<div v-else alt="Default profile picture" class="icon --user w-full h-full">
					</div>
				</picture>
			</figure>

			<div class="flex flex-col gap-1">
				<h2 class="text-xl font-bold mb-2">{{ candidate?.firstname }} {{ candidate?.lastname }}</h2>

				<ul class="flex flex-col gap-1 text-gray-600">
					<li class="flex gap-2 items-center">
						<span class="flex gap-2 items-center text-sm">
							<span class="icon --home"></span>
							Adresse: 
						</span>
						{{ candidate?.address }}
					</li>
					<li class="flex gap-2 items-center">
						<span class="flex gap-2 items-center text-sm">
							<span class="icon --mail"></span>
							Email: 
						</span>
						<a :href="`mailto:${candidate?.email}`">{{ candidate?.email }}</a>
					</li>
					<li class="flex gap-2 items-center">
						<span class="flex gap-2 items-center text-sm">
							<span class="icon --user-square"></span>
							Rådgiver: 
						</span>
						{{ candidate?.advisor }}
					</li>
					<li class="flex gap-2 items-center">
						<span class="flex gap-2 items-center text-sm">
							<span class="icon --map-pin"></span>
							Land: 
						</span>
						{{ candidate?.country.toUpperCase() }}
					</li>
					<li class="flex gap-2 items-center">
						<span class="flex gap-2 items-center text-sm">
							<span class="icon --language"></span>
							Sprog: 
						</span>
						{{ candidate?.language.toUpperCase() }}
					</li>
				</ul>
			</div>
		</section>
	</article>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCandidateStore } from '../store/candidateStore';

const route = useRoute();
const candidateId = route.params.id;
const candidateStore = useCandidateStore();
const { allCandidates } = storeToRefs(candidateStore);

const candidate = computed(() => allCandidates.value.find((candidate) => candidate.id === candidateId));
</script>

<style scoped>
a {
	@apply text-indigo-600 underline;
}
</style>