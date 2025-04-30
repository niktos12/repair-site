<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const apartmentId = parseInt(route.params.id as string)

interface Apartment {
  id: number
  title: string
  price: number
  type: string
  description: string
  features: string[]
  images: string[]
}

const apartment = ref<Apartment | null>(null)
const hoveredIdx = ref<number | null>(null)

onMounted(() => {
  const apartmentData = {
    1: {
      id: 1,
      title: 'Черновой ремонт',
      price: 6000,
      type: 'Черновой ремонт',
      description:
        'Черновой ремонт включает в себя базовые работы по выравниванию стен, потолка и пола, установку электропроводки и сантехники. Это основа для последующей чистовой отделки.',
      features: [
        'Выравнивание стен',
        'Монтаж электропроводки',
        'Установка сантехники',
        'Стяжка пола',
      ],
      images: ['/flatbg.svg', '/flatbg.svg', '/flatbg.svg'],
    },
    2: {
      id: 2,
      title: 'Капитальный ремонт',
      price: 14000,
      type: 'Капитальный ремонт',
      description:
        'Капитальный ремонт предполагает полное обновление помещения, включая замену всех коммуникаций, перепланировку и качественную отделку.',
      features: [
        'Перепланировка помещений',
        'Замена коммуникаций',
        'Качественные отделочные материалы',
        'Дизайн-проект',
      ],
      images: ['/flatbg.svg', '/flatbg.svg', '/flatbg.svg'],
    },
    3: {
      id: 3,
      title: 'Декоративный ремонт',
      price: 8000,
      type: 'Декоративный ремонт',
      description:
        'Декоративный ремонт фокусируется на обновлении внешнего вида помещения без серьезного вмешательства в конструктив и коммуникации.',
      features: [
        'Поклейка обоев',
        'Покраска стен',
        'Укладка напольных покрытий',
        'Установка плинтусов',
      ],
      images: ['/flatbg.svg', '/flatbg.svg', '/flatbg.svg'],
    },
    4: {
      id: 4,
      title: 'Евроремонт',
      price: 16000,
      type: 'Евроремонт',
      description:
        'Евроремонт - это комплексное решение для тех, кто хочет получить квартиру премиум-класса с использованием высококачественных материалов и современных технологий.',
      features: [
        'Премиальные материалы',
        'Современные технологии',
        'Эксклюзивный дизайн',
        'Умный дом',
      ],
      images: ['/flatbg.svg', '/flatbg.svg', '/flatbg.svg'],
    },
  }

  apartment.value = apartmentData[apartmentId as keyof typeof apartmentData] || null
})
</script>

