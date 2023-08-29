<script setup>
import { onMounted, ref } from "vue";
import { useTmdbApi } from "../stores/peliculas";
import CardPelicula from "../components/CardPelicula.vue";
import Modal from "../components/Modal.vue";

const { fetchMovies } = useTmdbApi();
const movies = ref([]);
const show = ref(false);
const fetchData = async () => {
  try {
    const data = await fetchMovies();
    movies.value = data.results;
  } catch (error) {
    // Manejo de errores si es necesario
  }
};
const openModal = (id) => {
  if (id) {
    show.value = true;
    console.log("soy el modal desde inicioView", id);
  }
};
onMounted(fetchData);
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 py-3" v-for="movie in movies" :key="movie.id">
          <CardPelicula :movies="movie" @open-modal="openModal" />
        </div>
      </div>
    </div>
    <Modal :show="show" />
  </div>
</template>



