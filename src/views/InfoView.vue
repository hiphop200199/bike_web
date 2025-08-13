<script src="@/controllers/Info.js"></script>

<template>
  <div class="container">
    <div class="info-box">
      <div class="img-box">
        <img :src="info.image_url" alt="" />
      </div>
      <div class="text-box">
        <h1>名稱：{{ info.name }}</h1>
        <p>廠商：{{ info.vendor_name }}</p>
        <p>顏色：{{ info.color }}</p>
        <p>承重限制：{{ info.limit }}kg</p>
        <p>適用身高：{{ info.height }}cm</p>
        <p>價格： NT${{ info.price }}</p>
        <p>庫存：{{ info.stock == 0 ? '尚無庫存' : info.stock }}</p>
        <p>簡介：{{ info.introduction }}</p>
        <div class="buttons">
          <button @click="addItem(info.id)" :disabled="info.stock == 0">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
