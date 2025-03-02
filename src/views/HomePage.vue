<template>
  <div>
    
    <section class="hero">
      <div class="hero-overlay">
        <h1 class="text-5xl font-extrabold text-white">🎬 Welcome to MovieMania!</h1>
        <p class="text-lg text-gray-300 mt-3">Discover amazing movies, hand-picked for you.</p>
        <RouterLink to="/movies" class="explore-btn">Explore Movies</RouterLink>
      </div>
    </section>

    
    <section class="trending-movies">
      <h2 class="text-3xl font-bold text-center mb-6"> Popular Movies</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="movie in trendingMovies" :key="movie.id" class="movie-card">
          <img :src="movie.image" :alt="movie.title" class="movie-image">
          <h3 class="text-lg font-semibold mt-2">{{ movie.title }}</h3>
          <p class="text-gray-500">{{ movie.genre }} | {{ movie.year }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

// Generate fake trending movies
const trendingMovies = ref(
  Array.from({ length: 8 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    genre: faker.helpers.arrayElement(["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"]),
    year: faker.date.past().getFullYear(),
    image: faker.image.urlPicsumPhotos({ width: 400, height: 600 }),
  }))
);
</script>

<style scoped>

.hero {
  position: relative;
  height: 60vh;
  background: url('https://source.unsplash.com/1600x900/?cinema,movie') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-overlay {
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.explore-btn {
  margin-top: 15px;
  display: inline-block;
  background: #ff4500;
  padding: 12px 24px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  transition: background 0.3s ease;
}

.explore-btn:hover {
  background: #e03e00;
}


.trending-movies {
  padding: 50px 20px;
}

.movie-card {
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.movie-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>



