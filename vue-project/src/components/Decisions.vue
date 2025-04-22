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
  <section class="bg-[#FFFBFC] text-[#0A0A0A] py-[100px]">
    <div class="mx-[50px] h-[1000px] flex flex-col justify-center">
      <h2 class="text-6xl font-normal mb-[60px]">
        Лучшие решения по ремонту и<br />отделке для жителей Сочи!
      </h2>

      <div class="flex items-end gap-[290px]">
        <div class="flex flex-col justify-between h-full">
          <div class="flex flex-row gap-[15px]">
            <img src="/BlackRomb.svg" alt="Черный ромб" />
            <h3 class="text-lg">Виды работ</h3>
          </div>
          <div class="flex flex-row gap-[15px]">
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
          :slides-per-view="3"
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
