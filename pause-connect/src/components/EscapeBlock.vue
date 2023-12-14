<script setup>
import LinkComponent from "./LinkComponent.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div id="addiction-block" class="container">
    <div id="block-content">
      <img :src="img" :alt="title" />

      <div>
        <div>
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
        </div>

        <LinkComponent title="Découvrir les solutions" color="primary" route-link="/aide" />
      </div>
    </div>
  </div>
</template>
<style>
#addiction-block {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    hsl(206, 66%, 10%) 50%,
    hsl(206, 66%, 10%) 100%
  );

  @media (max-width: 980px) {
    margin-bottom: var(--space-section);
    background: none;
  }
}
#addiction-block #block-content {
  max-width: 1280px;
  margin: auto;
  display: flex;
  gap: 5%;
  box-shadow: 0px 4px 22.1px 0px rgba(0, 0, 0, 0.18);
  background: white;
  padding: 50px 80px 50px 60px;
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 1280px) {
    padding: 50px 60px;
  }

  @media (max-width: 980px) {
    align-items: center;
  }

  @media (max-width: 760px) {
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
}
#addiction-block #block-content p {
  margin-bottom: 1rem;
}
#addiction-block #block-content > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#block-content img {
  display: block;
  width: auto;
  height: 100%;
  max-height: 320px;
  max-width: 250px;
}
</style>
