<script setup>
defineProps({
  previousPages: {
    name: String,
    path: String,
    previousPageName: String,
  },
  pageName: String,
});
</script>

<template>
  <div class="breadcrumb">
    <RouterLink
      :to="page.path"
      v-for="page in previousPages"
      :key="page.name"
      :title="page.name"
      class="breadcrumb-previous"
      >{{ page.name }}
      <i class="breadcrumb-icon icon-arrow-right-s-line"></i>
    </RouterLink>
    <p>/</p>
    <p class="breadcrumb-here">{{ pageName }}</p>
  </div>
</template>

<style>
.breadcrumb {
  display: flex;
  align-items: center;
  font-weight: 300;
  padding-top: 20px;
  gap: var(--space-xs);
}

.breadcrumb-previous {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--citrus-500);
  }
}

.breadcrumb-here {
  color: var(--citrus);
  font-weight: 700;
  margin: 0;
}
</style>
