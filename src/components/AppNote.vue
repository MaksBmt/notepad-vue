<template>
  <article class="note" :data-id="`${id}`">
    <h2 class="note__title">{{ title }}</h2>
    <p class="note__text">
      {{ content }}
    </p>
    <button
      class="note__button"
      @click="emit('clickButtonDelete', $event.target)"
    >
      <svg width="16" height="16" class="note__svg">
        <use xlink:href="@/assets/img/sprite.svg#close"></use>
      </svg>
      Удалить
    </button>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  id: {
    type: [Number, String],
    required: true,
  },
});

const emit = defineEmits(["clickButtonDelete"]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.note {
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 12px;

  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  background-color: $green;

  @media (min-width: $lg) {
    width: 385px;
  }

  @media (min-width: $xlg) {
    width: 505px;
  }

  &::before {
    position: absolute;
    content: "";
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    background-image: url("@/assets/img/note.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    content: "";
    width: 40px;
    height: 40px;
    top: -1px;
    right: -1px;
    background-image: url("@/assets/img/note-fon.svg");
    background-position: center;
    background-repeat: no-repeat;
    z-index: 50;
  }

  &__title {
    margin: 0;
    padding: 20px 28px;
    padding-right: 56px;
    font-size: 20px;
    line-height: 26px;
    font-family: "Montserrat-Semibold";
    color: white;
    border-bottom: 1px solid $gray;
    word-wrap: break-word;

    @media (min-width: $md) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__text {
    margin: 0;
    padding: 20px 28px;
    font-size: 16px;
    line-height: 24px;
    color: white;
    font-family: "Montserrat-Medium";
    word-wrap: break-word;

    @media (min-width: $md) {
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__button {
    @include button();
    position: relative;
    display: flex;
    height: 56px;
    align-items: center;
    margin-right: 32px;
    margin-left: auto;
    margin-top: 20px;
    border: none;
    background-color: inherit;

    font-size: 20px;
    line-height: 32px;
    font-family: "Montserrat-Medium";
    color: white;
  }

  &__svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 18px;
    left: -20px;

    margin-right: 12px;
    stroke: white;
  }
}
</style>
