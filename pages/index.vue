<template>
  <div class="container">
    <div class="flex flex-wrap gap-y-4 my-6">
      <div v-for="i in 10" key="i" class="px-2 w-1/2 lg:w-1/3 xl:w-1/4">
        <HomeCategory
          link="/categories/test"
          img="/dev/category.jpeg"
          title="وجبات غربي"
          icon="https://app.trybany.com/_next/image?url=https%3A%2F%2Ftrybany.s3.eu-central-1.amazonaws.com%2Fuploads%2Ftaxonomies%2F96229%2F007-pan.png&w=64&q=75"
          meals-count="3"
        />
      </div>
    </div>
  </div>
</template>
