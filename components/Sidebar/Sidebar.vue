<script setup lang="ts">
const isOpen = ref(false);
const workDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const { locale } = useI18n();
</script>

<template>
  <div>
    <HeaderBtn icon="solar:hamburger-menu-linear" @click="isOpen = true" />

    <USlideover
      v-model="isOpen"
      :side="locale === 'en' ? 'left' : 'right'"
      :ui="{ width: 'max-w-[320px]' }"
    >
      <UCard
        class="flex flex-col flex-1"
        :class="locale === 'ar' && 'isAr'"
        :ui="{
          body: {
            base: 'flex-1 grow overflow-hidden !p-2 max-h-[calc(100vh-93px)]',
          },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          header: {
            padding: '!p-2',
          },
          footer: {
            padding: '!p-2',
          },
        }"
      >
        <template #header>
          <div class="flex gap-4 justify-between items-center">
            <img
              src="/favicon.ico"
              alt="LOGO"
              class="max-w-[100px] max-h-[50px]"
            />
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="solar:close-square-linear"
              square
              padded
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="overflow-auto h-full flex gap-2 flex-col">
          <HeaderActions :is-sidebar="true" />
          <SidebarLocation location="Dubai" />
          <SidebarContact phone="+90 539 960 19 26" />
          <SidebarWorkDays :days="workDays" />
          <SidebarWorkHours opening-time="09:00 ص" closing-time="12:00 م" />
          <SidebarSocialMedia
            facebook="https://www.facebook.com/"
            x="https://www.twitter.com/"
            whatsapp="https://www.whatsapp.com/"
            insta="https://www.instagram.com/"
          />
        </div>
        <template #footer>
          <div
            class="text-center flex justify-center items-center gap-2 font-semibold"
          >
            {{ $t('powerd_by') }}
            <a target="_blank" href="https://www.vegasds.com"
              ><img src="/slsLogo.png" alt="SLS_MENU" class="w-24"
            /></a>
          </div>
        </template>
      </UCard>
    </USlideover>
  </div>
</template>
