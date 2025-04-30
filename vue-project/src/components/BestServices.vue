<script setup lang="ts">
const advantages = [
  { title: 'Уникальный\nдизайн' },
  { title: 'Лучшие\nматериалы', active: true },
  { title: 'Быстрое\nвыполнение' }
]
</script>

<template>
  <section class="bg-black text-white py-8 md:py-[50px]">
    <div class="flex flex-col gap-8 md:gap-[60px]">
      <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mx-5 md:mx-[50px] 3xl:mx-[100px]">
        Почему мы предоставляем<br class="hidden md:block" />
        лучшие услуги в Сочи
      </h2>
      <div class="w-full h-[1px] bg-[#FFFBFC] opacity-10"></div>
      <div class="flex flex-col justify-between gap-8 mb-10 items-start mx-5 md:mx-[50px] 3xl:mx-[100px]">
        <div class="flex flex-row items-center gap-4 md:gap-[15px] mb-8">
          <img src="/BlackRomb.svg" alt="Romb" class="w-4 h-4 md:w-[18px] md:h-[18px]" />
          <p class="text-base md:text-lg">Преимущества</p>
        </div>
        <div class="flex flex-col gap-8 md:gap-[30px] w-full">
          <div class="block lg:hidden w-full">
            <img src="/circles.svg" alt="Преимущества" class="w-full max-w-[345px] mx-auto" />
          </div>

          <div class="hidden lg:flex 3xl:hidden flex-row gap-5 justify-center">
            <div v-for="(advantage, index) in advantages" :key="index"
              class="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[350px] 2xl:h-[350px] border border-white/30 rounded-full flex items-center justify-center text-center transition-all duration-300 hover:bg-[#4A4235]"
              :class="{ 'bg-[#4A4235] hover:bg-black': advantage.active }"
            >
              <h3 class="text-lg xl:text-xl 2xl:text-2xl font-normal whitespace-pre-line">{{ advantage.title }}</h3>
            </div>
          </div>

          <div class="hidden 3xl:flex flex-row gap-[30px] justify-center">
            <div v-for="(advantage, index) in advantages" :key="index"
              class="w-[428px] h-[428px] border border-white/30 rounded-full flex items-center justify-center text-center transition-all duration-300 hover:bg-[#4A4235]"
              :class="{ 'bg-[#4A4235] hover:bg-black': advantage.active }"
            >
              <h3 class="text-2xl font-normal whitespace-pre-line">{{ advantage.title }}</h3>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 mt-8 md:mt-[50px]">
            <p class="text-xl md:text-xl lg:text-2xl xl:text-2xl 3xl:text-3xl text-white/70">
              Ремонтируем квартиры уже более 20 лет.<br class="hidden md:block" />
              Имеем более 60 сотрудников в штате,<br class="hidden md:block" />
              которые горят своим делом.
            </p>
            <button class="w-full md:w-[455px] py-4 md:py-[30px] border border-white/30 rounded-full font-medium text-base md:text-lg cursor-pointer transition-all duration-300 hover:bg-[#4A4235] hover:border-[#4A4235]">
              О компании
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
