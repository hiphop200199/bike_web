<script setup></script>
<template>
  <div class="footer">
    <div class="main-part">
      <div class="column">
        <p>購物相關</p>
        <router-link to="/login">登入頁面</router-link>
        <router-link to="/cart">購物車</router-link>
      </div>
      <div class="column">
        <p>關於我們</p>
        <router-link to="/business-information">企業資訊</router-link>
      </div>
      <div class="column">
        <p>了解我們</p>
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/?locale=zh_TW" target="_blank">Facebook</a>
        <a href="https://www.line.me/tw/" target="_blank">LINE</a>
      </div>
    </div>
    <div class="bottom-part">
      <div>
        <p>© Bike Mart Taiwan 2025</p>
      </div>
    </div>
    <a href="#" id="top"><img src="/top.png" alt="" /></a>
  </div>
</template>
