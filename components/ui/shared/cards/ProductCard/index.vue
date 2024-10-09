<template>
  <div>
    <div class="pt-[75%] rounded-md overflow-hidden relative cursor-pointer">
      <img
        :src="props.img"
        :alt="props.title"
        class="absolute top-0 left-0 size-full object-cover"
      />
    </div>
    <UiSharedQuantity />
    <div class="cursor-pointer">
      <h6 class="text-hidden">{{ props.title }}</h6>
      <h6 class="font-semibold text-sm"><span>$</span>{{ props.price }}</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductBoxProps } from '~/types';

const props = defineProps<ProductBoxProps>();
</script>
