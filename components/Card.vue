<template>
  <div class="group relative">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        :src="product?.thumbnail"
        :alt="product?.category"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4">
      <div class="mb-2">
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/product/${product?.id}`">
            <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
            {{ product?.title }} {{ checkSaved }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product?.brand }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">${{ product?.price }}</p>

        <button
          v-if="!productCarT"
          :class="{ 'active-cart': checkSaved }"
          class="cart-btn w-[20px] h-[20px]"
          @click="addToCart(productCart)"
        >
          <CartIcon />
        </button>
        <div
          v-else
          class="flex items-center gap-4 p-2 rounded-lg border-gray-300 border-[1px] border-1 shadow-md bg-indigo-50"
        >
          <button class="flex" @click="remCountProduct(productCart)">-</button>
          <span>{{ productCarT?.quantity }}</span>
          <button class="flex" @click="addCountProduct(productCart)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addCountProduct } from "~/composables/addCountProduct";
import { remCountProduct } from "~/composables/remCountProduct";
import { useStore } from "~/store/store";
import { addToCart } from "~/composables/addToCart";
import CartIcon from "./icons/CartIcon.vue";
const { product } = defineProps(["product"]);
const store = useStore();
const productCart = computed(() => {
  const item = {
    title: product?.title,
    thumbnail: product?.thumbnail,
    price: product?.price,
    id: product?.id,
    category: product?.category,
    quantity: 1,
  };
  return item;
});

const checkSaved = computed(() => {
  const item = store.cart.find((el) => el.id == productCart.value.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

const productCarT = computed(() => {
  const item = store.cart.find((el) => el.id == productCart.value.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped></style>
