<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
    <img :src="image" alt="Movie Poster" class="w-full h-40 object-cover rounded-md">
    <div class="py-4">
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <p class="text-gray-600">{{ genre }}</p>
      <p class="text-gray-500">🎭 Directed by: {{ director }}</p>
      <p class="text-gray-400">⭐ Rating: {{ rating }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { faker } from "@faker-js/faker";

const title = ref("");
const genre = ref("");
const director = ref("");
const rating = ref("");
const image = ref("");

onMounted(() => {
  title.value = faker.word.words(3); // Random movie title
  genre.value = faker.music.genre(); // Random genre
  director.value = faker.person.fullName(); // Random director name
  rating.value = (Math.random() * 5).toFixed(1); // Random rating 0-5
  image.value = faker.image.url({ width: 300, height: 400, category: "movie" });// Random movie image
});
</script>
