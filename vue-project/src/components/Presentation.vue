<script setup lang="ts"></script>

<template>
  <section class="bg-[url('/mainbg.svg')] bg-cover bg-center">
    <div
      class="flex flex-col h-[1000px] justify-between mb-[50px]"
    >
      <div class="flex flex-col gap-[60px] mt-[150px]">
        <h1 class="text-9xl text-[#FFFBFC] break-words font-medium mx-[50px]">
          Ремонт и <br />
          отделка в Сочи
        </h1>
        <div class="w-full h-[1px] bg-[#FFFBFC] opacity-10"></div>
        <div class="flex flex-row items-baseline gap-[18px] mx-[50px]">
          <img src="/Romb.svg" alt="Romb" width="18" height="18" />
          <p class="text-lg text-[#FFFBFC]">
            Отремонтируем ваш дом,
            <br />
            квартиру или комнату
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-end items-center gap-20 mx-[50px]">
        <p class="text-3xl text-[#FFFBFC]">
          Все виды услуг по ремонту,
          <br />
          отделке и проектированию
        </p>
        <button
          class="bg-[#FFFBFC] text-black text-lg px-[141px] py-7 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          Заказать ремонт
        </button>
      </div>
    </div>
  </section>
</template>
