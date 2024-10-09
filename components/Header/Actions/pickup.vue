<script setup lang="ts">
const isOpen = ref(false);

const streets = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' },
];
const selected = ref(streets[0]);
</script>

<template>
  <div class="grow">
    <UButton
      :label="$t('pickup')"
      class="w-full justify-center"
      color="white"
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
        </div>
      </UCard>
    </UModal>
  </div>
</template>
