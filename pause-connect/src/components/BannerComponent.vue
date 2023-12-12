<script setup>
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
defineProps({
  previousPages: {
    name: String,
    path: String,
    previousPageName: String,
  },
  pageName: String,
  title: String,
  text: String,
  image: String,
});
</script>
<template>
  <section class="hero-secondary">
    <div class="hero-secondary_container container">
      <BreadcrumbComponent
        :previousPages="previousPages"
        :pageName="pageName"
        class="s-breadcrumb classic-container"
      />
      <div class="hero-secondary-content">
        <div>
          <img :src="image" />
        </div>
        <div class="hs-bloc">
          <h1>{{ title }}</h1>
          <p class="hsb-text">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero-secondary {
  background-color: var(--indigo-200);
  color: #fff;
  height: 20%;
  margin-bottom: var(--space-section);
}

.hero-secondary-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--space-l) 0;
}

.hs-bloc {
  text-align: center;
  width: 50%;
}

.hsb-text {
  text-align: center;
}
</style>
