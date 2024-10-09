<template>
  <CartCheckoutSection :title="$t('phone')">
    <div class="w-full">
      <input
        class="w-full border rounded-md py-3 outline-none p-2 text-sm"
        :placeholder="$t('enter_phone') + '...'"
      />
    </div>
  </CartCheckoutSection>
</template>

<script setup lang="ts"></script>
