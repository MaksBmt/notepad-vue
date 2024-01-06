<template>
  <AppModal class="form">
    <router-link to="/" title="закрыть">
      <AppClose class="form__close" />
    </router-link>
    <AppCaption class="form__title">Регистрация</AppCaption>
    <form @submit.prevent="formReg">
      <div class="form__wrap">
        <label class="form__label" for="email">Email</label>
        <AppInput
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="form__input"
          placeholder="E-mail"
          autocomplete="email"
          :error-text="validations.email.error"
        />
      </div>
      <div class="form__wrap">
        <label class="form__label" for="password">Пароль</label>
        <AppInput
          id="password"
          v-model="password"
          type="password"
          name="password"
          autocomplete="new-password"
          class="form__input"
          :class="[
            isPasswordClose ? 'input--password-close' : 'input--password-open',
          ]"
          placeholder="Пароль"
          :error-text="validations.password.error"
          :is-password="isPassword"
          @action="clickIconInputPassword"
        />
      </div>
      <div class="form__wrap">
        <label class="form__label" for="confirm_password">Пароль ещё раз</label>
        <AppInput
          id="confirm_password"
          v-model="confirmPassword"
          type="password"
          name="confirm_password"
          class="form__input"
          :class="[
            isConfirmPasswordClose
              ? 'input--password-close'
              : 'input--password-open',
          ]"
          placeholder="Пароль еще раз"
          :error-text="validations.confirmPassword.error"
          :is-password="isPassword"
          @action="clickiconInputConfirmPassword"
        />
      </div>
      <div class="form__wrap">
        <AppButton class="form__button" type="submit">Войти</AppButton>
        <div class="form__box">
          <span class="form__text">У вас есть аккаунт?</span>
          <router-link
            to="/login"
            class="form__link"
            title="перейти на страницу авторизации"
          >
            <span class="form__text form__text--green">Войдите</span>
          </router-link>
        </div>
      </div>
    </form>
    <p v-if="serverErrorMessage" class="form__server" role="alert">
      {{ serverErrorMessage }}
    </p>
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/AppModal.vue";
import AppCaption from "@/components/AppCaption.vue";
import AppClose from "@/components/AppClose.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import { setToken } from "@/services/token-manager";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { ref, watch } from "vue";
import { validateFields, clearValidationErrors } from "@/common/validator";

const setEmptyValidations = () => ({
  email: {
    error: "",
    rules: ["required", "email"],
  },
  password: {
    error: "",
    rules: ["required"],
  },
  confirmPassword: {
    error: "",
    rules: ["required"],
  },
});

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const validations = ref(setEmptyValidations());
const authStore = useAuthStore();
const serverErrorMessage = ref(null);
const isPasswordClose = ref(true);
const isConfirmPasswordClose = ref(true);
const isPassword = true;
const router = useRouter();

const toggleIconInput = (target) => {
  target.nextElementSibling.type === "password"
    ? (target.nextElementSibling.type = "text")
    : (target.nextElementSibling.type = "password");
};

const clickIconInputPassword = ({ target }) => {
  isPasswordClose.value = !isPasswordClose.value;
  toggleIconInput(target);
};

const clickiconInputConfirmPassword = ({ target }) => {
  isConfirmPasswordClose.value = !isConfirmPasswordClose.value;
  toggleIconInput(target);
};

watch(email, () => {
  // Очищаем поля ошибок при вводе новых данных
  if (serverErrorMessage.value) serverErrorMessage.value = null;
  if (validations.value.email.error) clearValidationErrors(validations.value);
});

watch(password, () => {
  // Очищаем поля ошибок при вводе новых данных
  if (serverErrorMessage.value) serverErrorMessage.value = null;
  if (validations.value.password.error)
    clearValidationErrors(validations.value);
});

watch(confirmPassword, () => {
  // Очищаем поля ошибок при вводе новых данных
  if (serverErrorMessage.value) serverErrorMessage.value = null;
  if (validations.value.confirmPassword.error)
    clearValidationErrors(validations.value);
});

async function formReg() {
  if (
    !validateFields(
      {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      },
      validations.value,
    )
  ) {
    return;
  }

  const responseMessage = await authStore.reg(
    email.value,
    password.value,
    confirmPassword.value,
  );

  if (responseMessage?.statusCode >= 400) {
    Array.isArray(responseMessage.message)
      ? (serverErrorMessage.value = responseMessage.message.join(", "))
      : (serverErrorMessage.value = responseMessage.message);
  } else {
    authStore.isAuthenticated = true;
    const result = await authStore.getToken(email.value, password.value);
    setToken(result.accessToken);
    authStore.user.email = email.value;
    router.push("/notes");
  }
}
</script>

<style lang="scss" scoped>
@import "@/views/form/style/style.scss";
</style>
