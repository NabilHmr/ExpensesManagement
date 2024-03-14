<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <nav class="main-nav">
<!--          <Burger></Burger>-->
          <Sidebar>
            <ul class="sidebar-panel-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </Sidebar>
        </nav>
      </div>
      <div class="col-lg-4 col-md-12">
        <h1>Hardik Rawat</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
export default {
  name: "NavBar",
  components: {
    Sidebar
  },
  methods: {
    navHome() {
      this.$router.push({ name: 'Home' });
    },
  }
}
</script>

<style>
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
ul.sidebar-panel-nav {
  list-style-type: none;
}
ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>