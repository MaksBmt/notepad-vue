<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.modal {
  box-sizing: border-box;
  position: fixed;
  width: 360px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5000;

  padding: 24px;
  padding-top: 72px;
  padding-bottom: 84px;
  background-color: $dark-middle;
  border-radius: 40px;

  @media (min-width: $md) {
    width: 688px;
    padding: 56px;
    top: 55%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: $lg) {
    width: 594px;
    top: 20px;
    transform: translateX(-50%);

    &__notes {
      top: 0;
    }
  }

  @media (min-width: $xlg) {
    width: 780px;
    padding: 80px;
    top: 40px;
  }
}
</style>
