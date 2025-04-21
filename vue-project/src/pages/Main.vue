<script setup lang="ts">
import Realize from '@/components/Realize.vue'
import Header from '../components/Header.vue'
import Presentation from '../components/Presentation.vue'
import Services from '../components/Services.vue'
import BestServices from '../components/BestServices.vue'
import Guests from '../components/Guests.vue'
import Experts from '../components/Experts.vue'
import Footer from '../components/Footer.vue'
import Projects from '../components/Projects.vue'
import Decisions from '../components/Decisions.vue'
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <Presentation />
  </div>
  <Decisions />
  <Realize />
  <Services />
  <BestServices />
  <Projects />
  <Guests />
  <Experts />
  <Footer />
</template>

<style scoped>
/* Стили для компонента */
</style>
