<template>
  <Swiper
    :spaceBetween="10"
    :slidesPerView="1"
    :modules="modules"
    :autoplay="{
      delay: 2000,
    }"
  >
    <SwiperSlide v-for="i in 5" :key="i">
      <div class="relative rounded-md overflow-hidden">
        <img
          src="/dev/product.jpeg"
          class="size-full object-cover top-0 left-0"
          alt=""
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Autoplay, Pagination];
</script>
