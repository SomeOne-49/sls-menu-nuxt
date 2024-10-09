<template>
  <div
    class="sticky bottom-0 z-50 left-0 w-full py-3 border-t bg-primary/75 backdrop-blur-sm"
  >
    <div class="container">
      <div class="flex items-center justify-between gap-3">
        <div class="flex flex-col gap-1 text-sm text-white">
          <h6 class="font-semibold">{{ $t('total') }}</h6>
          <h6 class="font-semibold">$0.00</h6>
        </div>
        <div class="flex border rounded-md">
          <USelectMenu
            :ui="{
              base: '!ring-0 !border-none !outline-none',
              rounded: 'rounded-e-none',
              container: 'w-56',
            }"
            v-model="selected"
            size="lg"
            color="white"
            :options="people"
          />
          <NuxtLink
            to="/cart"
            class="rounded-e-md border-1 border-s-0 ring-gray-200 text-white flex justify-items-center items-center dark:ring-gray-700 px-3 bg-gradient-to-r from-[#169A79] to-[#24CF68]"
          >
            <Icon name="solar:cart-large-minimalistic-linear" size="24px" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();

const people = [
  {
    label: t('pickup'),
    icon: 'solar:shop-2-broken',
  },
  {
    label: t('delivery'),
    icon: 'solar:home-broken',
  },
];

const selected = ref(people[0]);
const items = [[]];
</script>
