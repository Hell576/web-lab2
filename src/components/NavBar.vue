<template>
  <nav class="fixed inset-x-0 z-30 top-8">
    <div
      class="min-h-[2.5rem] py-6 px-10 items-center justify-center bg-transparent backdrop-blur-xl squircle squircle-3xl container-custom relative flex text-white"
    >
      <div class="flex mr-auto space-x-8 leading-4">
        <a href="#" class="transition hover:text-blue-500">Link 1</a>
        <a href="#" class="transition hover:text-blue-500">Link 2</a>
        <a href="#" class="transition hover:text-blue-500">Link 3</a>
        <a href="#" class="transition hover:text-blue-500">Link 4</a>
      </div>
      <router-link to="/" class="absolute">
        <div class="flex space-x-4 max-h-10">
          <div class="w-10 h-10 bg-blue-500 rounded-full"></div>
          <span class="text-base font-black leading-5 text-blue-500 uppercase"
            >Web<br />Project</span
          >
        </div>
      </router-link>
      <div class="flex ml-auto space-x-8">
        <a href="#">
          <img src="../assets/icons/twitter.png" alt="" />
        </a>
        <a href="#">
          <img src="../assets/icons/facebook.png" alt="" />
        </a>
        <a href="#">
          <img src="../assets/icons/google.png" alt="" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
