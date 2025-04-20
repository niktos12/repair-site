<script setup lang="ts"></script>

<template>
  <footer class="bg-black text-white py-[50px]">
    <div class="mx-[50px] flex flex-col gap-[60px]">
      <div class="flex justify-between">
        <div class="flex flex-col justify-between">
          <img src="/Exclude.svg" alt="Логотип" class="w-[85px] h-[85px]" />
          <div class="flex flex-col items-left gap-[30px] text-white/70 text-sm">
            <a href="#" class="hover:text-white transition-colors text-lg">Политика конфиденциальности</a>
            <div class="flex flex-col text-lg mt-5">
              <span>© 2017 - 2023 Сочи-Ремонт.</span>
              <span>Все права защищены.</span>
            </div>
            <div class="flex items-center text-lg gap-1">
              <span>Разработано</span>
              <a href="#" class="hover:text-white transition-colors underline">Студией Сайтов</a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[50px]">
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Все услуги</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Капитальный ремонт</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Офисный ремонт</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Черновой ремонт</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Евроремонт</a>
        </div>
        <div class="flex flex-col gap-[50px]">
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Акции</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">О нас</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Отзывы</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Вопрос-ответ</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Блог</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Контакты</a>
          <a href="#" class="text-3xl hover:text-white/70 transition-colors">Карта сайта</a>
        </div>
        <div class="flex gap-[95px]">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col gap-[50px]">
              <div class="flex flex-col gap-2">
                <span class="text-white/70">E-mail</span>
                <a
                  href="mailto:sochi-repair@gmail.com"
                  class="text-lg hover:text-white/70 transition-colors"
                >
                  sochi-repair@gmail.com
                </a>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-white/70">Номер телефона</span>
                <a href="tel:+79317240942" class="text-lg hover:text-white/70 transition-colors">
                  +7 (931) 724 09 42
                </a>
              </div>
              <!-- Социальные сети -->
              <div class="flex gap-4 mt-4">
                <a
                  href="#"
                  class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
                >
                  <img src="/VK.svg" alt="VK" class="w-5 h-5" />
                </a>
                <a
                  href="#"
                  class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
                >
                  <img src="/Telegram.svg" alt="Telegram" class="w-5 h-5" />
                </a>
                <a
                  href="#"
                  class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
                >
                  <img src="/WhatsApp.svg" alt="WhatsApp" class="w-5 h-5" />
                </a>
                <a
                  href="#"
                  class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
                >
                  <img src="/Youtube.svg" alt="YouTube" class="w-5 h-5" />
                </a>
                <a
                  href="#"
                  class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
                >
                  <img src="/OK.svg" alt="Odnoklassniki" class="w-5 h-5" />
                </a>
              </div>
            </div>

            <button
              class="w-[455px] py-[30px] leading-[13px] border border-white/30 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
            >
              Обратный звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
