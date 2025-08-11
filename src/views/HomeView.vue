<script src="@/controllers/Home.js"></script>

<template>
  <div class="container">
    <swiper
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in bannerList" :key="index"
        ><img :src="item.image_url" alt=""
      /></swiper-slide>
    </swiper>
    <h1>全新上市</h1>
    <div class="new-list-block">
      <router-link
        :to="'/info/' + item.id"
        class="card"
        v-for="(item, index) in newestList"
        :key="index"
      >
        <img :src="item.image_url" alt="" />
        <p>{{ item.name }}</p>
      </router-link>
    </div>

    <!--swiper-->
    <div class="category-grid">
      <div class="box">
        <img src="/giant.jpg" alt="" />
        <router-link :to="'/list/' + '1'">GIANT</router-link>
      </div>
      <div class="box">
        <img src="/merida.jpg" alt="" />
        <router-link :to="'/list/' + '2'">Merida</router-link>
      </div>
      <div class="box">
        <img src="/besv.jpg" alt="" />
        <router-link :to="'/list/' + '3'">BESV</router-link>
      </div>
      <div class="box">
        <img src="/tern.jpg" alt="" />
        <router-link :to="'/list/' + '4'">Tern</router-link>
      </div>
    </div>
  </div>
</template>
