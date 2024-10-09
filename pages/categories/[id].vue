<template>
  <div class="container">
    <div class="flex flex-col mb-8 gap-4">
      <!-- <CategoriesBar /> -->
      <CategoriesSlider />
      <CategoriesCategorySectoin
        v-for="section in DUMMY_SECTIONS"
        :title="section.title"
        :link="section.link"
        :products="section.products"
        key="i"
      />
    </div>
  </div>
  <UiSharedCartBar />
</template>

<script setup lang="ts">
const DUMMY_SECTIONS = [
  {
    title: 'وجبات غربي',
    link: '/categories/new-arrivals',
    products: [
      {
        title: 'وجبة شيش غريل',
        id: 'prod001',
        price: '1299',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod002',
        price: '149',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod003',
        price: '299',
        img: '/dev/product.jpeg',
      },
    ],
  },
  {
    title: 'وجبات غربي',
    link: '/categories/best-sellers',
    products: [
      {
        title: 'وجبة شيش غريل',
        id: 'prod004',
        price: '199',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod005',
        price: '399',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod006',
        price: '799',
        img: '/dev/product.jpeg',
      },
    ],
  },
  {
    title: 'وجبات غربي',
    link: '/categories/limited-edition',
    products: [
      {
        title: 'وجبة شيش غريل',
        id: 'prod007',
        price: '499',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod008',
        price: '1299',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod009',
        price: '2499',
        img: '/dev/product.jpeg',
      },
    ],
  },
  {
    title: 'وجبات غربي',
    link: '/categories/seasonal-specials',
    products: [
      {
        title: 'وجبة شيش غريل',
        id: 'prod010',
        price: '149',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod011',
        price: '49',
        img: '/dev/product.jpeg',
      },
      {
        title: 'وجبة شيش غريل',
        id: 'prod012',
        price: '89',
        img: '/dev/product.jpeg',
      },
    ],
  },
];
</script>
