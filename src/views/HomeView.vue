<template>
  <main class="main">
    <div class="main__wrap">
      <h1 class="main__title">Мои заметки</h1>
      <p class="main__text">Не забывай о важном, храни его в облаке.</p>
    </div>

    <div class="main__banner"></div>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.main {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;

  @media (min-width: $md) {
    padding: 40px;
    padding-bottom: 0;
  }

  @media (min-width: $lg) {
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 0;
    flex-direction: row;
  }

  @media (min-width: $xlg) {
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    margin: 0;
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 64px;
    font-family: "Montserrat-Black";
    color: white;
    text-align: center;

    @media (min-width: $md) {
      font-size: 104px;
      line-height: 104px;
    }

    @media (min-width: $lg) {
      margin-top: 104px;
      margin-bottom: 0;
      text-align: left;
    }

    @media (min-width: $xlg) {
      margin-top: 236px;
    }
  }

  &__text {
    margin: 0;
    font-size: 24px;
    line-height: 36px;
    font-family: "Montserrat-Regular";
    color: $gray;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: $md) {
      font-size: 32px;
      line-height: 48px;
    }

    @media (min-width: $lg) {
      width: 400px;
      text-align: left;
      margin-bottom: 0;
      margin-top: 40px;
    }
  }

  &__wrap {
    @media (min-width: $lg) {
      padding-right: 90px;
    }

    @media (min-width: $xlg) {
      padding-right: 215px;
    }
  }

  &__banner {
    min-height: 287px;
    width: 100%;
    position: relative;

    @media (min-width: $md) {
      min-height: 540px;
    }

    @media (min-width: $lg) {
      min-height: 604px;
      margin-left: auto;
    }

    @media (min-width: $xlg) {
      min-height: 864px;
    }

    &::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 300px;
      height: 275px;

      background-image: url("@/assets/img/main-fon.svg");
      background-position: center;
      background-size: cover;

      @media (min-width: $md) {
        width: 560px;
        height: 518px;
      }

      @media (min-width: $lg) {
        width: 635px;
        height: 589px;
      }

      @media (min-width: $xlg) {
        width: 900px;
        height: 830px;
      }
    }

    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -42%);

      width: 228px;
      height: 237px;
      background-image: url("@/assets/img/banner.svg");
      background-position: center;
      background-size: cover;

      @media (min-width: $md) {
        width: 428px;
        height: 445px;
      }

      @media (min-width: $lg) {
        width: 480px;
        height: 500px;
      }

      @media (min-width: $xlg) {
        width: 685px;
        height: 715px;
      }
    }
  }
}
</style>
