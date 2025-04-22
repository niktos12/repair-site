<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white shadow-md' : 'bg-transparent']"
  >
    <div class="flex justify-between items-center py-2.5 px-[50px] max-lg:px-5">
      <div class="flex items-end gap-3">
        <img 
          :src="isScrolled ? '/ExcludeBlack.svg' : '/Exclude.svg'" 
          alt="logo" 
          width="58" 
          height="47" 
          class="transition-all duration-300"
        />
        <p class="leading-none text-xl" :class="[isScrolled ? 'text-black' : 'text-white']">
          Сочи <br /> Ремонт
        </p>
      </div>

      <div class="flex flex-row gap-[30px] items-center max-lg:hidden">
        <router-link
          v-for="(link, path) in {
            '/catalog': 'Каталог',
            '/portfolio': 'Портфолио',
            '/promotions': 'Акции',
            '/about': 'О компании',
            '/contacts': 'Контакты'
          }"
          :key="path"
          :to="path"
          class="text-lg transition-colors duration-300"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
        >
          {{ link }}
        </router-link>
      </div>

      <div class="flex flex-row gap-10 items-center max-lg:hidden">
        <a
          class="text-lg transition-colors duration-300 underline"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
          href="tel:+79317240942"
        >
          +7 (931) 724 09 42
        </a>
        <router-link
          class="text-lg transition-colors duration-300 underline"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
          to="/order"
        >
          Оформить заявку
        </router-link>
      </div>

      <button 
        class="hidden max-lg:flex flex-col gap-1.5 p-2"
        @click="toggleMenu"
      >
        <span 
          class="w-6 h-0.5 transition-all duration-300"
          :class="[
            isScrolled ? 'bg-black' : 'bg-white',
            isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span 
          class="w-6 h-0.5 transition-opacity duration-300"
          :class="[
            isScrolled ? 'bg-black' : 'bg-white',
            isMenuOpen ? 'opacity-0' : ''
          ]"
        ></span>
        <span 
          class="w-6 h-0.5 transition-all duration-300"
          :class="[
            isScrolled ? 'bg-black' : 'bg-white',
            isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
    </div>

    <div 
      class="hidden max-lg:block transition-all duration-300 overflow-hidden"
      :class="[
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
        isScrolled ? 'bg-white' : 'bg-black'
      ]"
    >
      <div class="px-5 py-4 flex flex-col gap-4">
        <router-link
          v-for="(link, path) in {
            '/catalog': 'Каталог',
            '/portfolio': 'Портфолио',
            '/promotions': 'Акции',
            '/about': 'О компании',
            '/contacts': 'Контакты'
          }"
          :key="path"
          :to="path"
          class="text-lg transition-colors duration-300"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
          @click="isMenuOpen = false"
        >
          {{ link }}
        </router-link>
        <a
          class="text-lg transition-colors duration-300"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
          href="tel:+79317240942"
        >
          +7 (931) 724 09 42
        </a>
        <router-link
          class="text-lg transition-colors duration-300"
          :class="[isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400']"
          to="/order"
          @click="isMenuOpen = false"
        >
          Оформить заявку
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
