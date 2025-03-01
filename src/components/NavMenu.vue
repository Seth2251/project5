<template>
  <nav class="bg-blue-500 p-4 text-white flex justify-center space-x-4">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
  </nav>
</template>

<style scoped>
nav .router-link-active {
  text-decoration: underline;
}
</style>
