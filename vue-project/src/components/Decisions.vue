<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Decision {
  id: number
  title: string
  description: string
  image: string
}

const decisions = ref<Decision[]>([
  {
    id: 1,
    title: 'Дизайн проект',
    description: 'Мы создаем уникальный дизайн-проект, который отражает ваш стиль и потребности',
    image: '/design.svg'
  },
  {
    id: 2,
    title: 'Отделочные работы',
    description: 'Выполняем все виды отделочных работ с гарантией качества',
    image: '/repair.svg'
  },
  {
    id: 3,
    title: 'Инженерные работы',
    description: 'Профессиональный монтаж всех инженерных систем',
    image: '/engineering.svg'
  },
  {
    id: 4,
    title: 'Комплектация',
    description: 'Подбор и поставка материалов и оборудования',
    image: '/equipment.svg'
  }
])

const activeIndex = ref(0)

const onSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.activeIndex
}
</script>

<template>
  <section class="bg-black text-white py-[100px]">
    <div class="mx-[50px]">
      <h2 class="text-6xl font-normal mb-[60px]">Готовые решения<br />для вашего комфорта</h2>
      
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="3"
        :space-between="30"
        :grab-cursor="true"
        @slideChange="onSlideChange"
        :pagination="{
          el: '.decisions-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index: number, className: string) => {
            return `<span class='${className}'><img src='/Romb.svg' alt='Слайд ${index + 1}' width='12' height='12' /></span>`
          }
        }"
        :navigation="{
          nextEl: '.decisions-next',
          prevEl: '.decisions-prev'
        }"
        class="w-full"
      >
        <swiper-slide 
          v-for="(decision, index) in decisions" 
          :key="decision.id"
          class="transition-opacity duration-300"
          :class="{ 'opacity-50': index !== activeIndex }"
        >
          <div class="bg-white/5 rounded-lg p-8 h-full">
            <img :src="decision.image" :alt="decision.title" class="mb-6 w-12 h-12" />
            <h3 class="text-2xl font-medium mb-4">{{ decision.title }}</h3>
            <p class="text-white/70">{{ decision.description }}</p>
          </div>
        </swiper-slide>

        <div class="flex justify-between items-center mt-[60px]">
          <div class="flex items-center gap-[30px]">
            <div class="decisions-pagination"></div>
            
            <div class="flex gap-2">
              <button class="decisions-prev w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                <img src="/Arrow2.svg" alt="Предыдущий" class="w-4 h-4" />
              </button>
              <button class="decisions-next w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                <img src="/Arrow.svg" alt="Следующий" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </swiper>
    </div>
  </section>
</template>

<style>
.swiper-pagination-bullet {
  width: auto;
  height: auto;
  display: inline-block;
  background: none;
  opacity: 0.5;
  margin: 0 7.5px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.swiper-pagination-bullet img {
  display: block;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> 