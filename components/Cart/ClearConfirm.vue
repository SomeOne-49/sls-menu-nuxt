<script setup lang="ts">
const { locale } = useI18n();

const isOpen = ref(false);
</script>

<template>
  <UButton
    icon="solar:trash-bin-minimalistic-broken"
    size="lg"
    :label="$t('clear_cart')"
    color="red"
    @click="isOpen = true"
  />
  <UModal v-model="isOpen" :ui="{ container: '!items-center' }">
    <UCard
      :class="locale === 'ar' && 'isAr'"
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ $t('are_u_sure') }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-6 justify-start items-start">
        <p class="text-gray-600">
          هذه العملية ستقوم بإفراغ سلتك بالكامل هل تريد المتابعة؟
        </p>

        <div class="flex gap-3 ms-auto w-full justify-end">
          <UButton
            label="إلغاء"
            size="md"
            class="py-3 px-4"
            color="black"
            @click="isOpen = false"
          />
          <UButton
            label="نعم، قم بالإفراغ"
            size="md"
            class="py-3 px-4"
            color="red"
            @click="isOpen = false"
          />
        </div>
      </div>
    </UCard>
  </UModal>
</template>
