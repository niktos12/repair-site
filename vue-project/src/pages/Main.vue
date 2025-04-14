<script setup lang="ts">
import Realize from '@/components/Realize.vue'
import Header from '../components/Header.vue'
import Presentation from '../components/Presentation.vue'
import Services from '../components/Services.vue'
</script>

<template>
  <div class="flex flex-col justify-between h-[1000px]">
    <Header />
    <Presentation />
  </div>
  <Realize />
  <Services />
</template>

<style scoped>
/* Стили для компонента */
</style>
