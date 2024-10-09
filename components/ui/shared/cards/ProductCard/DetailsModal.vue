<script setup lang="ts">
const { locale } = useI18n();

const isOpen = ref(false);
import type { ProductBoxProps } from '~/types';

const props = defineProps<ProductBoxProps>();
</script>

<template>
  <div>
    <UiSharedCardsProductCard
      :price="props.price"
      :id="props.id"
      :img="props.img"
      :title="props.title"
      @click="isOpen = true"
    />

    <UModal
      v-model="isOpen"
      :ui="{
        base: `!w-[768px]  !max-w-[95%] ${
          locale === 'ar' && 'isAr text-right'
        }`,
        container: '!items-center',
      }"
    >
      <UiSharedCardsProductCardDetails
        @close="isOpen = false"
        :closable="true"
      />
    </UModal>
  </div>
</template>
