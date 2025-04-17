<script setup lang="ts">
// Импорты для Vue компонента
</script>

<template>
  <div class="flex justify-between items-center py-2.5 px-[50px]">
    <div class="flex items-end gap-3">
      <img src="/Exclude.svg" alt="logo" width="58" height="47" />
      <p class="leading-none text-xl">
        Сочи <br /> Ремонт
      </p>
    </div>
    <div class="flex flex-row gap-[30px] items-center">
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300"
        to="/catalog"
      >
        Каталог
      </router-link>
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300"
        to="/portfolio"
      >
        Портфолио
      </router-link>
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300"
        to="/promotions"
      >
        Акции
      </router-link>
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300"
        to="/about"
      >
        О компании
      </router-link>
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300"
        to="/contacts"
      >
        Контакты
      </router-link>
    </div>
    <div class="flex flex-row gap-10 items-center">
      <a
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300 underline"
        href="tel:+79317240942"
      >
        +7 (931) 724 09 42
      </a>
      <router-link
        class="text-lg text-white hover:text-blue-400 transition-colors duration-300 underline"
        to="/order"
      >
        Оформить заявку
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
