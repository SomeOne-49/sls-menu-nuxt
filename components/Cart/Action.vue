<template>
  <div class="flex items-center gap-3">
    <UButton
      :icon="
        locale === 'en'
          ? 'solar:alt-arrow-left-broken'
          : 'solar:alt-arrow-right-broken'
      "
      :label="$t('back')"
      size="lg"
      color="black"
      @click="goBack"
    />
    <CartClearConfirm />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>
