<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
