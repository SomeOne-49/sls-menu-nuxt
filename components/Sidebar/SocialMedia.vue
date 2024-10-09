<template>
  <SidebarInfoBox
    icon="solar:earth-broken"
    :title="$t('social_media')"
    v-if="facebook || x || whatsapp || insta"
  >
    <div class="flex gap-2 items-center justify-center">
      <a
        v-if="facebook"
        :href="facebook"
        target="_blank"
        class="icon hover:text-[#1877f2]"
      >
        <Icon name="ri:facebook-fill" size="26px" />
      </a>
      <a v-if="x" :href="x" target="_blank" class="icon hover:text-[#000000]">
        <Icon name="ri:twitter-x-fill" size="26px" />
      </a>
      <a
        v-if="whatsapp"
        :href="whatsapp"
        target="_blank"
        class="icon hover:text-[#25d366]"
      >
        <Icon name="ri:whatsapp-line" size="26px" />
      </a>
      <a
        v-if="insta"
        :href="insta"
        target="_blank"
        class="icon hover:text-[#833ab4]"
      >
        <Icon name="ri:instagram-line" size="26px" />
      </a>
    </div>
  </SidebarInfoBox>
</template>
<style scoped>
.icon {
  @apply transition-colors duration-500;
}
</style>

<script setup lang="ts">
type Props = {
  facebook?: string;
  whatsapp?: string;
  x?: string;
  insta?: string;
};
defineProps<Props>();
</script>
