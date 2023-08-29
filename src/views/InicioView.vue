<script setup>
import { onMounted, ref } from 'vue';
import { useTmdbApi } from '../stores/peliculas';
import CardPelicula from '../components/CardPelicula.vue';

const { fetchMovies } = useTmdbApi();
const movies = ref([]);
const fetchData = async () => {
  try {
    const data = await fetchMovies();
    movies.value = data.results;
    console.log(movies.value); // Asigna los resultados a la variable reactiva 'movies'
  } catch (error) {
    // Manejo de errores si es necesario
  }
};
onMounted(fetchData);

</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 py-3" v-for="movie in movies" :key="movie.id">
        <CardPelicula :movies="movie" />
      </div>
    </div>
    </div>
  </div>
</template>



