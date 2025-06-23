<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-indigo-600 text-white p-4">
      <router-link to="/" class="flex items-center gap-2">
        <h1 class="text-2xl font-bold">Jobrådgivnings Portal</h1>
      </router-link>
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
  --container-width: 1200px;
}
main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

.container {
  max-width: var(--container-width);
}

.icon {
  display: inline-block;
  width: calc(1em * var(--line-height, 1.2));
  height: calc(1em * var(--line-height, 1.2));

  vertical-align: middle;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: currentColor;

  &.--home {
    mask-image: url('./assets/icons/home.svg');
  }

  &.--mail {
    mask-image: url('./assets/icons/mail.svg');
  }

  &.--user-square {
    mask-image: url('./assets/icons/user-square.svg');
  }

  &.--map-pin {
    mask-image: url('./assets/icons/map-pin.svg');
  }

  &.--language {
    mask-image: url('./assets/icons/language.svg');
  }

  &.--user {
    mask-image: url('./assets/icons/user.svg');
  }
}
</style>