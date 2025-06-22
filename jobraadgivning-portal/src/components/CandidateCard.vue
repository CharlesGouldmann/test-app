<template>
  <article class="candidate-card bg-white shadow-md rounded-lg p-4">
    <h2 class="text-xl font-semibold">{{ fullName }}</h2>
    <p class="text-gray-600">Adresse: {{ candidate.address }}</p>
    <p class="text-gray-600">Email: {{ candidate.email }}</p>
    <p class="text-gray-600">Rådgiver: {{ candidate.advisor }}</p>
    <p class="text-gray-600">Land: {{ candidate.country.toUpperCase() }}</p>
    <p class="text-gray-600">Sprog: {{ candidate.language }}</p>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { Candidate } from '../types';

const props = defineProps<{
  candidate: Candidate
}>();

const fullName = computed(() => `${props.candidate.firstname} ${props.candidate.lastname}`);
</script>

<style scoped>
.candidate-card {
  transition: transform 0.2s;
}
.candidate-card:hover {
  transform: scale(1.05);
}
</style>