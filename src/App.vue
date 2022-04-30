<script setup lang="ts">
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
</script>

<template>
  <Header />
  <Hero msg="Hi, my name is Samuel Wood" />
  <Experience />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #1e2024;
}
html {
  scroll-behavior: smooth;
}
</style>
