<script setup>
import LinkComponent from "./LinkComponent.vue";

const mapSection = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  imgDesktop: {
    type: String,
  },
  imgMobile: {
    type: String,
  },
});

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <div id="map-content">
      <div class="map-image">
        <img class="map-image_mask" :src="getImageUrl(imgDesktop)" />
      </div>
      <!-- <img :src="imgDesktop" alt="title" /> -->
      <img :src="getImageUrl(imgMobile)" alt="title" />
      <LinkComponent title="Relever les défis" color="primary" route-link="/nos-defis" />
    </div>
  </section>
</template>
<style scoped>
section {
  margin-bottom: var(--space-section);
}

section #map-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
}

.map-image {
  mask-image: url(../assets/img/map-mask.svg);
  mask-repeat: no-repeat;
  mask-position: bottom;
}

.map-image_mask {
  transition: transform 1s;
  z-index: 1;

  &:hover {
    transform: scale(1.08);
  }
}

section #map-content img {
  width: 100%;
  max-width: 970px;
  display: block;
  margin-top: 3rem;

  @media (max-width: 980px) {
    margin-top: 0;
  }

  &:first-child {
    display: block;
    @media (max-width: 900px) {
      display: none;
    }
  }
  &:nth-child(2) {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }
}
</style>
