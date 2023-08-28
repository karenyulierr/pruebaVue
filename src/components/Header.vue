<script setup>
</script>

<template>
  <header
    class="py-5 px-5 d-flex justify-content-between items-center header"
  >
    <div>
      <RouterLink :to="{ name: 'inicio' }" class="navbar-brand">
        <img src="/img/logo.jpg" alt="" class="" width="50" height="50" />
      </RouterLink>
    </div>
    <div>
      <RouterLink
        :to="{ name: 'inicio' }"
        class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
      >
        MOVIES
      </RouterLink>
      <RouterLink
        :to="{ name: 'inicio' }"
        class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
      >
        CELEBS & PHOTOS
      </RouterLink>
      <RouterLink
        :to="{ name: 'inicio' }"
        class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
      >
        COMMUNITY
      </RouterLink>
      <RouterLink
        :to="{ name: 'inicio' }"
        class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
      >
        NEWS
      </RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: 'inicio' }" class="navbar-brand">
        <img src="/img/logo.jpg" alt="" class="" width="50" height="50" />
      </RouterLink>
    </div>
  </header>
</template>
<style>
.header {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
  height:800px;
}
</style>