<script setup>
import { computed } from "vue";
const buttons = defineProps({
  title: String,
  color: String,
  routeLink: String,
  iconBefore: String,
  iconAfter: String,
});

const colorClass = computed(() => `${buttons.color}`);
</script>

<template>
  <button class="btn" :class="[colorClass]">
    <img v-if="iconBefore" class="link-icon-before icomoon" :src="`${iconBefore}`" />
    {{ buttons.title }}
    <img v-if="iconAfter" class="link-icon-after icomoon" :src="`${iconAfter}`" />
  </button>
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
  z-index: 1;

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

.primary-indigo {
  color: var(--indigo-btn-primary-fg);
  background-color: var(--indigo-btn-primary-bg);

  &:hover {
    color: var(--indigo-btn-primary-fg-hover);
    background-color: var(--indigo-btn-primary-bg-hover);
  }
}

.transparent {
  background-color: transparent;
}
</style>
