<script setup lang="ts">
const isOpen = ref(false);
const items = [
  {
    id: 1,
    label: 'اسم المدينة',
    defaultOpen: true,
    slot: 'city-1',
  },
  {
    id: 2,
    label: 'اسم المدينة',
    slot: 'city-2',
  },
  {
    id: 3,
    label: 'اسم المدينة',
    slot: 'city-3',
  },
  {
    id: 4,
    label: 'اسم المدينة',
    slot: 'city-4',
  },
];

const streets = [
  { id: 1, label: 'الحي ١' },
  { id: 2, label: 'الحي ٢' },
  { id: 3, label: 'الحي ٣' },
  { id: 4, label: 'الحي ٤' },
  { id: 5, label: 'الحي ٥' },
  { id: 6, label: 'الحي ٦' },
  { id: 7, label: 'الحي ٧' },
  { id: 8, label: 'الحي ٨' },
  { id: 9, label: 'الحي ٩' },
  { id: 10, label: 'الحي ١٠' },
];
const selected = ref(streets[0]);
</script>

<template>
  <div class="grow">
    <UButton
      :label="$t('delivery')"
      color="black"
      class="w-full justify-center font-normal"
      @click="isOpen = true"
    />

    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          header: { padding: '!p-3' },
          body: {
            base: 'overflow-auto !p-3 max-h-[70vh]',
          },
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ $t('locatino') }}
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="h-full">
          <UAccordion
            :items="items"
            color="black"
            :ui="{
              item: {
                padding: 'pt-0',
              },
              default: {
                class: 'p-3 mb-2 bg-black/5',
              },
            }"
          >
            <template #city-1>
              <UCommandPalette
                :ui="{
                  input: {
                    base: '!h-8',
                  },
                }"
                v-model="selected"
                nullable
                :autoselect="false"
                :groups="[{ key: 'people', commands: streets }]"
                :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
              />
            </template>
            <template #city-2>
              <UCommandPalette
                :ui="{
                  input: {
                    base: '!h-8',
                  },
                }"
                v-model="selected"
                nullable
                :autoselect="false"
                :groups="[{ key: 'people', commands: streets }]"
                :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
              />
            </template>
            <template #city-3>
              <UCommandPalette
                :ui="{
                  input: {
                    base: '!h-8',
                  },
                }"
                v-model="selected"
                nullable
                :autoselect="false"
                :groups="[{ key: 'people', commands: streets }]"
                :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
              />
            </template>
            <template #city-4>
              <UCommandPalette
                :ui="{
                  input: {
                    base: '!h-8',
                  },
                }"
                v-model="selected"
                nullable
                :autoselect="false"
                :groups="[{ key: 'people', commands: streets }]"
                :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
              />
            </template>
          </UAccordion>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
