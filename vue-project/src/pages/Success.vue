<script setup>
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="bg-white min-h-screen flex flex-col">
    <Header is-transparent="true" color-scheme="black" />
    <div class="flex flex-col flex-1 justify-between">
      <div>
        <div
          class="flex flex-col items-start mx-[20px] lg:flex-row lg:mx-[50px] mt-[100px] lg:mt-[200px] mb-0 lg:gap-[400px] gap-[50px]"
        >
          <button class="text-[#C1BCB8] text-lg underline" @click="router.back()">Назад</button>
          <h1 class="text-[40px] lg:text-[96px] leading-tight font-medium text-[#40362E] mb-0">
            Успешно!
          </h1>
        </div>
        <div class="w-full h-[1px] bg-[#0A0A0A] opacity-10 my-[30px] lg:my-[60px]"></div>
        <div class="mx-[20px] lg:mx-[50px] flex flex-row items-start gap-2 lg:gap-4">
          <img
            src="/BlackRomb.svg"
            alt="Romb"
            class="w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] mt-1"
          />
          <span class="text-base lg:text-lg text-black"
            >Ваша заявка отправлена<span class="hidden lg:inline">,</span>
            <br class="hidden lg:block" /><span class="text-black hidden lg:inline"
              >мы скоро свяжемся с Вами</span
            >
          </span>
        </div>
      </div>
      <div class="flex justify-end mx-[20px] lg:mx-[50px] mb-6 lg:mb-[50px]">
        <button
          class="w-full md:w-[340px] h-12 lg:h-16 rounded-full border border-[#C1BCB8] text-[#40362E] text-base lg:text-xl font-normal bg-transparent hover:bg-[#40362E] hover:text-white transition-colors duration-200"
          @click="goHome"
        >
          На главную
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
