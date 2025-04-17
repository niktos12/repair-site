<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <section class="h-[1000px]">
    <div class="relative z-10 mx-[50px] h-full flex flex-col justify-between py-[50px]">
      <div class="flex flex-col gap-[60px]">
        <h2 class="text-6xl text-white font-normal">
          Захочется приглашать гостей<br />каждый день
        </h2>
        <div class="flex justify-between gap-8 items-start">
          <div class="flex flex-row items-center gap-[15px]">
            <img src="/Romb.svg" alt="Romb" width="18" height="18" />
            <p class="text-lg text-white">Скидка 20% при первом заказе</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div></div>
        <div></div>
        <button class="bg-white rounded-full p-7 hover:bg-white/70 transition-all duration-300" @click="scrollToTop">
            <img src="/ArrowUp.svg" alt="Arrow" width="18" height="18" />
        </button>
        <button
          class="w-[455px] py-[30px] border border-white/30 rounded-full font-medium leading-[13px] text-lg text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
        >
          Заказать ремонт
        </button>
      </div>
    </div>
  </section>
</template>
