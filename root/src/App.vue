<template>
  <div id="app">
    <Navbar title="Expenses Management" />
     Le reste du contenu de votre application 
    <Charts />
  </div>
  <div class="app">
    <Sidebar />
  </div>
</template>

<script setup>
import { CSidebar, CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler, CNavGroup, CNavItem, CNavTitle, CBadge } from '@coreui/vue'
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Charts from "@/components/Charts.vue";
// import Sidebar from './components/Sidebar.vue'
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 50px; /* pour s'assurer que le contenu ne soit pas caché sous la barre de navigation */
  
}
</style>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>