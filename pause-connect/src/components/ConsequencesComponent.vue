<script setup>
const items = [
  {
    title: "Troubles alimentaires et du sommeil",
    text: "Tu ne dors pas correctement et tu manges des confiseries et autres",
    image: "sign-1.png",
  },
  {
    title: "Troubles de la mémoire",
    text: "Tu as des difficulté pour te souvenir de choses simples ",
    image: "sign-2.png",
  },
  {
    title: "Difficultés de concentration",
    text: "Tu n'arrive pas à te concentrer sans ton téléphone ",
    image: "sign-3.png",
  },
  {
    title: "Isolement social",
    text: "Tu as tendance a resté seul avec ton téléphone",
    image: "sign-4.png",
  },
  {
    title: "Augmentation du risque de dépression",
    text: "Rester seul et avec des difficultés augmente les chances de dépression ",
    image: "sign-5.png",
  },
  {
    title: "Troubles visuels",
    text: "Tu commences à avoir des difficultés pour voir ",
    image: "sign-6.png",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <section id="consequences">
    <div class="container consequences-container">
      <h2>Quelles sont les conséquences ?</h2>
      <div class="consequences-content">
        <div v-for="(item, index) in items" :key="index" class="consequences-card grow">
          <img class="consequences-image" :src="getImageUrl(item.image)" />
          <div class="consequences-group">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#consequences {
  margin-bottom: var(--space-section);
}
.consequences-container {
  background-color: var(--indigo-200);
  border-radius: 4px;
  height: max-content;
  padding: 40px 0;
  width: 100%;
}
.consequences-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: center;
}
.consequences-card {
  background-color: var(--citrus-950);
  width: 28%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  border-radius: 4px;
  height: 160px;

  @media (max-width: 980px) {
    width: 40%;
  }

  @media (max-width: 760px) {
    width: 80%;
  }
}

.consequences-group {
  width: 66%;
  text-align: center;
}

.consequences-image {
  width: 30%;
}
h2 {
  color: #fff;
  margin-bottom: 20px;
  margin-left: 40px;
}
</style>
