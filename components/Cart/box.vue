<template>
  <div
    class="bg-white border rounded-md max-h-[550px] overflow-auto max-w-full"
    :class="classes"
  >
    <div
      class="bg-white/75 backdrop-blur-sm p-2.5 border-b shadow-md sticky top-0 z-40"
    >
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  classes?: string;
};
defineProps<Props>();
</script>
