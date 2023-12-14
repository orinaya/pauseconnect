<script setup>
const items = [
  {
    title: "Dépendance à la cyber-sexualité",
    text: "De nombreuses jeunes sont exposés à du contenus à caractère pornographique, et ce, dès un très jeune âge, que cela soit sur des sites spécialisés pourtant interdit au moins de 18 ans, que sur les réseaux sociaux où il n'y a que très peu de modération. Il est par conséquent, très simple de déclencher une addiction chez les jeunes.",
    image: "addictions-1.png",
  },
  {
    title: "Dépendance à caractère financier",
    text: "Désormais avec internet, il est très facile de parier ou dépenser de l'argent que celà soit sur des jeux d'argent en ligne, mais aussi sur des jeux payants, des sites payants ou encore dans la cryptomonnaie. Chacun de ses moyens peut être exploité par les jeunes, y compris les mineurs.",
    image: "addictions-2.png",
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
      Il est important d'avoir conscience que passer du temps sur les écrans et les réseaux sociaux
      peut amener vers d'autres addictions bien plus dangereuses. En effet, on retrouve en premier
      lieu la cyber-sexualité mais aussi la dépendance à caractère financier.
    </p>

    <div class="addictions-content">
      <div v-for="(item, index) in items" :key="index" class="addictions-card">
        <img class="addiction-image" :src="getImageUrl(item.image)" />
        <h3>{{ item.title }}</h3>
        <p class="addictions-text">
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

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 40px;
  }
}

.addictions-card {
  width: 32%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  align-items: center;

  @media (max-width: 760px) {
    width: 100%;
  }
}

.addictions-text {
  height: 160px;
}
.addiction-image {
  height: 200px;
  width: max-content;
}
</style>
