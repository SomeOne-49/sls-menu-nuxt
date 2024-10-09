<template>
  <div
    class="flex gap-2 items-center"
    :class="!isSidebar ? 'max-sm:hidden' : 'sm:hidden'"
  >
    <HeaderActionsDelivery />
    <HeaderActionsPickup />
  </div>
</template>

<script setup lang="ts">
type Props = {
  isSidebar?: boolean;
};

defineProps<Props>();
</script>
