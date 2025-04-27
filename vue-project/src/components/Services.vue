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
  <div class="flex flex-col gap-8 lg:gap-[60px] py-12 lg:py-20 bg-[#FFFBFC]">
    <h2 class="text-3xl lg:text-5xl xl:text-6xl font-medium text-center px-5 lg:text-left lg:self-center text-[#40362E]">
      Готовые пакеты услуг, в<br />
      зависимости от количества м²
    </h2>
    <div class="flex flex-col divide-y divide-[#0A0A0A]  lg:mx-0">
      <div></div>
      <div v-for="service in services" :key="service.title" class="py-6 lg:py-8">
        <div class="flex flex-col lg:flex-row lg:justify-around lg:items-center w-full gap-4 lg:gap-0">
          <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-1/2 gap-4 lg:gap-0">
            <div class="flex items-center gap-2 max-lg:mx-5">
              <img src="/BlackRomb.svg" alt="Romb" class="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              <span class="text-base lg:text-lg text-[#0A0A0A]">{{ service.type }}</span>
            </div>
            <h3 class="text-2xl lg:text-3xl text-left max-w-[450px] text-[#0A0A0A] max-lg:mx-5 ">{{ service.title }}</h3>
          </div>

          <div class="flex items-center justify-between lg:w-[30%] max-lg:mx-5">
            <span class="text-base lg:text-lg text-[#0A0A0A] whitespace-nowrap">{{ service.price }}</span>
            <button class="text-base lg:text-lg text-[#848386] hover:text-black transition-colors duration-300">
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
</style>
