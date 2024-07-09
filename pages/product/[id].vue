<template>
  <div>

    <Swiper class="card" :slides-per-view="3" :loop="true">
      <SwiperSlide class="card-s" v-for="img in detail?.images" :key="img">
        <img class="card-img" :src="img" alt="img" />
      </SwiperSlide>
      <h2 class="card-title">{{ detail?.title }}</h2>
      <p class="card-price">${{ detail?.price }}</p>
    </Swiper>
  </div>
</template>

<script setup>
// API lar uchun services js yaratiladi va import qildim
import services from "~/services/services";

const route = useRoute();

const detail = ref({});
async function getDetail() {
  const res = await services.getDetailProduct(route.params.id);
  detail.value = res;
}
getDetail();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  &-s {
    background-color: aqua;
  }
  &-img {
    display: flex;
    width: 300px;
  }
  &-title {
    color: #000;
    font-family: sans-serif;
    font-size: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
  }
}
</style>
