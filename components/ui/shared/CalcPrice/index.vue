<template>
  <div class="grid grid-cols-3 gap-2 items-center max-w-[350px]">
    <div class="flex justify-between gap-2 items-center">
      <UiSharedCalcPriceBox price="200" />
      <span class="text-xl">×</span>
    </div>
    <UiSharedQuantity :default-quantity="1" />
    <div class="flex justify-between gap-2 items-center">
      <span class="text-xl"> = </span>
      <UiSharedCalcPriceBox price="200" />
    </div>
  </div>
</template>
