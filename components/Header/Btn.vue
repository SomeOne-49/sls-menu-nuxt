<template>
  <UButton
    :icon="props.icon"
    @click="props.onClick"
    class="size-9 p-0 items-center justify-center transition-colors duration-500 rounded-md ring-1 shadow-md"
    :class="`${props.classes}`"
    size="lg"
    color="white"
  >
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
type BtnProps = {
  icon?: string;
  onClick?: () => void;
  classes?: string;
};

const props = defineProps<BtnProps>();
</script>
