<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Filtros from "./components/Filtros.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <Filtros />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>