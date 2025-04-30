<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import RepairServices from '@/components/RepairServices.vue'
import Footer from '@/components/Footer.vue'

interface Apartment {
  id: number
  title: string
  price: number
  type: string
  image: string
  rooms: number
  design: boolean
}

const apartments = ref<Apartment[]>([
  {
    id: 1,
    title: 'Черновой ремонт',
    price: 6000,
    type: 'Черновой',
    image: '/flat.svg',
    rooms: 1,
    design: false,
  },
  {
    id: 2,
    title: 'Капитальный ремонт',
    price: 14000,
    type: 'Капитальный',
    image: '/flat.svg',
    rooms: 2,
    design: false,
  },
  {
    id: 3,
    title: 'Декоративный ремонт',
    price: 8000,
    type: 'Декоративный',
    image: '/flat.svg',
    rooms: 3,
    design: true,
  },
  {
    id: 4,
    title: 'Евроремонт',
    price: 16000,
    type: 'Евроремонт',
    image: '/flat.svg',
    rooms: 4,
    design: true,
  },
  {
    id: 5,
    title: 'Косметический ремонт',
    price: 7000,
    type: 'Косметический',
    image: '/flat.svg',
    rooms: 1,
    design: false,
  },
  {
    id: 6,
    title: 'Ремонт под ключ',
    price: 12000,
    type: 'Капитальный',
    image: '/flat.svg',
    rooms: 2,
    design: false,
  },
  {
    id: 7,
    title: 'Эконом ремонт',
    price: 5000,
    type: 'Черновой',
    image: '/flat.svg',
    rooms: 1,
    design: false,
  },
  {
    id: 8,
    title: 'Дизайнерский ремонт',
    price: 20000,
    type: 'Декоративный',
    image: '/flat.svg',
    rooms: 3,
    design: true,
  },
  {
    id: 9,
    title: 'Премиум ремонт',
    price: 25000,
    type: 'Евроремонт',
    image: '/flat.svg',
    rooms: 4,
    design: true,
  },
  {
    id: 10,
    title: 'Ремонт студии',
    price: 9000,
    type: 'Косметический',
    image: '/flat.svg',
    rooms: 1,
    design: false,
  },
  {
    id: 11,
    title: 'Ремонт в новостройке',
    price: 11000,
    type: 'Капитальный',
    image: '/flat.svg',
    rooms: 2,
    design: false,
  },
  {
    id: 12,
    title: 'Ремонт с перепланировкой',
    price: 18000,
    type: 'Евроремонт',
    image: '/flat.svg',
    rooms: 4,
    design: true,
  },
])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 4
const hoveredIdx = ref<number | null>(null)
const filterMode = ref<'none' | 'type' | 'rooms' | 'design'>('none')
const filterValue = ref<string | number | boolean>('')

