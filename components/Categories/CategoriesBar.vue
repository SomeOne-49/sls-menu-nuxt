<template>
  <div
    class="bar pb-3 pt-6 border-b overflow-auto flex gap-3 items-center sticky top-12 z-40 bg-white"
  >
    <CategoriesCategoryBarBox
      link="/categories/test"
      title="وجبات غربي"
      img="https://karazlady.com/images/discount.png"
      v-for="i in 15"
      key="i"
      :is-active="i === 1 ? true : false"
    />
  </div>
</template>

<style scoped>
.bar::-webkit-scrollbar {
  height: 5px;
}
.bar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.599);

  border-radius: 20px;
}
.bar::-webkit-scrollbar-track {
  background-color: rgba(192, 192, 192, 0.829);
  border-radius: 20px;
}
</style>
