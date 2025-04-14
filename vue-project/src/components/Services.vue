<script setup lang="ts">
interface ServiceItem {
  type: string
  title: string
  price: string
}

const services: ServiceItem[] = [
  {
    type: 'Для квартир',
    title: 'Бюджетная отделка и ремонт квартиры',
    price: 'от 14.000 ₽ за м²',
  },
  {
    type: 'Любая недвижимость',
    title: 'Уникальный дизайнерский ремонт',
    price: 'от 16.000 ₽ за м²',
  },
  {
    type: 'Любая недвижимость',
    title: 'Премиум, лакшери отделка и ремонт',
    price: 'от 40.000 ₽ за м²',
  },
]
</script>

<template>
  <div class="flex flex-col gap-8  py-20">
    <h2 class="text-6xl font-medium text-left self-center text-[#40362E]">
      Готовые пакеты услуг, в<br />
      зависимости от количества м²
    </h2>
    <div class="flex flex-col divide-y divide-white/20">
      <div class="w-full h-[1px] bg-[#FFFBFC]"></div>
      <div v-for="service in services" :key="service.title" class="py-8">
        <div class="flex justify-between items-center w-full">
          <div class="flex justify-between items-center w-1/2">
            <div class="flex items-center gap-2">
              <img src="/BlackRomb.svg" alt="Romb" width="18" height="18" />
              <span class="text-lg text-[#0A0A0A]">{{ service.type }}</span>
            </div>
            <h3 class="text-3xl text-left max-w-[450px] text-[#0A0A0A]">{{ service.title }}</h3>
          </div>

          <div class="flex items-center justify-between w-[30%]">
            <span class="text-lg text-[#0A0A0A] whitespace-nowrap">{{ service.price }}</span>
            <button class="text-lg text-[#848386] hover:text-white transition-colors duration-300">
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#FFFBFC]"></div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
