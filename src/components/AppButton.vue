<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.button {
  @include button();
  width: 100%;
  height: 56px;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: white;
  background-color: $green;
  border-radius: 32px;

  @media (min-width: $md) {
    width: auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  &:hover {
    background-color: $green-hover;
  }

  &:active {
    background-color: $green-pressed;
  }
}
</style>
