<template>
  <div class="overlay"></div>
  <AppModal class="form modal__notes">
    <AppClose class="form__close" title="закрыть" @click="clickButtonClose" />

    <AppCaption class="form__title">Добавление заметки</AppCaption>
    <form @submit.prevent="formNotes">
      <div class="form__wrap">
        <label class="form__label" for="title">Название заметки</label>
        <AppInput
          id="title"
          v-model="title"
          type="text"
          name="title"
          class="form__input"
          placeholder="Введите название"
          :error-text="validations.title.error"
        />
        <div class="form__count-wrap">
          <span class="form__count">{{ countCurrentTitle }}/</span>
          <span class="form__count" aria-describedby="maxTitle">{{
            countMaxTitle
          }}</span>
          <p id="maxTitle">максимальное количество знаков</p>
        </div>
      </div>
      <div class="form__wrap">
        <label class="form__label" for="content">Текст заметки</label>
        <AppInput
          id="content"
          v-model="content"
          type="text"
          name="content"
          class="form__input form__textarea"
          placeholder="Введите текст"
          :is-text-area="isTextArea"
          :error-text="validations.content.error"
        />
        <div class="form__count-wrap">
          <span class="form__count">{{ countCurrentContent }}/</span>
          <span class="form__count" aria-describedby="maxContent">{{
            countMaxContent
          }}</span>
          <p id="maxContent">максимальное количество знаков</p>
        </div>
      </div>
      <div class="form__wrap">
        <AppButton class="form__button" type="submit">Добавить</AppButton>
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
import { ref, watch } from "vue";
import { useNotesStore } from "@/stores/notes";
import { validateFields, clearValidationErrors } from "@/common/validator";

const title = ref("");
const content = ref("");
const isTextArea = true;
const countMaxTitle = 100;
const countMaxContent = 500;

const counterString = (value) => {
  return value.value.length;
};

const countCurrentTitle = ref(0);
const countCurrentContent = ref(0);

watch(title, () => (countCurrentTitle.value = counterString(title)));
watch(content, () => (countCurrentContent.value = counterString(content)));

const setEmptyValidations = () => ({
  title: {
    error: "",
    rules: ["required"],
  },
  content: {
    error: "",
    rules: ["required"],
  },
});
const validations = ref(setEmptyValidations());
const notesStore = useNotesStore();
const serverErrorMessage = ref(null);

const clickButtonClose = () => {
  notesStore.isFormMessage = !notesStore.isFormMessage;
};

watch(title, () => {
  if (validations.value.title.error) clearValidationErrors(validations.value);
});
watch(content, () => {
  if (validations.value.content.error) clearValidationErrors(validations.value);
});

async function formNotes() {
  if (
    !validateFields(
      {
        title: title.value,
        content: content.value,
      },
      validations.value,
    )
  ) {
    return;
  }

  const responseMessage = await notesStore.setNotes({
    title: title.value,
    content: content.value,
  });

  if (responseMessage?.statusCode >= 400) {
    Array.isArray(responseMessage.message)
      ? (serverErrorMessage.value = responseMessage.message.join(", "))
      : (serverErrorMessage.value = responseMessage.message);
  } else {
    notesStore.set(responseMessage);
    notesStore.isFormMessage = false;
  }
}
</script>

<style lang="scss" scoped>
@import "@/views/form/style/style.scss";
</style>
