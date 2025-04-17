<script setup lang="ts"></script>

<template>
  <footer class="bg-black text-white py-[50px]">
    <div class="mx-[50px] flex flex-col gap-[60px]">
      <div class="flex justify-between items-start">
        <img src="/Logo.svg" alt="Логотип" class="w-[85px] h-[85px]" />
        
        <div class="flex gap-[95px]">
          <!-- Первая колонка -->
          <div class="flex flex-col gap-5">
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Все услуги</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Капитальный ремонт</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Офисный ремонт</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Черновой ремонт</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Евроремонт</a>
          </div>

          <!-- Вторая колонка -->
          <div class="flex flex-col gap-5">
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Акции</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">О нас</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Отзывы</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Вопрос-ответ</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Блог</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Контакты</a>
            <a href="#" class="text-lg hover:text-white/70 transition-colors">Карта сайта</a>
          </div>

          <!-- Контакты -->
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
              <span class="text-white/70">E-mail</span>
              <a href="mailto:sochi-repair@gmail.com" class="text-lg hover:text-white/70 transition-colors">
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
              <a href="#" class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                <img src="/vk.svg" alt="VK" class="w-5 h-5" />
              </a>
              <a href="#" class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                <img src="/telegram.svg" alt="Telegram" class="w-5 h-5" />
              </a>
              <a href="#" class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                <img src="/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
              </a>
              <a href="#" class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                <img src="/youtube.svg" alt="YouTube" class="w-5 h-5" />
              </a>
              <a href="#" class="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                <img src="/odnoklassniki.svg" alt="Odnoklassniki" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Кнопка обратного звонка -->
        <button class="w-[455px] py-[30px] border border-white/30 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">
          Обратный звонок
        </button>
      </div>

      <!-- Нижняя часть футера -->
      <div class="flex items-center justify-between text-white/70 text-sm">
        <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
        <div class="flex items-center gap-2">
          <span>© 2017 - 2023 Сочи-Ремонт.</span>
          <span>Все права защищены.</span>
        </div>
        <div class="flex items-center gap-1">
          <span>Разработано</span>
          <a href="#" class="hover:text-white transition-colors">Студией Сайтов</a>
        </div>
      </div>
    </div>
  </footer>
</template> 