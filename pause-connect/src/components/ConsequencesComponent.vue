<script setup>
const items = [
  {
    title: "Troubles du sommeil et alimentaires",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-1.png",
  },
  {
    title: "Troubles de la mémoire",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-2.png",
  },
  {
    title: "Difficultés de concentration",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-3.png",
  },
  {
    title: "Isolement social",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-4.png",
  },
  {
    title: "Augmentation du risque de dépression",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-5.png",
  },
  {
    title: "Troubles visuels",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran ",
    image: "sign-6.png",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <div>
    <div class="container consequences-container">
      <h2>Quelles sont les conséquences ?</h2>
      <div class="consequences-content">
        <div v-for="(item, index) in items" :key="index" class="consequences-card">
          <div><img :src="getImageUrl(item.image)" /></div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.consequences-container {
  background-color: var(--indigo-200);
  border-radius: 4px;
  height: max-content;
}

h2 {
  color: #fff;
}
</style>
