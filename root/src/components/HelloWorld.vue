<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<!--  <div class="greetings">-->
<!--    <h1 class="green">{{ msg }}</h1>-->
<!--    <h3>-->
<!--      You’ve successfully created a project with-->
<!--      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +-->
<!--      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.-->
<!--    </h3>-->
<!--  </div>-->
  <Vueform>
    <TextElement name="text"  before="shjdjsh"/>
    <SelectElement name="category" label="Category" required>
      <option value="food">Food</option>
      <option value="transportation">Transportation</option>
      <option value="housing">Housing</option>
      <!-- Ajoutez d'autres catégories au besoin -->
    </SelectElement>
  </Vueform>
  <Vueform>
    <TextElement name="description" label="Description" required />
        <TextElement input-type="number" name="amount" label="Amount" required />
    <SelectElement name="category" label="Category" required>
      <option value="food">Food</option>
      <option value="transportation">Transportation</option>
      <option value="housing">Housing</option>
      <!-- Ajoutez d'autres catégories au besoin -->
    </SelectElement>

    <button type="submit">Submit</button>
  </Vueform>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
