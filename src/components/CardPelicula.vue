<script setup>

defineProps({
    movies: {
        type: Object,
        required: true
    }
})
defineEmits(['open-modal'])
</script>

<template>
    <div class="card" @click="$emit('open-modal',movies.id)">
        <div class="overflow-hidden">
            <img :src="'https://image.tmdb.org/t/p/w500' + movies.poster_path" class="card-img-top my-element"
                alt="Movie Poster">
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ movies.title }}</h5>
            <p class="d-inline-block text-truncate-custom">{{ movies.overview }}</p>
        </div>
    </div>
</template>

<style>
.text-truncate-custom {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.my-element {
    /* Definir las transformaciones iniciales */
    transform: scale(1);
    /* Escala inicial */
    transition: transform 0.3s ease;
    /* Agregar una transición para suavizar la animación */

    /* Agregar transformaciones en respuesta al hover */
    &:hover {
        transform: scale(1.05) rotate(2deg);
        /* Escala y rotación en hover */
    }
}</style>