<template>
  <SidebarInfoBox icon="solar:map-point-broken" :title="$t('location')">
    <div class="font-semibold ms-1 text-sm">{{ props.location }}</div>
  </SidebarInfoBox>
</template>

<script setup lang="ts">
type Props = {
  location: string;
};
const props = defineProps<Props>();
</script>
