<template>
  <div>
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <card
            v-for="item in products?.products"
            :key="item"
            :product="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// store -> Pinia degani va globall o'zgaruvchi yaratish uchun kerak
import { useStore } from "~/store/store";
// API lar uchun services js yaratiladi va import qildim
import services from "~/services/services";

// store ni ishlatish uchun uni o'zgaruvchiga tenglaymiz
const store = useStore();

// products nomli dinamik o'zgaruvchi yaratamiz, unga kelgan ma'lumotlar keladi
const products = ref({});

// tezroq ishlashi uchun async qilib ishlatdik funcsiyalar boshqa boshqa, adashmaslik uchun nomi birxil
async function getProducts() {
  const res = await services.getProducts();
  products.value = res;
}
getProducts();
</script>

<style lang="scss" scoped></style>
