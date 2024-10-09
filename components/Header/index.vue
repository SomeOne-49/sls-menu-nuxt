<template>
  <header
    class="bg-primary py-2 md:py-2.5 shadow-md sticky top-0 backdrop-blur-sm z-50"
  >
    <div class="container relative flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <Sidebar />
        <HeaderToggleLang />
        <HeaderActions />
      </div>
      <HeaderLogo />
      <div class="flex gap-2 items-center">
        <HeaderSearchBtn />
        <HeaderCartBtn />
      </div>
    </div>
  </header>
</template>
