<script setup>
import { computed } from "vue";
const buttons = defineProps({
  title: String,
  color: String,
  routeLink: String,
});

const colorClass = computed(() => `${buttons.color}`);
</script>

<template>
  <button class="btn" :class="[colorClass]">{{ buttons.title }}</button>
</template>

<style>
.btn {
  display: flex;
  text-align: center;
  padding: 8px 16px;
  gap: 10px;
  border-radius: 4px;
  font-weight: 700;
  border: none;
  font-family: var(--font-base);
  font-size: 16px;
  cursor: pointer;
  transition: transform 1s;
  width: fit-content;

  &:hover {
    transform: scale(1.06);
  }
}

.primary {
  color: var(--citrus-btn-primary-fg);
  background-color: var(--citrus-btn-primary-bg);

  &:hover {
    color: var(--citrus-btn-primary-fg-hover);
    background-color: var(--citrus-btn-primary-bg-hover);
  }
}

.secondary {
  color: var(--mint-btn-secondary-fg);
  background-color: var(--mint-btn-secondary-bg);

  &:hover {
    color: var(--mint-btn-secondary-fg-hover);
    background-color: var(--mint-btn-secondary-bg-hover);
  }
}
</style>
