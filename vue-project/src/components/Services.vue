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
  <div class="flex flex-col gap-8 md:gap-[60px] py-12 md:py-20 bg-[#FFFBFC]">
    <h2 class="text-3xl md:text-5xl lg:text-6xl font-medium text-center px-5 md:text-left md:self-center text-[#40362E]">
      Готовые пакеты услуг, в<br />
      зависимости от количества м²
    </h2>
    <div class="flex flex-col divide-y divide-[#0A0A0A] mx-5 md:mx-0">
      <div></div>
      <div v-for="service in services" :key="service.title" class="py-6 md:py-8">
        <div class="flex flex-col md:flex-row md:justify-around md:items-center w-full gap-4 md:gap-0">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center md:w-1/2 gap-4 md:gap-0">
            <div class="flex items-center gap-2">
              <img src="/BlackRomb.svg" alt="Romb" class="w-4 h-4 md:w-[18px] md:h-[18px]" />
              <span class="text-base md:text-lg text-[#0A0A0A]">{{ service.type }}</span>
            </div>
            <h3 class="text-2xl md:text-3xl text-left max-w-[450px] text-[#0A0A0A]">{{ service.title }}</h3>
          </div>

          <div class="flex items-center justify-between md:w-[30%]">
            <span class="text-base md:text-lg text-[#0A0A0A] whitespace-nowrap">{{ service.price }}</span>
            <button class="text-base md:text-lg text-[#848386] hover:text-black transition-colors duration-300">
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#0A0A0A]"></div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
