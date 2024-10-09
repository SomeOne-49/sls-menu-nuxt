<template>
  <div
    class="flex justify-between items-center gap-3 py-2 border-dashed border-b-2 border-gray-300"
  >
    <h6 class="font-semibold">{{ props.title }}</h6>
    <UButton
      size="xs"
      :to="props.link"
      class="p-0"
      :icon="
        locale === 'en'
          ? 'solar:alt-arrow-right-broken'
          : 'solar:alt-arrow-left-broken'
      "
      variant="link"
      color="gray"
      trailing
      >{{ $t('show_more') }}</UButton
    >
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import type { SectionHeadProps } from '~/types';

const props = defineProps<SectionHeadProps>();
</script>
