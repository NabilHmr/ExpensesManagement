<script setup>
import Sidebar from '@components/Sidebar/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="p-10 bg-neutral-100 text-black w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
