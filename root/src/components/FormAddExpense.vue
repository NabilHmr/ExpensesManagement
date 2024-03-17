<script setup>

</script>

<template>
  <div class="form-add-expense border p-4 w-100">
    <h2 class="text-center">Add an expense</h2>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputNom" class="form-label">Nom</label>
        <input type="text" class="form-control" id="inputNom" required>
      </div>
      <div class="col-md-6">
        <label for="inputAmount" class="form-label">Amount</label>
        <input type="number" class="form-control" id="inputAmount" required>
      </div>
      <div class="col-12">
        <label for="inputSelect" class="form-label">Category</label>
        <select id="inputSelect" class="form-select">
          <option selected>Choose...</option>
          <option>Shopping</option>
          <option>Carburant</option>
          <option>Food</option>
          <option>Other</option>
        </select>
      </div>
      <div class="col-12">
        <label for="inputDescription" class="form-label">Description</label>
        <input type="text" class="form-control" id="inputDescription" placeholder="">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Add expense</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>