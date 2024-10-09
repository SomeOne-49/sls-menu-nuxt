<template>
  <div
    :class="`relative flex items-center overflow-hidden rounded-md p-1 z-10 
    ${defaultQuantity ? '' : '-mt-6 justify-center'}
    `"
  >
    <HeaderBtn
      icon="heroicons:plus-small"
      @click="inc"
      :classes="`relative ring-0 shadow-md transition-all duration-700 hover:bg-green-500 hover:text-white z-40 ${
        !open ? '-me-9' : '-me-2'
      }
      `"
    />
    <input
      v-model="quantity"
      type="number"
      max="99"
      class="outline-none w-12 h-9 text-center transition-all duration-700 font-semibold"
      readonly
      :class="!open && 'rounded-md w-9'"
    />
    <HeaderBtn
      @click="dec"
      :classes="`relative ring-0 shadow-md transition-all duration-700 hover:bg-red-500 hover:text-white z-30 ${
        !open ? '-ms-9' : '-ms-2'
      }`"
    >
      <Icon v-if="quantity > 1" size="20px" name="heroicons:minus-small" />
      <Icon v-else size="20px" name="solar:trash-bin-minimalistic-broken" />
    </HeaderBtn>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
type Props = {
  defaultQuantity?: number;
};
const props = defineProps<Props>();
const quantity = ref(props.defaultQuantity || 0);

const inc = () => quantity.value++;
const dec = () => {
  if (quantity.value > 0) quantity.value--;
};

const open = computed(() => quantity.value > 0);
</script>
