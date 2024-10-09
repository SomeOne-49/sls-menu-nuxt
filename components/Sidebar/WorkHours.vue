<template>
  <SidebarInfoBox icon="solar:clock-circle-broken" :title="$t('work_hours')">
    <div class="flex flex-col gap-1 font-semibold ms-1 text-sm">
      <div class="flex gap-2 items-center">
        {{ $t('open_at') + ': ' + openingTime }}
      </div>
      <div class="flex gap-2 items-center">
        {{ $t('close_at') + ': ' + closingTime }}
      </div>
    </div>
  </SidebarInfoBox>
</template>

<script setup lang="ts">
type Props = {
  openingTime: string;
  closingTime: string;
};
defineProps<Props>();
</script>
