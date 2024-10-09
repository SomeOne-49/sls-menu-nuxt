<template>
  <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 p-3 relative items-start">
    <UButton
      color="gray"
      variant="soft"
      icon="i-heroicons-x-mark-20-solid"
      class="absolute top-2 right-2 z-40"
      :class="locale === 'en' && 'right-auto left-2'"
      @click="triggerClose"
      v-if="closable"
    />
    <div class="sm:col-span-5 col-span-12">
      <UiSharedCardsProductCardGallery />
    </div>
    <div class="sm:col-span-7 col-span-12">
      <div class="flex gap-3 flex-col">
        <div class="flex justify-between items-start gap-2">
          <div>
            <p class="text-primary">فئة المنتج</p>
            <h1 class="text-3xl">وجبة شيش غريل</h1>
            <h4 class="text-lg mt-1 font-semibold">$230.99</h4>
          </div>
          <div>
            <UiSharedShareModal />
          </div>
        </div>
        <p class="text-gray-500 text-sm">وصف المنتج وصف المنتج وصف المنتج</p>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 py-3 border-y-2 border-dashed mt-4 col-span-12"
    >
      <h5 class="font-semibold">{{ $t('quantity') }}</h5>
      <UiSharedCalcPrice />
      <div class="flex gap-3 max-sm:flex-col">
        <textarea
          class="w-full border rounded-md h-12 resize-none outline-none p-2 text-sm max-sm:h-20"
          :placeholder="$t('enter_notes') + '...'"
        />
        <UButton
          :label="$t('add_to_cart')"
          color="black"
          class="px-5 justify-center py-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

type Props = {
  closable: boolean;
};

defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const triggerClose = () => {
  emit('close');
};
</script>
