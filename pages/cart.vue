<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>

      <div
      v-if="store.cart?.length"
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <card v-for="item in store.cart" :key="item" :product="item" />
      </div>

      <div v-if="!store.cart?.length" class="w-full h-48 flex items-center justify-center p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold">
            Savatda maxsulot yo'q!
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped></style>
