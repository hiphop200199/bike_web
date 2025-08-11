<script setup>
import { useConstant } from '@/constants'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useLoadingStore } from '@/stores/loading'
import { onMounted } from 'vue'

let sideMenu
const authStore = useAuthStore()
const loadingStore = useLoadingStore()
const toggleSideMenu = () => {
  sideMenu.classList.toggle('open')
}
const logoutBtn = async () => {
  if (sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open')
  }
  loadingStore.open()
  const response = await authStore.logout()
  loadingStore.close()
  if (response.code === useConstant.StatusCode.SUCCESS) {
    router.push('/')
  }
}

onMounted(() => {
  sideMenu = document.querySelector('.side-menu')
})
</script>
<template>
  <div class="header">
    <div class="black-bar"></div>
    <div class="main-part">
      <div class="first-row">
        <router-link class="logo" to="/">
          <h1>BIKE MART</h1>
          <p>TAIWAN</p>
        </router-link>
        <div class="links">
          <template v-if="authStore.userInfo">
            <router-link to="/member" class="link-img show-when-large-screen"
              ><img src="/user.png" alt=""
            /></router-link>
            <router-link to="/cart" class="link-img show-when-large-screen"
              ><img src="/shopping-bag.png" alt=""
            /></router-link>
            <a @click="logoutBtn()" class="link-img show-when-large-screen"
              ><img src="/logout.png" alt=""
            /></a>
          </template>
          <router-link
            v-if="!authStore.userInfo"
            to="/login"
            class="link-img show-when-large-screen"
            ><img src="/login.png" alt=""
          /></router-link>
          <a @click="toggleSideMenu()" class="link-img show-when-small-screen">
            <img src="/two-line.png" alt=""
          /></a>
        </div>
      </div>
      <div class="second-row">
        <div class="links">
          <router-link to="/list/1">GIANT</router-link>
          <router-link to="/list/2">Merida</router-link>
          <router-link to="/list/3">BESV</router-link>
          <router-link to="/list/4">Tern</router-link>
        </div>
      </div>
    </div>
    <aside class="side-menu">
      <template v-if="authStore.userInfo">
        <router-link @click="toggleSideMenu()" to="/member">會員資料</router-link>
        <router-link @click="toggleSideMenu()" to="/cart">購物車</router-link>
        <a @click="logoutBtn()">登出</a>
      </template>
      <router-link @click="toggleSideMenu()" v-if="!authStore.userInfo" to="/login"
        >登入</router-link
      >
      <router-link @click="toggleSideMenu()" to="/list/1">GIANT</router-link>
      <router-link @click="toggleSideMenu()" to="/list/2">Merida</router-link>
      <router-link @click="toggleSideMenu()" to="/list/3">BESV</router-link>
      <router-link @click="toggleSideMenu()" to="/list/4">Tern</router-link>
    </aside>
  </div>
</template>
