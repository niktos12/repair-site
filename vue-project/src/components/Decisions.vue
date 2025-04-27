<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Decision {
  id: number
  title: string
  image: string
}

const decisions = ref<Decision[]>([
  {
    id: 1,
    title: 'Дизайн проект',
    image: '/FlatSwiper1.svg',
  },
  {
    id: 2,
    title: 'Отделочные работы',
    image: '/FlatSwiper2.svg',
  },
  {
    id: 3,
    title: 'Инженерные работы',
    image: '/FlatSwiper3.svg',
  },
  {
    id: 4,
    title: 'Комплектация',
    image: '/FlatSwiper3.svg',
  },
])

const realIndex = ref(0)

const isSlideActive = computed(() => {
  return (index: number) => index === realIndex.value
})

const onSlideChange = (swiper: SwiperType) => {
  realIndex.value = swiper.realIndex
}

const onSwiper = (swiper: SwiperType) => {
  realIndex.value = swiper.realIndex
}
</script>

<template>
  <section class="bg-[#FFFBFC] text-[#0A0A0A] py-8 xl:py-[100px]">
    <div class="xl:h-[1000px] flex flex-col justify-center">
      <div class="flex flex-col gap-8 xl:gap-[60px]">
        <h2 class="text-2xl lg:text-6xl font-normal mx-[50px]">
        Лучшие решения по ремонту и<br class="hidden xl:block" /> отделке для жителей Сочи!
      </h2>
      <div class="w-full h-[1px] bg-[#0A0A0A] opacity-10 mb-[60px]"></div>
      </div>
      
      <div class="flex flex-col xl:flex-row xl:items-end xl:gap-[290px] mx-[50px]">
        <div class="flex flex-col justify-between xl:h-full">
          <div class="flex flex-row gap-[15px] items-center mb-8 xl:mb-0">
            <img src="/BlackRomb.svg" alt="Черный ромб" class="w-[18px] h-[18px]" />
            <h3 class="text-lg">Виды работ</h3>
          </div>
          <div class="hidden xl:flex flex-row gap-[15px]">
            <button
              class="decisions-prev w-[73px] h-[73px] border border-[#0A0A0A] rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
            >
              <img src="/Arrow2.svg" alt="Предыдущий" class="w-6 h-6" />
            </button>
            <button
              class="decisions-next w-[73px] h-[73px] border border-[#0A0A0A] rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
            >
              <img src="/Arrow.svg" alt="Следующий" class="w-6 h-6" />
            </button>
          </div>
        </div>

        <swiper
          :modules="[Navigation, Pagination]"
          
          :breakpoints="{ 0: { slidesPerView: 1.2 }, 640: { slidesPerView: 2 }, 1526: { slidesPerView: 3 } }"
          :space-between="10"
          :grab-cursor="true"
          :loop="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{
            el: '.decisions-pagination',
            clickable: true,
          }"
          :navigation="{
            nextEl: '.decisions-next',
            prevEl: '.decisions-prev',
          }"
          class="w-full"
        >
          <swiper-slide
            v-for="(decision, index) in decisions"
            :key="decision.id"
            class="transition-opacity duration-300"
            :class="{ 'opacity-50': !isSlideActive(index) }"
          >
            <div class="bg-white/5 rounded-lg h-full">
              <img :src="decision.image" :alt="decision.title" class="mb-6" />
              <h3 class="text-2xl font-medium">{{ decision.title }}</h3>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="h-[1px] bg-[#0A0A0A] opacity-10 w-full mt-[60px]"></div>
      <button class="mx-[50px]  xl:w-[455px] xl:self-end  border border-[#848386] rounded-full text-lg text-[#848386] h-[73px]  mt-[60px] xl:mr-[50px]">
        <span class="lg:hidden">Подробнее</span>
        <span class="hidden lg:block">Заказать ремонт</span>
      </button>
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
