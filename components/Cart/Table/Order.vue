<template>
  <div
    class="grid gap-5 grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-6 max-sm:grid-cols-1"
  >
    <div
      class="max-xl:col-span-2 col-span-1 max-md:col-span-2 flex gap-2 items-start"
    >
      <div
        class="pt-[75%] relative rounded-md overflow-hidden max-sm:pt-[30%] w-full max-sm:w-32"
      >
        <img
          src="/dev/product.jpeg"
          alt=""
          class="absolute top-0 left-0 size-full object-cover"
        />
      </div>
      <h6 class="font-semibold text-base sm:hidden">وجبة شيش غريل</h6>
    </div>
    <div
      class="col-span-3 max-md:col-span-4 xl: flex flex-col justify-between gap-2.5"
    >
      <div class="flex flex-col gap-2.5">
        <h6 class="font-semibold text-base max-sm:hidden">وجبة شيش غريل</h6>
        <div class="">
          <UiSharedCalcPrice />
        </div>
      </div>
      <textarea
        name="Notes"
        class="w-full border outline-none resize-none rounded-md p-2 text-sm"
        :placeholder="$t('enter_notes') + '...'"
      ></textarea>
    </div>
  </div>
</template>
