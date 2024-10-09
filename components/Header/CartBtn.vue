<template>
  <div>
    <HeaderBtn
      :icon="
        !$route.fullPath.includes('cart')
          ? 'solar:cart-large-minimalistic-linear'
          : locale === 'en'
          ? 'solar:arrow-right-outline'
          : 'solar:arrow-left-outline'
      "
      @click="goBack"
    />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (router.currentRoute.value.fullPath.includes('/cart')) {
    router.go(-1);
  } else {
    router.push('/cart');
  }
};
</script>
