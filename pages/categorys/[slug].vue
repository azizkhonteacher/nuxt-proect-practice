<template>
  <div>

    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          {{ slug }}
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <card v-for="item in detail?.products" :key="item" :product="item" />
        </div>
        <button @click="addProducts()" v-if="limit < detail?.total" class="slug">more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import services from "~/services/services";

const store = useStore();
const { slug } = useRoute().params;
const detail = ref({});
const limit = ref(8);

const getDetail = async () => {
  const res = await services.getCategorysDetail(slug, limit.value);
  detail.value = res;
};
getDetail();
function addProducts() {
  if (limit.value < detail.value?.total) {
    limit.value += 4;
    getDetail();
  }
}
</script>

<style lang="scss" scoped>
.slug{
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    margin: 35px auto;
    border: 3px solid #000;
    border-radius: 12px;
    text-transform: uppercase;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    color: rgb(13, 16, 192);
}
</style>
