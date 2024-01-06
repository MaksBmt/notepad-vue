<template>
  <div class="input">
    <span
      v-if="isPassword"
      class="input__img-password"
      @click="emit('action', $event)"
    >
    </span>
    <textarea
      v-if="isTextArea"
      :id="id"
      :value="modelValue"
      :type="type"
      :name="name"
      class="input__value input__value--textarea"
      :class="{
        'input__value--error': showError,
      }"
      :placeholder="placeholder"
      :required="required"
      maxlength="500"
      @input="emit('update:modelValue', $event.target.value)"
    ></textarea>

    <input
      v-else
      :id="id"
      :value="modelValue"
      :type="type"
      :name="name"
      class="input__value"
      :class="{
        'input__value--error': showError,
      }"
      :placeholder="placeholder"
      maxlength="100"
      :required="required"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <span v-if="showError" class="input__text" role="alert">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  errorText: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  isTextArea: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "action"]);

const showError = computed(() => {
  return !!props.errorText;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.input {
  position: relative;

  &__value {
    display: block;

    box-sizing: border-box;
    width: 100%;
    height: 72px;
    margin: 0;
    padding: 0 28px;
    padding-right: 40px;
    border-radius: 36px;
    background-color: white;

    font-size: 18px;
    line-height: 28px;
    font-family: "Montserrat-Regular";
    color: $dark;
    border: none;

    &::placeholder {
      color: $gray;
    }

    &:focus {
      outline: 2px solid $green;
    }

    &:hover {
      outline: 2px solid $green;
    }

    &:active {
      background-color: white;
    }

    &--textarea {
      padding: 16px;
      height: 136px;
      resize: none;

      @media (min-width: $xlg) {
        height: 212px;
      }

      &::placeholder {
        padding-left: 12px;
      }
    }
  }

  &__text {
    position: absolute;
    bottom: -20px;
    left: 28px;
    font-family: "Montserrat-Regular";
    font-size: 12px;
    line-height: 16px;

    color: $red;

    @media (min-width: $md) {
      font-size: 14px;
      line-height: 18px;
      bottom: -24px;
    }
  }

  &__img-password {
    position: absolute;
    width: 18px;
    height: 12px;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  &--password-close {
    .input__img-password {
      &::after {
        position: absolute;
        content: "";
        width: 18px;
        height: 14px;
        top: 0;
        left: 0;
        background-image: url("@/assets/img/on-password.svg");
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  &--password-open {
    .input__img-password {
      &::after {
        position: absolute;
        content: "";
        width: 18px;
        height: 14px;
        top: 0;
        left: 0;
        background-image: url("@/assets/img/off-password.svg");
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
