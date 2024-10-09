<template>
  <div :class="locale === 'ar' && 'isAr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.text-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
body {
  font-family: 'alexandria', sans-serif;
}
.isAr * {
  direction: rtl;
}
</style>

<script setup lang="ts">
const { locale } = useI18n();
</script>
