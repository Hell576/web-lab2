<template>
  <div class="w-full min-h-screen">
    <img src="../assets/rightAbstract.png" alt="" class="absolute right-0" />
    <img src="../assets/leftAbstract.png" alt="" class="absolute left-0" />
    <div class="absolute inset-0 bg-transparent"></div>
    <NavBar />
    <div class="flex relative z-20 flex-col text-white container-custom">
      <section
        class="relative flex items-center justify-center mt-32 text-white bg-transparent py-28 backdrop-blur-xl squircle squircle-3xl"
      >
        <div class="grid grid-cols-2 text-white">
          <div class="flex flex-col px-20">
            <div class="flex flex-col space-y-2">
              <p class="text-base font-bold opacity-60">Glassed scull</p>
              <span class="font-mono text-4xl font-bold">1.99 ETH</span>
              <p class="text-base font-medium opacity-40">
                A cutting-edge sophisticated style, gently, rounded with a
                trimmed-down top. Expanded proportions will flatter all face
                shapes
              </p>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-transparent"></div>
              <img
                src="../assets/nfts/4.gif"
                class="object-cover mt-6 rounded-3xl w-72 h-72"
                alt="Scull"
              />
            </div>
            <div class="flex space-x-2 text-xs font-normal opacity-40 mt-11">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div class="flex flex-col px-20">
            <h3 class="text-lg font-bold">Pay with crypto wallet</h3>
            <form class="flex flex-col mt-6 flex-grow">
              <div class="flex flex-col space-y-8">
                <label class="flex flex-col">
                  Name
                  <input
                    class="flex h-12 px-6 mt-2 text-lg bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-4 placeholder:text-white placeholder:opacity-80"
                    placeholder="Name"
                  />
                </label>
                <label class="flex flex-col">
                  Crypto address
                  <input
                    class="flex h-12 px-6 mt-2 text-lg bg-transparent border border-blue-500 rounded-lg outline-none focus:ring-4 placeholder:text-white placeholder:opacity-80"
                    placeholder="Crypto address"
                  />
                </label>
              </div>
              <Button title="Buy" class="mt-auto" />
            </form>
          </div>
        </div>
      </section>
      <footer class="mt-16">
        <div class="flex flex-col items-center justify-center m-16 space-y-8">
          <div class="flex space-x-8 text-base">
            <a href="#" class="transition hover:text-blue-500">Link 1</a>
            <a href="#" class="transition hover:text-blue-500">Link 2</a>
            <a href="#" class="transition hover:text-blue-500">Link 3</a>
            <a href="#" class="transition hover:text-blue-500">Link 4</a>
          </div>
          <div class="flex space-x-6">
            <a href="#">
              <img src="@/assets/icons/twitter.png" alt="" />
            </a>
            <a href="#">
              <img src="@/assets/icons/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="@/assets/icons/google.png" alt="" />
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
