<template>
  <div class="min-h-screen">

<!--
  如果有 banner (设想中的绝大部分情况下 banner 都应该是一个含有背景图的组件)，路由记录包含 banner 组件则将导航栏设置 fixed 定位 否则使用 sticky 定位
  如果没有 banner 组件的情况下，不使用 sticky 而使用 fixed 定位会遮盖住后面的内容
-->
    <Nav :isFixed="hasBanner" />

    <Header>
      <RouterView name="banner" />
    </Header>

    <main class="max-w-8xl mx-auto px-7">
      <RouterView />
    </main>

    <Footer class="max-w-8xl mx-auto px-7" />
  </div>
</template>

<script setup>
import Nav from '@/views/Layout/LayoutNav.vue'
import Header from '@/views/Layout/LayoutHeader.vue'
import Footer from '@/views/Layout/LayoutFooter.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hasBanner = computed(() => {
  return route.matched.some(record => record.components.banner)
})
</script>

<style scoped>

</style>