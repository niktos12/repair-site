<script setup lang="ts">
import { ref } from 'vue'
import OrderFormModal from './OrderFormModal.vue'

const isOrderModalOpen = ref(false)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="h-[1000px] bg-[url('/guestsbg.svg')] bg-cover bg-center">
    <div class="relative z-10 mx-[20px] md:mx-[50px] h-full flex flex-col justify-between py-[30px] md:py-[50px]">
      <div class="flex flex-col gap-[30px] md:gap-[60px]">
        <h2 class="text-4xl md:text-6xl text-white font-normal">
          Захочется приглашать гостей<br />каждый день
        </h2>
        <div class="flex justify-between gap-8 items-start">
          <div class="flex flex-row items-center gap-[15px]">
            <img src="/Romb.svg" alt="Romb" width="18" height="18" />
            <p class="text-base md:text-lg text-white">Скидка 20% при первом заказе</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="hidden md:block"></div>
        <div class="hidden md:block"></div>
        <button
          class="hidden md:block bg-white rounded-full p-7 hover:bg-white/70 transition-all duration-300"
          @click="scrollToTop"
        >
          <img src="/ArrowUp.svg" alt="Arrow" width="18" height="18" />
        </button>
        <button
          class="w-full md:w-[455px] py-[20px] md:py-[30px] border bg-[#FFFBFC] border-white/30 rounded-full font-medium leading-[13px] text-base md:text-lg text-[#848386] cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
          @click="isOrderModalOpen = true"
        >
          Заказать ремонт
        </button>
      </div>
    </div>
  </section>
  <OrderFormModal v-model="isOrderModalOpen" />
</template>
