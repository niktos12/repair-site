<script setup lang="ts"></script>

<template>
  <footer class="bg-[#FFFBFC] text-[#0A0A0A] py-[30px] md:py-[50px]">
    <div class="mx-[20px] md:mx-[50px] flex flex-col gap-[40px] md:gap-[60px]">
      <div class="flex flex-col 3xl:flex-row lg:justify-between gap-[40px]">
        <div class="flex flex-col justify-between gap-[30px]">
          <div class="flex flex-row gap-2.5 items-center">
            <img
              src="/ExcludeBlack.svg"
              alt="Логотип"
              class="w-[60px] h-[60px] md:w-[85px] md:h-[85px]"
            />
            <span class="text-2xl hidden max-md:block leading-[20px]">Сочи<br />Ремонт</span>
          </div>

          <div class="flex flex-col items-left gap-[20px] md:gap-[30px] text-[#0A0A0A]/70 text-sm">
            <a href="#" class="hover:text-[#0A0A0A] transition-colors text-base md:text-lg"
              >Политика конфиденциальности</a
            >
            <div class="flex flex-col text-base md:text-lg mt-0 md:mt-5">
              <span>© 2017 - 2023 Сочи-Ремонт.</span>
              <span>Все права защищены.</span>
            </div>
            <div class="flex items-center text-base md:text-lg gap-1">
              <span>Разработано</span>
              <a href="#" class="hover:text-[#0A0A0A] transition-colors underline"
                >Студией Сайтов</a
              >
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-3 max-sm:grid-cols-2 max-2xl:grid-cols-2 max-3xl:grid-cols-3 gap-[30px]"
        >
          <div class="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] w-fit">
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Все услуги</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Капитальный ремонт</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Офисный ремонт</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Черновой ремонт</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Евроремонт</a
            >
          </div>

          <div class="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] w-fit">
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Акции</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >О нас</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Отзывы</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Вопрос-ответ</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Блог</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Контакты</a
            >
            <a
              href="#"
              class="text-xl md:text-2xl lg:text-3xl hover:text-[#0A0A0A]/70 transition-colors"
              >Карта сайта</a
            >
          </div>

          <div class="col-span-2 lg:col-span-1 flex flex-col justify-between gap-[30px]">
            <div class="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]">
              <div class="flex flex-col gap-2">
                <span class="text-[#0A0A0A]/70">E-mail</span>
                <a
                  href="mailto:sochi-repair@gmail.com"
                  class="text-base md:text-lg hover:text-[#0A0A0A]/70 transition-colors"
                >
                  sochi-repair@gmail.com
                </a>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[#0A0A0A]/70">Номер телефона</span>
                <a
                  href="tel:+79317240942"
                  class="text-base md:text-lg hover:text-[#0A0A0A]/70 transition-colors"
                >
                  +7 (931) 724 09 42
                </a>
              </div>
              <div class="flex gap-4 mt-0 md:mt-4">
                <a
                  href="#"
                  class="p-2 md:p-3 rounded-full border border-[#848386] hover:bg-[#0A0A0A]/5 transition-all"
                >
                  <img src="/VK.svg" alt="VK" class="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  class="p-2 md:p-3 rounded-full border border-[#848386] hover:bg-[#0A0A0A]/5 transition-all"
                >
                  <img src="/Telegram.svg" alt="Telegram" class="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  class="p-2 md:p-3 rounded-full border border-[#848386] hover:bg-[#0A0A0A]/5 transition-all"
                >
                  <img src="/WhatsApp.svg" alt="WhatsApp" class="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  class="p-2 md:p-3 rounded-full border border-[#848386] hover:bg-[#0A0A0A]/5 transition-all"
                >
                  <img src="/Youtube.svg" alt="YouTube" class="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  class="p-2 md:p-3 rounded-full border border-[#848386] hover:bg-[#0A0A0A]/5 transition-all"
                >
                  <img src="/OK.svg" alt="Odnoklassniki" class="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            <button
              class="w-full 3xl:w-[455px] py-[20px] md:py-[30px] leading-[13px] border border-[#848386] rounded-full font-medium text-base md:text-lg cursor-pointer transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A]"
            >
              Обратный звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
