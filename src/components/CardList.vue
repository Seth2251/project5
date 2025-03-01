<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <Card v-for="(movie, index) in movies" :key="index" />
    </div>
    <button
      @click="loadMoreMovies"
      class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Load More
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./Card.vue";

const movies = ref(Array.from({ length: 12 })); // Default 12 movies

const loadMoreMovies = () => {
  movies.value.push(...Array.from({ length: 6 })); // Add 6 more movies
};
</script>
