<template>

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
// import Sidebar from './components/Sidebar.vue'
</script>

<!--<style lang="scss">-->
<!--:root {-->
<!--  &#45;&#45;primary: #4ade80;-->
<!--  &#45;&#45;primary-alt: #22c55e;-->
<!--  &#45;&#45;grey: #64748b;-->
<!--  &#45;&#45;dark: #1e293b;-->
<!--  &#45;&#45;dark-alt: #334155;-->
<!--  &#45;&#45;light: #f1f5f9;-->
<!--  &#45;&#45;sidebar-width: 300px;-->
<!--}-->

<!--* {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  box-sizing: border-box;-->
<!--  font-family: 'Fira sans', sans-serif;-->
<!--}-->

<!--body {-->
<!--  background: var(&#45;&#45;light);-->
<!--}-->

<!--button {-->
<!--  cursor: pointer;-->
<!--  appearance: none;-->
<!--  border: none;-->
<!--  outline: none;-->
<!--  background: none;-->
<!--}-->

<!--.app {-->
<!--  display: flex;-->

<!--  main {-->
<!--    flex: 1 1 0;-->
<!--    padding: 2rem;-->

<!--    @media (max-width: 1024px) {-->
<!--      padding-left: 6rem;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->