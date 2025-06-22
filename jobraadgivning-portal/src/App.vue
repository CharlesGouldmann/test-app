<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-indigo-600 text-white p-4">
      <h1 class="text-2xl font-bold">Jobrådgivnings Portal</h1>
    </header>
    <main class="p-4">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2025 Jobrådgivning Portal. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// No logic needed for App.vue, but using <script setup> enables Composition API
</script>

<style>
/* Add any global styles here */
:root {
  --header-height: 64px;
  --footer-height: 56px;
}
main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>