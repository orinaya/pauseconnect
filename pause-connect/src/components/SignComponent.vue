<script setup>
const items = [
  {
    title: "Repli sur soi",
    text: "Tu t’éloignes de ton entourage",
    image: "sign-1.png",
  },
  {
    title: "Troubles du sommeil",
    text: "Tu restes tard sur les écrans et tu n’arrives pas à dormir",
    image: "sign-2.png",
  },
  {
    title: "Agressivité",
    text: "Tu es agressif si tu ne peux pas accéder aux écrans",
    image: "sign-3.png",
  },
  {
    title: "Perte de contrôle",
    text: "Tu ne peux pas t’empêcher d’aller sur un écran",
    image: "sign-4.png",
  },
  {
    title: "Manque d’intérêt",
    text: "Tu ne t’intéresses plus à d’autres activités",
    image: "sign-5.png",
  },
  {
    title: "Tristesse / Anxiété",
    text: "Tu te sens mal lorsque tu es loin des écrans",
    image: "sign-6.png",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <div class="container">
    <h2>Quels sont les signes ?</h2>
    <div class="sign-content">
      <div class="signcard grow" v-for="(item, index) in items" :key="index">
        <h3 class="signcard-title">{{ item.title }}</h3>
        <p class="signcard-text">{{ item.text }}</p>
        <img class="signcard-image" :src="getImageUrl(item.image)" />
      </div>
    </div>
  </div>
</template>
<style>
.sign-content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xl);
  justify-content: center;
  width: 76%;
  margin: 0 auto;
  margin-top: var(--space-l);
  margin-bottom: var(--space-section);

  @media (max-width: 980px) {
    width: 100%;
  }
}

.signcard {
  width: fit-content;
  padding: var(--space-l) var(--space-m);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-s);
  align-items: center;
}

.signcard:nth-child(even) {
  background-color: var(--citrus-950);
}

.signcard:nth-child(odd) {
  background-color: var(--mint);
}

.signcard-text,
.signcard-title {
  width: 204px;
  text-align: center;
}

.signcard-text {
  height: 50px;
}

.signcard-image {
  height: auto;
  width: 140px;
}
</style>
