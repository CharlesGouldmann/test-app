<template>
  <article class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Velkommen til Jobrådgivnings Portalen</h1>
    <p class="mb-6">Her kan du finde information om kandidater og hjælpe dem i job.</p>

    <CandidatesBlock />
  </article>
</template>

<script lang="ts" setup>
import CandidatesBlock from '../components/CandidatesBlock.vue';
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>