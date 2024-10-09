<template>
  <CartCheckoutSection :title="$t('payment_method')">
    <URadioGroup v-model="selected" :options="options" :ui="{ base: 'mb-2' }" />
  </CartCheckoutSection>
</template>

<script setup lang="ts">
const options = [
  {
    value: 'Cash',
    label: 'Cash',
  },
  {
    value: 'Bank',
    label: 'Bank card',
  },
  {
    value: 'Via',
    label: 'Via Link k-net',
  },
];

const selected = ref('Bank');
</script>
