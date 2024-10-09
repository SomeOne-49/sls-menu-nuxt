<template>
  <NuxtLink
    :to="props.link"
    class="flex flex-col bg-[#F5F5F9] rounded overflow-hidden duration-500 justify-center items-center shrink-0"
    :class="props.isSlider ? 'w-full' : 'w-[115px]'"
  >
    <div class="transition-transform" :class="y > 0 ? 'py-0' : 'py-1'">
      <div>
        <img
          :src="props.img"
          :alt="props.title"
          class="object-cover transition-all duration-500"
          :class="y > 0 ? 'h-0' : 'h-14'"
        />
      </div>
    </div>
    <div
      class="transition-colors duration-500 text-center text-xs py-2.5 w-full px-2"
      :class="props.isActive ? 'bg-[#303030] text-white' : 'bg-[#F5F5F9]'"
    >
      <p class="text-hidden">{{ props.title }}</p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
type Props = {
  isSlider: boolean;
};
import { useWindowScroll } from '@vueuse/core';
import type { CategoryBarBoxProps } from '~/types';

const { y } = useWindowScroll();

const props = defineProps<CategoryBarBoxProps>();
</script>
