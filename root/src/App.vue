<template>

  <div class="d-flex align-items-start" style="width: max-content;">
    <Sidebar />
    <div id="top-wrapper" class="d-flex align-items-stretch">
      <div id="form-add-expense" class="w-50" style="margin-right: 3%;">
        <FormAddExpense />
      </div>
      <div id="history" class="w-50">
        <History />
      </div>
    </div>

  </div>
</template>

<script setup>
import { CSidebar, CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler, CNavGroup, CNavItem, CNavTitle, CBadge } from '@coreui/vue'
import Sidebar from "@/components/Sidebar.vue";
import FormAddExpense from "@/components/FormAddExpense.vue";
import History from "@/components/History.vue";
// import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 400px;
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
  align-items: flex-start;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>