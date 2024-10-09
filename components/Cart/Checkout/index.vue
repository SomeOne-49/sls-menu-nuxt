<template>
  <CartBox classes="w-full sm:w-96 ms-auto shrink-0">
    <template #header>
      <div class="flex justify-between items-center gap-3">
        <h6>{{ $t('total') }}</h6>
        <h6 class="font-semibold">$231.99</h6>
      </div>
    </template>
    <CartCheckoutPayMethod />
    <CartCheckoutRequestType request-type="delivery" />
    <CartCheckoutNotes />
    <CartCheckoutPhone />
    <CartCheckoutSend />
  </CartBox>
</template>
