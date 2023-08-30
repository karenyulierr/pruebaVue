<script setup>
import { onMounted, ref } from "vue";
import { useTmdbApi } from "../stores/peliculas";
import CardPelicula from "../components/CardPelicula.vue";
import Modal from "../components/Modal.vue";

const { fetchMovies, fetchMovieDetails } = useTmdbApi();
const movies = ref([]);
const idMovie = ref([]);
const fetchData = async () => {
  try {
    const data = await fetchMovies();
    movies.value = data.results;
  } catch (error) {
    console.log("error al cargar los datos");
  }
};
const openModal = async (id) => {
  if (id) {
    idMovie.value = await fetchMovieDetails(id); 
    console.log(idMovie.value);
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
  </div>
  <Modal :idMovie="idMovie" />
</template>



