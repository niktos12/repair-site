<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const apartmentId = parseInt(route.params.id as string);

interface Apartment {
  id: number;
  title: string;
  price: number;
  type: string;
  description: string;
  features: string[];
  images: string[];
}

const apartment = ref<Apartment | null>(null);

// В реальном приложении здесь будет API запрос
onMounted(() => {
  // Имитация загрузки данных
  const apartmentData = {
    1: {
      id: 1,
      title: 'Черновой ремонт',
      price: 6000,
      type: 'Черновой ремонт',
      description: 'Черновой ремонт включает в себя базовые работы по выравниванию стен, потолка и пола, установку электропроводки и сантехники. Это основа для последующей чистовой отделки.',
      features: [
        'Выравнивание стен',
        'Монтаж электропроводки',
        'Установка сантехники',
        'Стяжка пола'
      ],
      images: ['/apartments/rough1.jpg', '/apartments/rough2.jpg', '/apartments/rough3.jpg']
    },
    2: {
      id: 2,
      title: 'Капитальный ремонт',
      price: 14000,
      type: 'Капитальный ремонт',
      description: 'Капитальный ремонт предполагает полное обновление помещения, включая замену всех коммуникаций, перепланировку и качественную отделку.',
      features: [
        'Перепланировка помещений',
        'Замена коммуникаций',
        'Качественные отделочные материалы',
        'Дизайн-проект'
      ],
      images: ['/apartments/capital1.jpg', '/apartments/capital2.jpg', '/apartments/capital3.jpg']
    },
    3: {
      id: 3,
      title: 'Декоративный ремонт',
      price: 8000,
      type: 'Декоративный ремонт',
      description: 'Декоративный ремонт фокусируется на обновлении внешнего вида помещения без серьезного вмешательства в конструктив и коммуникации.',
      features: [
        'Поклейка обоев',
        'Покраска стен',
        'Укладка напольных покрытий',
        'Установка плинтусов'
      ],
      images: ['/apartments/decorative1.jpg', '/apartments/decorative2.jpg', '/apartments/decorative3.jpg']
    },
    4: {
      id: 4,
      title: 'Евроремонт',
      price: 16000,
      type: 'Евроремонт',
      description: 'Евроремонт - это комплексное решение для тех, кто хочет получить квартиру премиум-класса с использованием высококачественных материалов и современных технологий.',
      features: [
        'Премиальные материалы',
        'Современные технологии',
        'Эксклюзивный дизайн',
        'Умный дом'
      ],
      images: ['/apartments/euro1.jpg', '/apartments/euro2.jpg', '/apartments/euro3.jpg']
    }
  };

  apartment.value = apartmentData[apartmentId as keyof typeof apartmentData] || null;
});
</script>

<template>
  <div v-if="apartment" class="container mx-auto px-4 py-8">
    <!-- Хлебные крошки -->
    <div class="text-sm text-gray-500 mb-6">
      <router-link to="/" class="hover:text-gray-900">Главная</router-link>
      <span class="mx-2">/</span>
      <router-link to="/catalog" class="hover:text-gray-900">Каталог</router-link>
      <span class="mx-2">/</span>
      <span>{{ apartment.title }}</span>
    </div>

    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">{{ apartment.title }}</h1>

      <div class="bg-[#3C332D] text-white rounded-lg p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Стоимость</h2>
            <p class="text-3xl">от {{ apartment.price }} ₽/м²</p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">Особенности</h2>
            <ul class="space-y-2">
              <li v-for="feature in apartment.features" :key="feature" class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="prose prose-lg max-w-none mb-8">
        <h2 class="text-2xl font-semibold mb-4">Описание</h2>
        <p class="text-gray-700">{{ apartment.description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(image, index) in apartment.images"
          :key="index"
          class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
        >
          <img :src="image" :alt="`${apartment.title} - изображение ${index + 1}`" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center">
    <p class="text-xl text-gray-600">Ремонт не найден</p>
    <router-link to="/catalog" class="text-brown-500 hover:text-brown-700 mt-4 inline-block">
      Вернуться к каталогу
    </router-link>
  </div>
</template>

<style scoped>
.text-brown-500 {
  color: #8B4513;
}

.text-brown-700 {
  color: #693610;
}

.prose {
  max-width: none;
}
</style> 