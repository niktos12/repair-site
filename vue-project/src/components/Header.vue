<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  isTransparent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isTransparent: false,
})

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
    :class="[
      isScrolled
        ? props.isTransparent
          ? 'bg-white shadow-md'
          : 'bg-gray-50 shadow-md'
        : props.isTransparent
          ? 'bg-transparent'
          : 'bg-white',
    ]"
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
          Сочи <br />
          Ремонт
        </p>
      </div>

      <div class="flex flex-row gap-[30px] items-center max-lg:hidden">
        <router-link
          v-for="(link, path) in {
            '/catalog': 'Каталог',
            '/portfolio': 'Портфолио',
            '/promotions': 'Акции',
            '/about': 'О компании',
            '/contacts': 'Контакты',
          }"
          :key="path"
          :to="path"
          class="text-lg transition-colors duration-300"
          :class="[
            isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400',
          ]"
        >
          {{ link }}
        </router-link>
      </div>

      <div class="flex flex-row gap-10 items-center max-lg:hidden">
        <a
          class="text-lg transition-colors duration-300 underline"
          :class="[
            isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400',
          ]"
          href="tel:+79317240942"
        >
          +7 (931) 724 09 42
        </a>
        <router-link
          class="text-lg transition-colors duration-300 underline"
          :class="[
            isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400',
          ]"
          to="/order"
        >
          Оформить заявку
        </router-link>
      </div>

      <button class="hidden max-lg:flex flex-col gap-1.5 p-2" @click="toggleMenu">
        <span
          class="w-6 h-0.5 transition-all duration-300"
          :class="[
            isScrolled ? 'bg-black' : 'bg-white',
            isMenuOpen ? 'transform rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          class="w-6 h-0.5 transition-all duration-300"
          :class="[isScrolled ? 'bg-black' : 'bg-white', isMenuOpen ? 'opacity-0' : '']"
        ></span>
        <span
          class="w-6 h-0.5 transition-all duration-300"
          :class="[
            isScrolled ? 'bg-black' : 'bg-white',
            isMenuOpen ? 'transform -rotate-45 -translate-y-2' : '',
          ]"
        ></span>
      </button>
    </div>

    <div
      class="hidden max-lg:block transition-all duration-300 overflow-hidden fixed top-0 left-0 right-0 bottom-0 z-40"
      :class="[
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        isScrolled || !props.isTransparent ? 'bg-white' : 'bg-white',
      ]"
    >
      <div class="px-5 py-2.5 flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-end gap-3">
            <img src="/ExcludeBlack.svg" alt="logo" width="58" height="47" />
            <p class="leading-none text-xl text-black">
              Сочи <br />
              Ремонт
            </p>
          </div>
          <button class="text-lg text-black underline" @click="toggleMenu">Закрыть</button>
        </div>

        <nav class="flex flex-col gap-6 mb-auto">
          <router-link
            v-for="(link, path) in {
              '/services': 'Услуги',
              '/promotions': 'Акции',
              '/about': 'О нас',
              '/reviews': 'Отзывы',
              '/faq': 'Вопрос-ответ',
              '/blog': 'Блог',
              '/contacts': 'Контакты',
            }"
            :key="path"
            :to="path"
            class="text-lg text-black"
            @click="isMenuOpen = false"
          >
            {{ link }}
          </router-link>
        </nav>

        <div class="mt-auto pt-8">
          <div class="mb-6">
            <p class="text-sm text-black mb-1">E-mail</p>
            <a href="mailto:sochi-repair@gmail.com" class="text-[#848386] underline"
              >sochi-repair@gmail.com</a
            >
          </div>

          <div class="mb-6">
            <p class="text-sm text-black mb-1">Номер телефона</p>
            <a href="tel:+79317240942" class="text-[#848386] underline">+7 (931) 724 09 42</a>
          </div>

          <div class="flex gap-4 mb-6">
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#848386]"
            >
              <img src="/VK.svg" alt="VK" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#848386]"
            >
              <img src="/Telegram.svg" alt="Telegram" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#848386]"
            >
              <img src="/WhatsApp.svg" alt="WhatsApp" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#848386]"
            >
              <img src="/Youtube.svg" alt="YouTube" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#848386]"
            >
              <img src="/OK.svg" alt="Одноклассники" class="w-5 h-5" />
            </a>
          </div>

          <button class="w-full py-4 border border-[#848386] rounded-full text-black">
            Обратный звонок
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
