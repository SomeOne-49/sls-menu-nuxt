<template>
  <div class="pb-3 pt-6 sticky top-12 z-40 bg-white border-b">
    <Swiper
      :spaceBetween="10"
      :slidesPerView="3"
      :breakpoints="{
        450: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
        1280: {
          slidesPerView: 10,
        },
      }"
      :modules="modules"
      :autoplay="{
        delay: 5000,
      }"
    >
      <SwiperSlide v-for="i in 20" :key="i">
        <CategoriesCategoryBarBox
          :isSlider="true"
          link="/categories/test"
          title="وجبات غربي"
          img="https://karazlady.com/images/discount.png"
          :is-active="i === 1 ? true : false"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Autoplay];
</script>
