<script setup lang="ts">
const { locale } = useI18n();

const isOpen = ref(false);
</script>

<template>
  <div>
    <UButton
      icon="solar:share-broken"
      class="shadow-md hover:text-primary"
      color="primary"
      size="xl"
      @click="isOpen = true"
    />

    <UModal v-model="isOpen" :ui="{ container: '!items-center' }">
      <UCard :class="locale === 'ar' && 'isAr'">
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-xl font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ $t('share_via') }}
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

        <div class="flex gap-3 items-center justify-center">
          <UButton
            target="_blank"
            class="icon hover:text-[#1877f2] transition-colors duration-500"
          >
            <Icon name="solar:link-round-angle-broken" size="26px" />
          </UButton>
          <UButton
            target="_blank"
            class="icon hover:text-[#1877f2] transition-colors duration-500"
          >
            <Icon name="ri:facebook-fill" size="26px" />
          </UButton>
          <UButton
            target="_blank"
            class="icon hover:text-[#000000] transition-colors duration-500"
          >
            <Icon name="ri:twitter-x-fill" size="26px" />
          </UButton>
          <UButton
            target="_blank"
            class="icon hover:text-[#25d366] transition-colors duration-500"
          >
            <Icon name="ri:whatsapp-line" size="26px" />
          </UButton>
          <UButton
            target="_blank"
            class="icon hover:text-[#833ab4] transition-colors duration-500"
          >
            <Icon name="ri:instagram-line" size="26px" />
          </UButton>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