const filteredApartments = computed(() => {
  let filtered = apartments.value
  if (filterMode.value === 'type' && filterValue.value) {
    filtered = filtered.filter((a) => a.type === filterValue.value)
  } else if (filterMode.value === 'rooms' && filterValue.value) {
    filtered = filtered.filter((a) => a.rooms === filterValue.value)
  } else if (filterMode.value === 'design') {
    filtered = filtered.filter((a) => a.design === true)
  }
  return filtered.filter(
    (apartment) =>
      apartment.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      apartment.type.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const totalPages = computed(() => Math.ceil(filteredApartments.value.length / itemsPerPage))

const paginatedApartments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredApartments.value.slice(start, end)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function filterByType(type: string) {
  filterMode.value = 'type'
  filterValue.value = type
  currentPage.value = 1
}
function filterByRooms(rooms: number) {
  filterMode.value = 'rooms'
  filterValue.value = rooms
  currentPage.value = 1
}
function filterByDesign() {
  filterMode.value = 'design'
  filterValue.value = true
  currentPage.value = 1
}
function resetFilter() {
  filterMode.value = 'none'
  filterValue.value = ''
  currentPage.value = 1
}
</script>

<template>
  <div class="bg-[#FFFBFC] min-h-screen w-full">
    <Header color-scheme="black" />
    <div class="container mx-auto px-4 py-8 pt-[200px] max-md:pt-[100px] w-full bg-[#FFFBFC]">
      <!-- Хлебные крошки -->
      <div class="text-lg md:text-base sm:text-sm text-[#A6A6A6] mb-6">
        <span>Главная</span>
        <span class="mx-2">/</span>
        <span>Каталог</span>
      </div>

      <h1
        class="text-[64px] md:text-[32px] sm:text-[24px] font-bold mb-8 leading-none text-[#3C332D]"
      >
        Каталог
      </h1>

      <!-- Навигация -->
      <nav
        class="flex flex-wrap gap-8 md:gap-4 sm:gap-2 mb-8 text-[20px] md:text-[16px] sm:text-[14px] text-[#A6A6A6]"
      >
        <a
          href="#"
          class="hover:text-[#3C332D] transition-colors duration-200"
          @click.prevent="resetFilter"
          >По виду</a
        >
        <a
          href="#"
          class="hover:text-[#3C332D] transition-colors duration-200"
          @click.prevent="filterByRooms(2)"
          >По количеству комнат</a
        >
        <a
          href="#"
          class="hover:text-[#3C332D] transition-colors duration-200"
          @click.prevent="filterByType('Капитальный')"
          >По типу</a
        >
        <a
          href="#"
          class="hover:text-[#3C332D] transition-colors duration-200"
          @click.prevent="filterByDesign"
          >Дизайн интерьера</a
        >
        <a href="#" class="hover:text-[#3C332D] transition-colors duration-200">Ремонт коттеджей</a>
      </nav>

      <!-- Поиск -->
      <div class="relative mb-12 w-full max-w-[700px] md:max-w-[500px] sm:max-w-[300px]">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Что вы ищете?"
          class="w-full h-[48px] md:h-[40px] sm:h-[32px] pl-12 pr-4 border border-[#E6E6E6] rounded-[4px] text-[16px] md:text-[14px] sm:text-[12px] placeholder-[#D6D6D6] focus:outline-none focus:border-[#3C332D] bg-white"
        />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          <svg
            class="w-5 h-5 md:w-4 md:h-4 sm:w-3 sm:h-3 text-[#D6D6D6]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke-width="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round" />
          </svg>
        </span>
      </div>
    </div>

    <!-- Квартиры и пагинация w-full вне .container -->
    <div class="w-full relative">
      <div class="w-full">
        <div class="w-full h-[1px] bg-[#000000] opacity-10"></div>
        <div
          v-for="(apartment, idx) in paginatedApartments"
          :key="apartment.id"
          class="relative group cursor-pointer w-full border-b border-[#E6E6E6] last:border-b-0 transition-colors duration-300 py-6 max-md:py-4 "
          :class="{ 'bg-[#40362E]': hoveredIdx === idx, 'bg-white': hoveredIdx !== idx }"
          @mouseenter="hoveredIdx = idx"
          @mouseleave="hoveredIdx = null"
        >
          <div
            class="flex items-center h-[72px] max-md:h-fit max-md:items-start px-0 relative transition-all duration-300 w-full justify-between max-md:gap-[30px] max-md:flex-col"
            :class="{ 'text-white': hoveredIdx === idx, 'text-[#3C332D]': hoveredIdx !== idx }"
          >
            <div class="flex flex-row items-center gap-[15px]">
              <span class="inline-block transition-all duration-300 ml-[50px] max-md:ml-[20px] ">
                <img
                  :src="hoveredIdx === idx ? '/Romb.svg' : '/BlackRomb.svg'"
                  alt="romb"
                  class="w-[18px] h-[18px] max-md:w-[14px] max-md:h-[14px]"
                />
              </span>
              <span class="text-lg max-md:text-base mr-8 max-md:mr-4 "
                >По виду</span
              >
            </div>

            <span class="text-3xl max-md:text-xl  flex-1 w-fit max-md:ml-[15px]">{{
              apartment.title
            }}</span>
            <div class="flex flex-row max-md:justify-between max-md:w-full">
              <span
                class="text-lg max-md:text-xl  mr-8 max-md:mr-4  whitespace-nowrap max-md:ml-[15px]"
                >от {{ apartment.price.toLocaleString() }} ₽ за м²</span
              >
              <router-link
                :to="`/catalog/${apartment.id}`"
                class="text-[15px] max-md:text-[13px]  transition-all duration-300 mr-8 max-md:mr-4 underline"
                :class="
                  hoveredIdx === idx
                    ? 'text-white hover:text-white underline'
                    : 'text-[#A6A6A6] hover:underline hover:text-[#3C332D]'
                "
              >
                Подробнее
              </router-link>
            </div>
          </div>
          <!-- Картинка при ховере -->
          <transition name="fade-slide max-md:hidden">
            <div
              v-if="hoveredIdx === idx"
              class="absolute left-1/2 top-1/2 z-10 pointer-events-none max-md:hidden"
              style="transform: translate(-50%, -50%) rotate(8deg)"
            >
              <img
                :src="apartment.image"
                :alt="apartment.title"
                class="max-md:hidden w-[320px] h-[180px] md:w-[240px] md:h-[135px] sm:w-[160px] sm:h-[90px] xs:w-[120px] xs:h-[68px] object-cover rounded-[4px] shadow-lg border border-[#E6E6E6] bg-white"
              />
            </div>
          </transition>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#000000] opacity-10"></div>

      <!-- Пагинация -->
      <div
        class="flex items-center bg-white w-auto mt-[50px] mr-[50px] md:absolute md:right-0 max-md:mr-0 sm:justify-end justify-center md:w-full "
      >
        <button
          class="px-8 py-3 md:px-6 md:py-2  rounded-full border border-[#848386] text-lg md:text-base  hover:bg-[#0A0A0A]/5 transition-colors text-[#0A0A0A]"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          Пред.
        </button>
        <span
          class="text-3xl md:text-2xl  mx-[50px] md:mx-8  text-center text-[#000000]"
          >{{ currentPage }}</span
        >
        <button
          class="px-8 py-3 md:px-6 md:py-2  rounded-full border border-[#848386] text-lg md:text-base  hover:bg-[#0A0A0A]/5 transition-colors text-[#0A0A0A]"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          След.
        </button>
      </div>
    </div>

    <RepairServices />
    <Footer />
  </div>
</template>

<style scoped>
.bg-white {
  background: #fff;
}
input::placeholder {
  color: #d6d6d6;
  opacity: 1;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
