<template>
  <div class="m-1 p-2.5 rounded-md shadow-md flex flex-col gap-1.5">
    <div class="flex gap-1.5 items-center">
      <Icon size="18px" :name="props.icon" />
      <p class="text-xs">{{ props.title }}</p>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
type Props = {
  title: string;
  icon: string;
};
const props = defineProps<Props>();
</script>
