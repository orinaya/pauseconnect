<script setup>
defineProps({
  title: String,
  rotate: String,
});
</script>
<template>
  <div class="stepper container">
    <h2 class="stepper-title">{{ title }}</h2>
    <img class="stepper-icon" src="../assets/icons/icon-arrow-down.svg" :class="rotate" />
  </div>
</template>
<style>
.stepper {
  background-color: var(--indigo-200);
  padding: 4px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;

  &:hover {
    background-color: var(--indigo-300);
  }
}

.stepper-title {
  color: #fff;
}

.stepper-icon {
  transform: rotate(0);
  transition: transform 250ms ease-in-out;
}
</style>
