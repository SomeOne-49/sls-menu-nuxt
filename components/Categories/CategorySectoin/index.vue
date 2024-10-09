<template>
  <div class="flex flex-col gap-3">
    <CategoriesCategorySectoinHead :title="props.title" :link="props.link" />
    <div class="flex flex-wrap items-center gap-y-3">
      <div
        class="w-1/2 px-2 sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6"
        v-for="product of props.products"
        key="i"
      >
        <UiSharedCardsProductCardDetailsModal
          :key="product.id"
          :id="product.id"
          :price="product.price"
          :img="product.img"
          :title="product.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SectionProps } from '~/types';

const props = defineProps<SectionProps>();
</script>
