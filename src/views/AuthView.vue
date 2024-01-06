<template>
  <div class="overlay"></div>
  <HomeView>
    <FormAuth />
  </HomeView>
</template>

<script setup>
import HomeView from "@/views/HomeView.vue";
import FormAuth from "@/views/form/FormAuth.vue";
</script>

<style lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(10, 31, 56, 0.7);
}
</style>
