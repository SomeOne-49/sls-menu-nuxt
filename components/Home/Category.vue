<template>
  <NuxtLink :to="props.link">
    <div
      ref="target"
      class="relative mx-auto flex items-end max-w-[350px] overflow-hidden rounded-2xl border-2 h-[45vw] sm:h-72"
    >
      <div class="absolute size-full">
        <img
          :src="props.img"
          :alt="props.title"
          class="size-full object-cover"
        />
      </div>
      <div
        class="bg-black/65 backdrop-blur-sm grow flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 text-center sm:text-start text-white flex-col sm:flex-row"
      >
        <div
          class="-mt-10 rounded-2xl border-2 border-secondary-content items-center justify-center bg-white p-2 md:p-4 size-14 sm:w-24 sm:h-24 hidden sm:flex"
        >
          <img :src="icon" alt="CategoryIcon" />
        </div>
        <div>
          <h6 class="font-bold text-hidden text-sm sm:text-base">
            {{ props.title }}
          </h6>
          <p class="text-xs sm:text-sm text-hidden">
            عدد المنتجات ({{ props.mealsCount }})
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { CategoryBoxProps } from '~/types';
const props = defineProps<CategoryBoxProps>();
</script>
