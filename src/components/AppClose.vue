<template>
  <button class="button-close" aria-describedby="button">
    <svg width="16" height="16" class="button-close__svg">
      <use xlink:href="@/assets/img/sprite.svg#close"></use>
    </svg>
    <p id="button">Закрыть</p>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.button-close {
  @include button();
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #b1c909;
  cursor: pointer;

  &:hover {
    background-color: $green-hover;
  }

  &:active {
    background-color: $green-pressed;
  }

  &__svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 18px;
    left: 20px;

    stroke: white;
  }

  #button {
    display: none;
  }
}
</style>
