<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import { AppLayout } from "./layouts";
import { getToken } from "@/services/token-manager";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();

if (getToken()) {
  authStore.isAuthenticated = true;
  authStore.get();
  useRouter().push("/notes");
} else {
  authStore.isAuthenticated = false;
  useRouter().push("/");
}
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 31, 56, 1);
  top: 0;
  left: 0;
  overflow-y: auto;

  font-family: "Roboto", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
