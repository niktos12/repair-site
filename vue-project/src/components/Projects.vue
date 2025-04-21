<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Project {
  id: number
  type: string
  title: string
  area: number
  price: number
  images: string[]
}

const projects = ref<Project[]>([
  {
    id: 1,
    type: 'Квартира',
    title: 'Дизайнерский ремонт, отельная отделка',
    area: 32.3,
    price: 123123123,
    images: ['/flat1.svg', '/flat2.svg', '/flat1.svg', '/flat2.svg'],
  },
  {
    id: 2,
    type: 'Квартира',
    title: 'Премиум ремонт, деревянная отделка',
    area: 127.7,
    price: 598348903,
    images: ['/flat1.svg', '/flat2.svg', '/flat1.svg', '/flat2.svg'],
  },
  {
    id: 3,
    type: 'Квартира',
    title: 'Премиум ремонт, деревянная отделка',
    area: 127.7,
    price: 13245000,
    images: ['/flat1.svg', '/flat2.svg', '/flat1.svg', '/flat2.svg'],
  },
  {
    id: 4,
    type: 'Квартира',
    title: 'Премиум ремонт, деревянная отделка',
    area: 127.7,
    price: 13245000,
    images: ['/flat1.svg', '/flat2.svg', '/flat1.svg', '/flat2.svg'],
  },
])

const currentPage = ref<number>(0)
const projectsPerPage = 2
const showAllProjects = ref<boolean>(false)

const paginatedProjects = computed(() => {
  if (showAllProjects.value) {
    return projects.value
  }
  const start = currentPage.value * projectsPerPage
  return projects.value.slice(start, start + projectsPerPage)
})

const totalPages = computed(() => Math.ceil(projects.value.length / projectsPerPage))

const formatPrice = (price: number): string => {
  return price.toLocaleString('ru-RU') + ' ₽'
}

const toggleShowAll = () => {
  showAllProjects.value = !showAllProjects.value
  currentPage.value = 0
}

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script>

<template>
  <section class="bg-black text-white py-[50px]">
    <div class="mx-[50px] flex flex-col gap-[60px]">
      <h2 class="text-6xl font-normal">Наши проекты, выполненные<br />за 10 лет работы</h2>

      <div class="flex flex-col gap-[30px]">
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="flex justify-between w-full"
        >
          <div class="flex flex-col gap-4 min-w-[300px]">
            <div class="flex items-center gap-[15px]">
              <img src="/BlackRomb.svg" alt="Тип" width="12" height="12" />
              <span class="text-lg">{{ project.type }}</span>
            </div>

            <div class="flex flex-col gap-2">
              <p class="text-lg">{{ project.area }} м². {{ project.title }}</p>
              <p class="text-lg text-white/70">{{ formatPrice(project.price) }}</p>
            </div>
          </div>

          <div class="w-[910px]">
            <swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :space-between="0"
              :grab-cursor="true"
              :pagination="{
                el: `.pagination-${project.id}`,
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: (index: number, className: string) => {
                  return `<span class='${className}'><img src='/Romb.svg' alt='Слайд ${index + 1}' width='18' height='18' /></span>`
                },
              }"
              :navigation="{
                nextEl: `.next-${project.id}`,
                prevEl: `.prev-${project.id}`,
              }"
              class="w-full h-[420px] rounded-lg overflow-hidden"
            >
              <swiper-slide v-for="(image, imgIndex) in project.images" :key="imgIndex">
                <img
                  :src="image"
                  :alt="'Проект ' + project.id + ' фото ' + (imgIndex + 1)"
                  class="w-full h-full object-cover"
                />
              </swiper-slide>

              <div :class="'pagination-' + project.id" class="absolute bottom-[30px] left-[30px] z-10"></div>

              <div class="absolute bottom-[30px] right-[30px] flex gap-2 z-10">
                <button
                  :class="'prev-' + project.id"
                  class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
                >
                  <img src="/Arrow2.svg" alt="Предыдущий" class="w-6 h-6" />
                </button>
                <button
                  :class="'next-' + project.id"
                  class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
                >
                  <img src="/Arrow.svg" alt="Следующий" class="w-6 h-6" />
                </button>
              </div>
            </swiper>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex gap-8 items-center" v-if="!showAllProjects">
          <button
            class="px-8 py-3 rounded-full border border-white text-lg hover:bg-white/10 transition-colors"
            :disabled="currentPage === 0"
            @click="prevPage"
          >
            Пред.
          </button>

          <span class="text-2xl">{{ currentPage + 1 }}</span>

          <button
            class="px-8 py-3 rounded-full border border-white text-lg hover:bg-white/10 transition-colors"
            :disabled="currentPage >= totalPages - 1"
            @click="nextPage"
          >
            След.
          </button>
        </div>

        <button class="text-lg hover:text-white/70 transition-colors" @click="toggleShowAll">
          {{ showAllProjects ? 'Скрыть проекты' : 'Все проекты' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

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
</style>
