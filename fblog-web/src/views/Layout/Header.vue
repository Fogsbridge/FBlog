<template>
  <header>
    <slot name="nav">
      <Nav />
    </slot>

    <slot name="default">
      <HomeHero />
    </slot>
  </header>
</template>

<script setup>
import Nav from '@/views/Layout/Nav.vue'
import HomeHero from '@/views/Home/Banner.vue'
</script>

<style scoped>

</style>