<template>
  <article class="candidate-card bg-white shadow-md rounded-lg p-4 w-full">
    <h2 class="text-xl font-semibold mb-2">{{ fullName }}</h2>

    <ul class="flex flex-col gap-1 text-sm text-gray-600"> 
      <li class="flex gap-2 items-center" title="Email">
        <span class="icon --mail"></span>
        <span class="sr-only">Email:</span> 
        <span class="">{{ candidate.email }}</span>
      </li>
      <li class="flex gap-2 items-center" title="Rådgiver">
        <span class="icon --user-square"></span>
        <span class="sr-only">Rådgiver:</span> 
        <span class="">{{ candidate.advisor }}</span>
      </li>
      <li class="flex gap-2 items-center" title="Land">
        <span class="icon --map-pin"></span>
        <span class="sr-only">Land:</span> 
        <span class="">{{ candidate.country.toUpperCase() }}</span>
      </li>
      <li class="flex gap-2 items-center" title="Sprog">
        <span class="icon --language"></span>
        <span class="sr-only">Sprog:</span> 
        <span class="">{{ candidate.language.toUpperCase() }}</span>
      </li>
    </ul>
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
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>