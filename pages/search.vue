<template>
  <div class="container">
    <div class="mb-6">
      <div class="sticky top-0 bg-white pt-6 z-40">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="lg"
          color="white"
          :trailing="false"
          :placeholder="$t('search_for') + '...'"
        />
      </div>
      <!-- <div class="mt-4 flex flex-col gap-3">
      <div class="flex justify-between gap-3 items-center">
        <h5 class="font-semibold text-xl">{{ $t('search_result') }}</h5>
        <h6>{{ $t('result_count') }}: 12</h6>
      </div>
      <div class="flex flex-wrap items-center gap-y-3">
        <div
          class="w-1/2 px-2 sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6"
          v-for="product of DUMMY_SECTIONS"
          key="i"
        >
          <UiSharedCardsProductCardDetailsModal
            :key="product.id"
            :id="product.id"
            :price="product.price"
            :img="product.img"
            :title="product.title"
          />
        </div>
      </div>
    </div> -->
      <SearchSuggestionsList />
    </div>
  </div>
</template>

<script setup lang="ts">
const DUMMY_SECTIONS = [
  {
    title: 'Gaming Laptop',
    id: 'prod001',
    price: '1299',
    img: '/dev/product.jpeg',
  },
  {
    title: 'Bluetooth Speaker',
    id: 'prod002',
    price: '149',
    img: '/dev/product.jpeg',
  },
  {
    title: 'Smartwatch',
    id: 'prod003',
    price: '299',
    img: '/dev/product.jpeg',
  },
];
</script>
