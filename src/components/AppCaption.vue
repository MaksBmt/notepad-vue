<template>
  <h2 class="caption">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.caption {
  margin: 0;
  font-size: 32px;
  line-height: 36px;
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  color: white;

  @media (min-width: $md) {
    font-size: 48px;
    line-height: 72px;
  }
}
</style>
