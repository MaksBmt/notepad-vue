<template>
  <div class="wrap">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script setup>
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.wrap {
  @include min-max(360px, 1600px);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
