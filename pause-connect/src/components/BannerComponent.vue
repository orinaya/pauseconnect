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
          <img :src="image" class="hs-image" />
        </div>
        <div class="hs-bloc">
          <h1 class="hs-title">{{ title }}</h1>
          <p class="hsb-text">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hs-image {
  @media (min-width: 760px) and (max-width: 980px) {
    width: 200px;
  }

  @media (max-width: 760px) {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
}

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

  @media (max-width: 760px) {
    flex-direction: column;
  }

  @media (min-width: 760px) and (max-width: 980px) {
    gap: 40px;
  }
}

.hs-bloc {
  text-align: center;
  width: 50%;

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (min-width: 760px) and (max-width: 980px) {
    width: 80%;
  }
}

.hs-title {
  @media (max-width: 760px) {
    font-size: var(--h2);
  }

  @media (min-width: 760px) and (max-width: 980px) {
    font-size: var(--h2);
  }
}
.hsb-text {
  text-align: center;
}
</style>
