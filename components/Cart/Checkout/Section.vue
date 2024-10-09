<template>
  <div
    class="border-b px-2.5 py-3 flex justify-between items-center"
    :class="!isRow && 'flex-col !items-start'"
  >
    <h6 class="font-semibold" :class="!isRow && 'mb-1.5'">
      {{ title }}
    </h6>
    <slot />
  </div>
</template>

<script lang="ts" setup>
type Prpos = {
  title: string;
  isRow?: boolean;
};
defineProps<Prpos>();
</script>
