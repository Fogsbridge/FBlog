<template>
  <div class="min-h-screen">
    <Header />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/views/Layout/Footer.vue'
import Header from '@/views/Layout/Header.vue'

</script>

<style scoped>

</style>