<template>
  <AppModal class="form">
    <router-link to="/" title="закрыть">
      <AppClose class="form__close" />
    </router-link>
    <AppCaption class="form__title">Вход в ваш аккаунт</AppCaption>
    <form class="form__form" @submit.prevent="form">
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
          autocomplete="current-password"
          name="password"
          class="form__input"
          :class="[
            isPasswordClose ? 'input--password-close' : 'input--password-open',
          ]"
          placeholder="Пароль"
          :error-text="validations.password.error"
          :is-password="isPassword"
          @action="clickiconInput"
        />
      </div>
      <div class="form__wrap">
        <AppButton class="form__button" type="submit">Войти</AppButton>
        <div class="form__box">
          <span class="form__text">У вас нет аккаунта?</span>
          <router-link
            to="/reg"
            class="form__link"
            title="перейти в форму регистрации"
          >
            <span class="form__text form__text--green">Зарегистрируйтесь</span>
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
import { validateFields, clearValidationErrors } from "@/common/validator";
import { useAuthStore } from "@/stores/auth";
import { useNotesStore } from "@/stores/notes";
import { useRouter } from "vue-router";
import { setToken } from "@/services/token-manager";
import { ref, watch } from "vue";

const setEmptyValidations = () => ({
  email: {
    error: "",
    rules: ["required", "email"],
  },
  password: {
    error: "",
    rules: ["required"],
  },
});

const email = ref("");
const password = ref("");
const validations = ref(setEmptyValidations());
const authStore = useAuthStore();
const notesStore = useNotesStore();
const serverErrorMessage = ref(null);
const isPasswordClose = ref(true);
const isPassword = true;
const router = useRouter();

const clickiconInput = ({ target }) => {
  isPasswordClose.value = !isPasswordClose.value;

  target.nextElementSibling.type === "password"
    ? (target.nextElementSibling.type = "text")
    : (target.nextElementSibling.type = "password");
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

async function form() {
  if (
    !validateFields(
      { email: email.value, password: password.value },
      validations.value,
    )
  ) {
    return;
  }

  const responseMessage = await authStore.auth(email.value, password.value);

  if (responseMessage?.statusCode >= 400) {
    Array.isArray(responseMessage.message)
      ? (serverErrorMessage.value = responseMessage.message.join(", "))
      : (serverErrorMessage.value = responseMessage.message);
  } else {
    setToken(responseMessage.accessToken);
    authStore.isAuthenticated = true;
    authStore.user.email = email.value;

    notesStore.getNotes();
    router.push("/notes");
  }
}
</script>

<style lang="scss" scoped>
@import "@/views/form/style/style.scss";
</style>
