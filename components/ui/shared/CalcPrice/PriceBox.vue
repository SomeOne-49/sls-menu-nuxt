<template>
  <UBadge color="gray" variant="solid" size="lg" class="font-bold text-base">
    <span>$</span>{{ price }}
  </UBadge>

  <!-- <div class="font-bold px-3 py-1.5 bg-gray-100 rounded-md shadow-md">
    <span>$</span>{{ price }}
  </div> -->
</template>

<script setup lang="ts">
type Props = {
  price: string;
};
defineProps<Props>();
</script>
