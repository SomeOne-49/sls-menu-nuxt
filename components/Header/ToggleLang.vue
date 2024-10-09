<template>
  <div>
    <HeaderBtn
      classes="text-sm font-bold"
      @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
      >{{ locale === 'ar' ? 'EN' : 'AR' }}</HeaderBtn
    >
  </div>
</template>
<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>
