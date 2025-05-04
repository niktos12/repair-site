<script setup lang="ts">
import { ref } from 'vue'
import OrderFormModal from './OrderFormModal.vue'

const isOrderModalOpen = ref(false)
</script>

<template>
  <section class="bg-[url('/mainbg.svg')] bg-cover bg-center">
    <div class="flex flex-col min-h-screen md:h-[1000px] justify-between pb-8 md:pb-[50px]">
      <div class="flex flex-col gap-8 md:gap-[60px] mt-24 md:mt-[150px]">
        <h1 class="text-4xl md:text-7xl lg:text-9xl text-[#FFFBFC] break-words font-medium mx-5 md:mx-[50px]">
          Ремонт и <br />
          отделка в Сочи
        </h1>
        <div class="w-full h-[1px] bg-[#FFFBFC] opacity-10"></div>
        <div class="flex flex-row items-baseline gap-4 md:gap-[18px] mx-5 md:mx-[50px]">
          <img src="/Romb.svg" alt="Romb" class="w-4 h-4 md:w-[18px] md:h-[18px]" />
          <p class="text-base md:text-lg text-[#FFFBFC]">
            Отремонтируем ваш дом,
            <br />
            квартиру или комнату
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-end items-center gap-6 md:gap-20 mx-5 md:mx-[50px]">
        <p class="text-xl md:text-3xl text-[#FFFBFC] text-center md:text-left">
          Все виды услуг по ремонту,
          <br />
          отделке и проектированию
        </p>
        <button class="w-full md:w-auto bg-[#FFFBFC] text-black text-lg px-8 md:px-[141px] py-4 md:py-7 rounded-full hover:bg-gray-100 transition-colors duration-300" @click="isOrderModalOpen = true">
          Заказать ремонт
        </button>
      </div>
    </div>
  </section>
  <OrderFormModal v-model="isOrderModalOpen" />
</template>