<template>
  <Header color-scheme="black" />
  <div class="bg-[#FFFBFC] min-h-screen w-full">
    <div class="py-8 pt-[120px] max-xs:pt-[60px] w-full">
      <img
        v-if="apartment?.images && apartment.images[0]"
        :src="apartment.images[0]"
        class="w-full h-[700px] px-[50px] max-sm:h-[220px] max-md:h-[400px] object-cover rounded-[4px] mb-[40px] max-sm:mb-[60px] max-md:mb-[100px] max-sm:px-[20px] max-md:px-[50px]"
      />

      <div
        class="flex flex-col max-md:items-center max-md:justify-between mb-8 gap-6"
      >
        <div class="px-[50px] max-sm:px-[20px]  w-full">
          <p
            class="text-sm max-sm:text-base text-[#A6A6A6] hover:text-[#40362E] cursor-pointer underline w-fit mb-2 transition-colors duration-200"
            @click="$router.back()"
          >
            Назад
          </p>
          <h1
            class="text-[120px] max-lg:text-[80px] max-sm:text-[64px] max-megasm:text-3xl  font-medium text-[#3C332D] leading-none text-right mb-4"
          >
            {{ apartment?.title }}
          </h1>
        </div>
        <div class="w-full h-[1px] bg-[#E6E6E6] mt-[30px] max-sm:mt-[40px] max-md:mt-[60px]"></div>
        <div class="flex flex-row items-center justify-between px-[50px] max-sm:px-[20px]  mb-[60px] max-sm:mb-[100px] max-md:mb-[150px] gap-4 max-2xl:flex-col max-2xl:items-start">
          <div class="flex items-center gap-2 mb-4">
            <img src="/BlackRomb.svg" class="w-4 h-4 sm:w-4 sm:h-4" />
            <span class="text-sm sm:text-base text-[#3C332D]">Для всех видов недвижимости</span>
          </div>
          <p class="text-xs sm:text-base text-[#848386] mb-4 max-w-[710px]">{{ apartment?.description }}</p>
          <div class="flex flex-col gap-4 sm:gap-10 w-full sm:w-auto max-2xl:flex-row max-2xl:items-center max-2xl:justify-between">
            <span class="text-base sm:text-lg md:text-xl text-[#3C332D]"
              >от {{ apartment?.price?.toLocaleString() }} ₽ за м²</span
            >

            <button
              class="border border-[#848386] rounded-full w-full sm:w-[320px] md:w-[455px] h-[48px] sm:h-[56px] md:h-[73px] px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-[#848386] bg-transparent transition hover:bg-[#3C332D] hover:text-white hover:border-[#3C332D] focus:ring-2 focus:ring-[#3C332D] focus:outline-none"
            >
              Заказать ремонт
            </button>
          </div>
        </div>
      </div>

    </div>
    <div class="mb-12 w-full">
      <h2
        class="text-2xl sm:text-3xl md:text-6xl text-left self-center max-w-[1000px] break-words font-semibold mb-6 sm:mb-[40px] md:mb-[60px] text-[#3C332D] container mx-auto px-4 sm:px-[20px] md:px-[50px]"
      >
        Другие решения по ремонту, которые могут вам подойти
      </h2>
      <div class="w-full">
        <div class="w-full h-[1px] bg-[#E6E6E6]"></div>
        <div
          v-for="(other, idx) in [
            {
              id: 3,
              title: 'Декоративный ремонт',
              price: 8000,
              type: 'Декоративный',
              image: '/flatbg.svg',
            },
            { id: 4, title: 'Евроремонт', price: 14000, type: 'Евроремонт', image: '/flatbg.svg' },
          ]"
          :key="other.id"
          class="relative group cursor-pointer w-full border-b border-[#E6E6E6] last:border-b-0 transition-colors duration-300 py-4 sm:py-6 hover:bg-[#40362E]"
          :class="{ 'bg-[#40362E]': hoveredIdx === idx, 'bg-white': hoveredIdx !== idx }"
          @mouseenter="hoveredIdx = idx"
          @mouseleave="hoveredIdx = null"
        >
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center  gap-2 sm:gap-4 px-2 sm:px-4 py-2 transition-all duration-300 w-full justify-between"
            :class="{ 'text-white': hoveredIdx === idx, 'text-[#3C332D]': hoveredIdx !== idx }"
          >
            <div class="flex flex-row items-center gap-[15px] max-sm:ml-[15px]">
              <span class="inline-block transition-all duration-300 ml-0 sm:ml-[20px] md:ml-[50px]">
                <img
                  :src="hoveredIdx === idx ? '/Romb.svg' : '/BlackRomb.svg'"
                  alt="romb"
                  class="w-4 h-4 sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]"
                />
              </span>
              <span class="text-xs sm:text-base mr-4">По виду</span>
            </div>

            <span class="text-3xl max-md:text-xl flex-1 w-fit max-md:ml-[15px]">{{
              other.title
            }}</span>
            <span class="text-sm sm:text-lg mr-4 whitespace-nowrap  max-sm:ml-[15px]">от {{ other.price.toLocaleString() }} ₽ за м²</span>
            <router-link
              :to="`/catalog/${other.id}`"
              class="text-xs sm:text-[13px] transition-all duration-300 mr-4 underline  max-sm:ml-[15px] hover:text-[#40362E] focus:text-[#3C332D]"
              :class="
                hoveredIdx === idx
                  ? 'text-white hover:text-white'
                  : 'text-[#A6A6A6] hover:underline hover:text-[#3C332D]'
              "
            >
              Подробнее
            </router-link>
          </div>
          <transition name="fade-slide">
            <div
              v-if="hoveredIdx === idx"
              class="absolute left-1/2 top-1/2 z-10 pointer-events-none hidden sm:block"
              style="transform: translate(-50%, -50%) rotate(8deg)"
            >
              <img
                :src="other.image"
                :alt="other.title"
                class="w-[320px] h-[180px] md:w-[240px] md:h-[135px] sm:w-[160px] sm:h-[90px] object-cover rounded-[4px] shadow-lg border border-[#E6E6E6] bg-white"
              />
            </div>
          </transition>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#E6E6E6]"></div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.text-brown-500 {
  color: #8b4513;
}

.text-brown-700 {
  color: #693610;
}

.prose {
  max-width: none;
}
</style>
