<template>
  <CartCheckoutSection :title="$t('general_notes')">
    <div class="w-full">
      <textarea
        class="w-full border rounded-md min-h-24 resize-none outline-none p-2 text-sm"
        :placeholder="$t('enter_notes') + '...'"
        v-model="value"
      />
    </div>
  </CartCheckoutSection>
</template>

<script setup lang="ts">
const value = ref('');
</script>
