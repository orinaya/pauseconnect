<script setup>
const items = [
  {
    title: "Dépendance à la cyber-sexualité",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis.",
    image: "addictions-1.jpg",
  },
  {
    title: "Dépendance Aux jeux d’argent",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis.",
    image: "addictions-2.jpg",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <div class="container">
    <h2>Un risque vers d’autres addictions</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia
      non tellus at, convallis laoreet felis.
    </p>

    <div class="addictions-content">
      <div v-for="(item, index) in items" :key="index" class="addictions-card">
        <img class="addiction-image" :src="getImageUrl(item.image)" />
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.addictions-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-section);
}

.addictions-card {
  width: 32%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  align-items: center;
  /* height: 200px; */
}

.addiction-image {
  height: 200px;
  width: max-content;
}
</style>
