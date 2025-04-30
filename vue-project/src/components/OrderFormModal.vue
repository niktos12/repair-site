<template>
  <Transition name="modal-fade">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        class="relative w-full max-w-[900px] bg-white sm:bg-[#FFFBFC] sm:shadow-xl min-h-[80vh] rounded-[3px] max-sm:min-h-fit sm:min-h-0  fixed bottom-0 left-0 right-0  shadow-none flex flex-col items-center sm:static  sm:p-0 modal-content"
      >
        <!-- Шапка: заголовок + кнопка 'Закрыть' -->
        <div class="flex items-center justify-between w-full px-4 pt-6 pb-4 border-b border-[#E6E1DD] sm:hidden">
          <h2 class="text-2xl font-normal text-[#40362E]">Оформить заявку</h2>
          <button class="text-[#C1BCB8] text-base font-normal bg-transparent border-0 p-0" @click="$emit('update:modelValue', false)">Закрыть</button>
        </div>
        <!-- Десктопная шапка -->
        <div class="hidden sm:block w-full px-12 pt-12 pb-2 relative">
          <button class="absolute top-0 right-0 mt-[60px] mr-[60px] text-3xl text-[#C1BCB8] hover:text-[#40362E] transition-colors" @click="$emit('update:modelValue', false)">&times;</button>
          <h2 class="text-[64px] leading-[1.1] font-normal text-[#40362E] mb-8 text-left">Оформить заявку</h2>
        </div>
        <!-- Форма -->
        <form @submit.prevent="submitForm" class="w-full px-4 pt-2 pb-4 flex flex-col gap-6 sm:px-12 sm:pt-10 sm:pb-6 sm:gap-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-[#C1BCB8] text-[15px] sm:text-lg mb-1">Имя</label>
              <input
                v-model="name"
                type="text"
                placeholder=" "
                required
                class="border border-[#C1BCB8] bg-transparent rounded-md px-3 py-3 sm:px-4 sm:py-3 text-base sm:text-lg text-[#40362E] placeholder-[#C1BCB8] focus:outline-none focus:border-[#40362E] transition w-full"
              />
              <span v-if="wasSubmitted && errors.name" class="text-red-500 text-xs sm:text-sm mt-1">
                {{ errors.name }}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#C1BCB8] text-[15px] sm:text-lg mb-1">Фамилия</label>
              <input
                v-model="surname"
                type="text"
                placeholder=" "
                class="border border-[#C1BCB8] bg-transparent rounded-md px-3 py-3 sm:px-4 sm:py-3 text-base sm:text-lg text-[#40362E] placeholder-[#C1BCB8] focus:outline-none focus:border-[#40362E] transition w-full"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#C1BCB8] text-[15px] sm:text-lg mb-1">E-mail (Почта)</label>
              <input
                v-model="email"
                type="email"
                placeholder=" "
                class="border border-[#C1BCB8] bg-transparent rounded-md px-3 py-3 sm:px-4 sm:py-3 text-base sm:text-lg text-[#40362E] placeholder-[#C1BCB8] focus:outline-none focus:border-[#40362E] transition w-full"
              />
              <span v-if="wasSubmitted && errors.email" class="text-red-500 text-xs sm:text-sm mt-1">
                {{ errors.email }}
              </span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-[#C1BCB8] text-[15px] sm:text-lg mb-1">Номер телефона</label>
              <input
                v-model="phone"
                v-maska="'+7 (###) ###-##-##'"
                type="tel"
                placeholder="+7"
                required
                class="border border-[#C1BCB8] bg-transparent rounded-md px-3 py-3 sm:px-4 sm:py-3 text-base sm:text-lg text-[#40362E] placeholder-[#C1BCB8] focus:outline-none focus:border-[#40362E] transition w-full"
              />
              <span v-if="wasSubmitted && errors.phone" class="text-red-500 text-xs sm:text-sm mt-1">
                {{ errors.phone }}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#C1BCB8] text-[15px] sm:text-lg mb-1">Тип услуги</label>
              <select
                v-model="serviceType"
                class="border border-[#C1BCB8] bg-transparent rounded-md px-3 py-3 sm:px-4 sm:py-3 text-base sm:text-lg text-[#40362E] focus:outline-none focus:border-[#40362E] transition appearance-none w-full"
              >
                <option value="Капитальный ремонт">Капитальный ремонт</option>
                <option value="Косметический ремонт">Косметический ремонт</option>
                <option value="Дизайнерский ремонт">Дизайнерский ремонт</option>
                <option value="Ремонт офиса">Ремонт офиса</option>
                <option value="Другое">Другое</option>
              </select>
              <span v-if="wasSubmitted && errors.serviceType" class="text-red-500 text-xs sm:text-sm mt-1">
                {{ errors.serviceType }}
              </span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mt-2">
            <div class="text-[#C1BCB8] text-xs sm:text-base leading-tight sm:max-w-[380px]">
              Нажимая кнопку "Отправить" вы даете согласие на обработку персональных данных
            </div>
            <button
              type="submit"
              class="w-full sm:w-[320px] h-12 sm:h-[64px] rounded-full border border-[#C1BCB8] text-[#40362E] text-base sm:text-xl font-normal bg-transparent hover:bg-[#40362E] hover:text-white transition-colors duration-200"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onUnmounted, computed } from 'vue'
import { z } from 'zod'
import { vMaska } from 'maska/vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const name = ref('')
const surname = ref('')
const email = ref('')
const phone = ref('')
const serviceType = ref('Капитальный ремонт')

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  surname: z.string().optional(),
  email: z.string().email('Введите корректный e-mail').optional().or(z.literal('')),
  phone: z
    .string()
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите телефон в формате +7 (XXX) XXX-XX-XX'),
  serviceType: z.string().min(1, 'Выберите тип услуги'),
})

const errors = ref<{ [key: string]: string }>({})
const wasSubmitted = ref(false)

const router = useRouter()

function validate() {
  errors.value = {}
  const result = schema.safeParse({
    name: name.value,
    surname: surname.value,
    email: email.value,
    phone: phone.value,
    serviceType: serviceType.value,
  })
  if (!result.success) {
    for (const issue of result.error.issues) {
      errors.value[issue.path[0]] = issue.message
    }
    return false
  }
  return true
}

const isFormValid = computed(() => validate())

function submitForm() {
  wasSubmitted.value = true
  if (!validate()) return
  emit('update:modelValue', false)
  name.value = ''
  surname.value = ''
  email.value = ''
  phone.value = ''
  serviceType.value = 'Капитальный ремонт'
  errors.value = {}
  wasSubmitted.value = false
  router.push('/success')
}

watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      wasSubmitted.value = false
      errors.value = {}
    }
  },
)

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})

defineExpose({ vMaska })
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.98);
  opacity: 0;
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}
.modal-fade-enter-to .modal-content,
.modal-fade-leave-from .modal-content {
  transform: scale(1);
  opacity: 1;
}
</style>
