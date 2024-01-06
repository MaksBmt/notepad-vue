<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import AppLayoutMain from "./AppLayoutMain.vue";

const route = useRoute();
const layout = shallowRef(null);

// Наблюдаем за изменением маршрута
watch(
  () => route.meta,
  async (meta) => {
    try {
      if (meta.layout) {
        // Пробуем найти компонент из свойства meta и динамически импортировать его
        const component = await import(`./${meta.layout}.vue`);
        layout.value = component?.default || AppLayoutMain;
      } else {
        layout.value = AppLayoutMain;
      }
    } catch (e) {
      console.error(
        "Динамический шаблон не найден. Установлен шаблон по-умолчанию.",
        e,
      );
      layout.value = AppLayoutMain;
    }
  },
);
</script>
