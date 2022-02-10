<template>
  <div class="w-full min-h-screen">
    <img src="../assets/rightAbstract.png" alt="" class="absolute right-0" />
    <img src="../assets/leftAbstract.png" alt="" class="absolute left-0" />
    <div class="absolute inset-0 bg-transparent"></div>
    <NavBar />
    <div class="relative z-20 flex flex-col text-white container-custom">
      <section
        class="flex flex-col items-center justify-center h-screen text-white"
      >
        <div class="flex flex-col items-center">
          <div class="relative flex items-center justify-center">
            <h1 class="font-extrabold uppercase text-8xl">Web</h1>
            <h1
              class="absolute font-extrabold uppercase blur-lg opacity-10 z-[-10] text-8xl"
            >
              Web
            </h1>
            <h1
              class="absolute font-extrabold text-blue-600 uppercase opacity-60 blur-xl z-[-10] text-8xl"
            >
              Web
            </h1>
          </div>
          <h2
            class="relative text-5xl leading-snug tracking-[1.5rem] uppercase flex items-center font-extralight mr-[-1.5rem] beta-badge"
          >
            Labproject
          </h2>
          <Button title="Check Out" />
        </div>
      </section>
      <section class="flex flex-col items-center text-white">
        <div class="flex flex-col items-center justify-center shrink">
          <div class="flex flex-col self-start mb-14">
            <h3 class="text-4xl font-bold">Check our products</h3>
            <p class="mt-1 text-lg">
              Lorem ipsum
              <span class="font-bold text-blue-500">dolor</span> sit amet,
              consectet ur adipiscing
            </p>
          </div>
          <div class="relative grid grid-cols-4 gap-4 place-items-center">
            <div class="absolute inset-0 z-10 fade-up"></div>
            <h2
              class="absolute z-20 px-16 py-6 text-5xl bg-transparent backdrop-blur-xl squircle squircle-3xl"
            >
              Check these <span class="font-black">NFT's</span> and many more
            </h2>
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/1.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/2.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/3.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/4.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/4.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/1.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/2.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/3.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/3.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/4.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/1.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/2.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/1.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/2.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/3.gif"
              alt=""
            />
            <img
              class="w-64 h-64 squircle squircle-3xl"
              src="../assets/nfts/4.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col">
        <div
          class="flex flex-col py-[116px] bg-abstract px-[420px] squircle squircle-5xl space-y-14"
        >
          <div class="flex flex-col text-white">
            <h4 class="font-black text-5xl leading-[3.5rem]">Stay in touch</h4>
            <p class="text-lg leading-6 text-blue-500">
              Lorem ipsum dolor sit amet, consectet ur adipiscing
            </p>
          </div>
          <form class="flex flex-col space-y-8 text-white">
            <input
              class="flex h-12 px-6 text-lg bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-4 placeholder:text-white placeholder:opacity-80"
              placeholder="First name"
            />
            <input
              class="flex h-12 px-6 text-lg bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-4 placeholder:text-white placeholder:opacity-80"
              placeholder="Email"
            />
            <Button title="Subscribe" />
          </form>
        </div>
      </section>
      <footer>
        <div class="flex flex-col items-center justify-center m-16 space-y-8">
          <div class="flex space-x-8 text-base">
            <a href="#" class="transition hover:text-blue-500">Link 1</a>
            <a href="#" class="transition hover:text-blue-500">Link 2</a>
            <a href="#" class="transition hover:text-blue-500">Link 3</a>
            <a href="#" class="transition hover:text-blue-500">Link 4</a>
          </div>
          <div class="flex space-x-6">
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
          <a href="#" class="text-gray-600">Terms of Use and Privacy Policy</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Button from "../components/Button.vue";
export default {
  components: { NavBar, Button },
};
</script>
