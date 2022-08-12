<script setup lang="ts">
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <Header />
  <Hero />
  <Experience />
  <Project />
  <Contact />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #1e2024;
  max-width: rem-calc(1660);
}
html {
  scroll-behavior: smooth;
}
</style>
