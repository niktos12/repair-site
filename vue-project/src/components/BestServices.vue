<script setup lang="ts"></script>

<template>
  <section class="bg-black text-white py-[50px]">
    <div class="mx-[50px] flex flex-col gap-[60px]">
      <h2 class="text-6xl font-normal">Почему мы предоставляем<br />лучшие услуги в Сочи</h2>
      <div class="w-full h-[1px] bg-[#FFFBFC]"></div>
      <div class="flex justify-between gap-8 mb-10 items-start">
        <div class="flex flex-row items-center gap-[15px]">
          <img src="/BlackRomb.svg" alt="Romb" width="18" height="18" />
          <p class="text-lg">Преимущества</p>
        </div>
        <div class="flex flex-col gap-[30px]">
          <div class="flex flex-row gap-[30px]">
            <div
              class="w-[428px] h-[428px] border border-white/30 rounded-full flex items-center justify-center text-center transition-all duration-300 hover:bg-[#4A4235]"
            >
              <h3 class="text-2xl font-normal">Уникальный<br />дизайн</h3>
            </div>

            <div
              class="w-[428px] h-[428px] bg-[#4A4235] border border-white/30 rounded-full flex items-center justify-center text-center transition-all duration-300 hover:bg-black"
            >
              <h3 class="text-2xl font-normal">Лучшие<br />материалы</h3>
            </div>

            <div
              class="w-[428px] h-[428px] border border-white/30 rounded-full flex items-center justify-center text-center transition-all duration-300 hover:bg-[#4A4235]"
            >
              <h3 class="text-2xl font-normal">Быстрое<br />выполнение</h3>
            </div>
          </div>
          <div class="text-left flex items-center flex-row justify-between text-white/70 mt-[50px]">
            <p class="text-3xl">
              Ремонтируем квартиры уже более 20 лет.<br />Имеем более 60 сотрудников в штате,<br />которые
              горят своим делом.
            </p>
            <button
              class="w-[455px] py-[30px] border border-white/30 rounded-full font-medium leading-[13px] text-lg cursor-pointer transition-all duration-300 hover:bg-[#4A4235] hover:border-[#4A4235]"
            >
              О компании
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
