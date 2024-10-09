<template>
  <CartCheckoutSection :title="$t('request_type')" :is-row="true">
    <!-- <div class="flex gap-1 items-center">  </div> -->
    <UButton
      v-if="requestType === 'At place'"
      icon="solar:shop-2-broken"
      :label="$t('pickup')"
      variant="soft"
      color="black"
      class="!cursor-default"
      disabled
    />
    <UButton
      v-else
      icon="solar:home-broken"
      :label="$t('delivery')"
      class="!cursor-default"
      disabled
      variant="soft"
      color="black"
    />
  </CartCheckoutSection>
</template>

<script setup lang="ts">
type Props = {
  requestType: 'delivery' | 'At place';
};
defineProps<Props>();
</script>
