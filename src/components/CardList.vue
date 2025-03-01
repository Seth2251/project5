<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    <Card v-for="index in 12" :key="index" />
  </div>
</template>

<script setup>
import Card from "./Card.vue";
</script>
