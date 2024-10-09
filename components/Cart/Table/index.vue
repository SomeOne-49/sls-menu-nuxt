<template>
  <CartBox classes="w-full">
    <template #header>
      <div class="grid grid-cols-4 max-md:grid-cols-6 gap-4">
        <div class="col-span-1 max-md:col-span-2">
          <h6 class="font-semibold">{{ $t('order') }}</h6>
        </div>
        <div class="col-span-3 max-sm:hidden max-md:col-span-4 max-w-[350px]">
          <div class="grid grid-cols-3 gap-2">
            <h6 class="font-semibold">{{ $t('price') }}</h6>
            <h6 class="font-semibold">{{ $t('quantity') }}</h6>
            <h6 class="font-semibold">{{ $t('total') }}</h6>
          </div>
        </div>
      </div>
    </template>
    <div class="p-2.5 max-h-full overflow-auto flex flex-col gap-3">
      <div v-for="i in 10" key="i" class="bordered">
        <CartTableOrder />
      </div>
    </div>
  </CartBox>
</template>

<style scoped>
.bordered:not(:last-child) {
  @apply border-b pb-3;
}
</style>
