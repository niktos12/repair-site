<script setup lang="ts"></script>

<template>
  <div class="flex flex-col mx-[50px] h-[900px] justify-between bg-[url('/mainbg.svg')] bg-cover bg-center">
    <div class="flex flex-col gap-[60px] mt-[150px]">
      <h1 class="text-9xl break-words font-medium">
      Ремонт и <br />
      отделка в Сочи
    </h1>
    <div class="w-full h-[1px] bg-[#FFFBFC]"></div>
    <div class="flex flex-row items-baseline gap-[18px]">
      <img src="/Romb.svg" alt="Romb" width="18" height="18" />
      <p class="text-lg">
        Отремонтируем ваш дом,
        <br />
        квартиру или комнату
      </p>
    </div>
    </div>
    <div class="flex flex-row justify-end items-center gap-20">
      <p class="text-3xl">
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
</template>
