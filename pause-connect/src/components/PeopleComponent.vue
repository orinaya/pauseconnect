<script setup>
const items = [
  {
    title: "Les enfants",
    text: "(y compris en très bas âge)",
    image: "children.png",
  },
  {
    title: "Les adolescents et jeunes adultes",
    text: "",
    image: "teen.png",
  },
  {
    title: "Les adultes",
    text: "(parents et personnes sans enfants)",
    image: "adult.png",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>

<template>
  <div class="container">
    <h2>Qui est concerné ?</h2>
    <div class="people-content">
      <div v-for="(item, index) in items" :key="index" class="people-card">
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
        <img :src="getImageUrl(item.image)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.people-content {
  display: flex;
  justify-content: space-around;
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-section);
}
.people-card {
  background-image: url(../assets/img/citrus-ellipse.png);
  background-repeat: no-repeat;
  width: 30%;
  height: 240px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position-y: bottom;
  background-position-x: center;
  text-align: center;
}
</style>
