<template>
  <div class="h-full flex flex-col justify-center items-center">
    <h1 class="text-9xl font-extrabold text-secondary tracking-widest">404</h1>
    <div class="bg-primary text-white px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
        <a
            class="group relative inline-block text-sm font-medium text-primary focus:outline-none focus:ring active:text-primary"
            href="#"
            >
            <span
                class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span class="relative block border border-current bg-white px-8 py-3">
                <router-link to="/">Go Home</router-link>
            </span>
        </a>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
