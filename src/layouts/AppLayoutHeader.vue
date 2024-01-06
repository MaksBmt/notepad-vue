<template>
  <header class="header">
    <picture v-if="authStore.isAuthenticated">
      <source media="(min-width: 768px)" srcset="@/assets/img/logo-218.svg" />
      <img
        class="header__logo header__logo--sm"
        alt="logo"
        width="40"
        height="36"
        src="@/assets/img/logo-sm.svg"
      />
    </picture>

    <img
      v-else
      class="header__logo"
      alt="logo"
      width="154"
      height="36"
      src="@/assets/img/logo-218.svg"
    />

    <template v-if="authStore.isAuthenticated">
      <a class="header__link header__link--user" title="вы зарегистрированы">
        <span class="header__text header__text--user">{{
          authStore.user.email
        }}</span>

        <span
          class="header__user"
          role="tooltip"
          aria-haspopup="true"
          aria-controls="tooltip-popup"
        >
          <div class="header__logout">
            <span
              id="tooltip-popup"
              class="header__link-logout"
              aria-hidden="true"
              @click="logout"
              >Выйти</span
            >
          </div>
        </span>
      </a>
    </template>

    <template v-else>
      <router-link
        to="/login"
        class="header__link"
        title="кликнуть для регистрации"
      >
        <button class="header__button">
          <svg width="34" height="34" class="header__svg" role="img">
            <use xlink:href="@/assets/img/sprite.svg#access"></use>
          </svg>
          <span class="header__text">Войти</span>
        </button>
      </router-link>
    </template>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/");
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: $md) {
    padding: 20px 40px;
  }

  @media (min-width: $lg) {
    padding: 20px 80px;
  }

  @media (min-width: $xlg) {
    padding: 40px 0;
  }

  &__logo {
    display: block;
    width: 154px;
    height: 36px;

    @media (min-width: $md) {
      width: 218px;
      height: 50px;
    }

    @media (max-width: 767px) {
      &--sm {
        width: 40px;
      }
    }
  }

  &__link {
    @include link-reset();

    &--user {
      position: relative;
      display: flex;
      align-items: center;
      pointer-events: none;
    }
  }

  &__button {
    @include button();
    height: 56px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    align-items: center;
    background-color: $green;
    cursor: pointer;
    border: none;
    border-radius: 32px;

    &:hover {
      background-color: $green-hover;
    }

    &:active {
      background-color: $green-pressed;
    }
  }

  &__user {
    position: relative;
    padding: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: $dark-middle;
    pointer-events: all;

    &::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 18px;
      background-image: url("@/assets/img/user.svg");
      background-position: center;
      background-repeat: no-repeat;
    }

    &::after {
      position: absolute;
      content: "";
      top: 100%;
      right: 0;
      height: 30px;
      width: 50px;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 32px;
    font-family: "Montserrat-Medium";
    color: white;
    margin-left: 12px;

    &--user {
      font-size: 14px;
      line-height: 24px;
      font-family: "Montserrat-Regular";
      margin-right: 12px;
      text-align: right;

      display: block;
      width: 215px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &__logout {
    position: absolute;
    display: none;

    top: 130%;
    right: 0;
    padding: 40px;
    z-index: 1000;

    border-radius: 12px;
    background-color: $dark-middle;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 16px 20px rgba(0, 0, 0, 0.2);

    &::before {
      position: absolute;
      content: "";
      right: 12px;
      bottom: 97%;
      width: 18px;
      height: 9px;
      background-image: url("@/assets/img/up.svg");
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__link-logout {
    font-family: "Montserrat-Bold";
    color: $green;
    font-size: 18px;
    cursor: pointer;
    pointer-events: all;

    &:hover {
      color: white;
    }
  }
}

.header__user {
  &:hover {
    .header__logout {
      display: block;
    }
  }
}
</style>
