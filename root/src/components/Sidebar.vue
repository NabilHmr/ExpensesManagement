<template>
  <aside>
    <h3>Menu</h3>
    <hr>
    <div class="menu">
      <router-link to="/" class="button">
<!--        <home-icon class="icon"/>-->
        <span>Home</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/dashboard" class="button">
<!--        <chart-pie-icon class="icon"/>-->
        <span>Charts</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
// import { HomeIcon, ChartPieIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: darkgray;
  color: var(--light);
  padding: 1rem;
  width: auto;
  max-width: calc(100vw - 2rem);
  height: 100vh; /* Hauteur à 100% de la fenêtre */
}

h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.menu {
  margin: 0 -1rem;
}

.button {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  white-space: nowrap; /* Empêcher le texte de se couper */
  overflow: hidden; /* Masquer le débordement du texte */
  text-overflow: ellipsis; /* Afficher "..." si le texte dépasse */
}

.material-icons {
  font-size: 2rem;
  color: var(--light);
}

span {
  color: var(--light);
}
</style>
