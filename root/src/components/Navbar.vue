<template>
  <nav class="navbar">
    <div class="navbar-title">{{ title }}</div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
  background-color: #474747;
  color: #fff;
  justify-content: center;
}

.navbar-title {
    font-size: 24px;
    text-align: center;
  }
</style>
