<template>
  <SidebarInfoBox icon="solar:calendar-linear" :title="$t('work_days')">
    <ul class="font-semibold ms-1 text-sm">
      <li v-for="(day, index) in props.days" :key="index">
        {{ day }}
      </li>
    </ul>
  </SidebarInfoBox>
</template>

<script setup lang="ts">
type Props = {
  days: string[];
};
const props = defineProps<Props>();
</script>
