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
</script>
<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <div id="map-content">
      <div class="map-image">
        <img class="map-image_mask" :src="imgDesktop" />
      </div>
      <!-- <img :src="imgDesktop" alt="title" /> -->
      <img :src="imgMobile" alt="title" />
      <LinkComponent title="Relever les défis" color="primary" route-link="/nos-defis" />
    </div>
  </section>
</template>
<style scoped>
section {
  max-width: 1280px;
  margin: auto;
  margin-bottom: var(--space-section);
}

section #map-content {
  background-color: var(--citrus-900);
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
