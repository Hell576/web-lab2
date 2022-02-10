<template>
  <button
    class="min-h-[2.5rem] relative flex mt-6 bg-blue-500 backdrop-blur-xl squircle squircle-lg"
  >
    <router-link
      to="/checkout"
      class="flex justify-center items-center flex-grow px-16 py-3"
    >
      {{ title }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </router-link>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>
