<template>
  <div class="dashboard">
    <div class="left-panel">
      <FormExpense /> <!-- Composant FormExpense.vue -->
    </div>
    <div class="right-panel">
      <History /> <!-- Composant History.vue -->
    </div>
  </div>
</template>

<script>
import FormExpense from '../components/Forms/FormExpense.vue';
import History from '../components/History.vue'; // Import du composant History.vue

export default {
  components: {
    FormExpense,
    History // Définition du composant History.vue dans le fichier
  }
}
</script>

<style>
.dashboard {
  display: flex;
}

.left-panel {
  flex: 1;
  padding: 20px;
}

.right-panel {
  flex: 1;
  padding: 20px;
}
</style>
