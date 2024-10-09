<template>
  <SidebarInfoBox icon="solar:phone-broken" :title="$t('phone')">
    <a :href="'tel:' + phone" class="font-semibold ms-1 text-sm">{{
      props.phone
    }}</a>
  </SidebarInfoBox>
</template>

<script setup lang="ts">
type Props = {
  phone: string;
};
const props = defineProps<Props>();
</script>
