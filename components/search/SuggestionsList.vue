<template>
  <div class="flex flex-col gap-3 mt-5">
    <div
      class="flex justify-between items-center gap-3 overflow-hidden group hover:scale-[1.01] transition-transform duration-300 border-b pb-2 cursor-pointer"
      v-for="i in 6"
      key="i"
    >
      <div
        class="flex gap-2 items-center transition-all duration-300 -ms-5 group-hover:ms-0"
      >
        <Icon name="solar:magnifer-linear" />
        <h6 class="font-semibold">وجبات غربي</h6>
      </div>
      <div
        class="transition-all duration-300 group-hover:ms-10 text-gray-600 text-sm"
      >
        15 منتج
      </div>
    </div>
  </div>
</template>
