<template>
  <main class="notes">
    <button
      class="notes__button"
      aria-describedby="button-add"
      @click="clickButtonNotes"
    >
      <svg width="24" height="24" class="notes__plus">
        <use xlink:href="@/assets/img/sprite.svg#plus"></use>
      </svg>
      <p id="button-add">Добавить заметку</p>
    </button>
    <template v-if="notes.length">
      <AppNote
        v-for="(note, index) in notes"
        :id="note.id"
        :key="index"
        :title="note.title"
        :content="note.content"
        class="notes__note"
        @clickButtonDelete="deleteNote"
      ></AppNote>
    </template>

    <FormNotes v-if="notesStore.isFormMessage" />
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useNotesStore } from "@/stores/notes";
import FormNotes from "@/views/form/FormNotes.vue";
import AppNote from "@/components/AppNote.vue";
import { getToken } from "@/services/token-manager";

const notesStore = useNotesStore();

const deleteNote = (event) => {
  const id = event.parentElement.dataset.id;
  const index = notesStore.notes.findIndex((i) => i.id == id);
  notesStore.notes.splice(index, 1);

  const token = getToken();

  fetch("https://dist.nd.ru/api/notes/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: token ? `Bearer ${token}` : "",
    },
  }).catch((error) => console.log(error));
};

const clickButtonNotes = () => {
  notesStore.isFormMessage = !notesStore.isFormMessage;
};

const notes = computed(() => {
  return notesStore.notes;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.notes {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;

  @media (min-width: $md) {
    padding: 40px;
  }

  @media (min-width: $lg) {
    padding: 40px 80px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(385px, 1fr));
    gap: 20px;
    align-items: self-start;
    align-content: start;
  }

  @media (min-width: $xlg) {
    padding: 40px 0;
    grid-template-columns: repeat(auto-fill, minmax(505px, 1fr));
    gap: 40px;
  }

  &__note {
    margin-bottom: 20px;

    @media (min-width: $lg) {
      margin-bottom: 0;
    }
  }

  &__button {
    position: absolute;
    right: 24px;
    bottom: 40px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background-color: $green;
    box-shadow: -4px 0 10px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 42;

    &:hover {
      background-color: $green-hover;
    }

    &:active {
      background-color: $green-pressed;
    }
  }

  &__plus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    fill: white;
  }

  #button-add {
    display: none;
  }
}
</style>
