<script setup>
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

var items = [
  {
    text: "Limite ton temps d’écran y compris les réseaux sociaux pendant 1 semaine",
    goal: "Réduire le temps d’écran quotidien",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "one",
    image: "challenge-1.png",
  },
  {
    text: "Choisis un jour où tu n’utiliseras peu voire pas du tout ton téléphone",
    goal: "L’utiliser seulement lorsque c’est nécessaire",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "two",
    image: "sign-5.png",
  },
  {
    text: "Arrête les écrans 1h avant de te coucher",
    goal: "Améliorer la qualité de sommeil",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "three",
    image: "sign-2.png",
  },
  {
    text: "Réduis les notifications que tu reçois habituellement",
    goal: "Réduire l’attention portée aux notifications",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "four",
    image: "challenge-2.png",
  },
  {
    text: "Abstiens toi de te prendre ou de te prendre en selfies sur les réseaux pendant 1 semaine",
    goal: "Diminuer l’auto-exposition en ligne",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "five",
    image: "challenge-3.png",
  },
  {
    text: "Choisis un jour où tu n’utiliseras peu voire pas du tout ton téléphone",
    goal: "L’utiliser seulement lorsque c’est nécessaire",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "six",
    image: "challenge-5.png",
  },
  {
    text: "Organiser une sortie seul ou accompagné en dehors de chez soi",
    goal: "Détourner l’attention du téléphone",
    tips: "Tu limiter le temps de tes applis dans tes réglages de téléphone",
    id: "seven",
    image: "challenge-4.png",
  },
];
const isShow = ref(false);
const getIconUrl = (image) => {
  return new URL(`../assets/icons/${image}`, import.meta.url).href;
};

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};

const eye = "icon-eye.svg";
const close = "icon-close.svg";
</script>
<template>
  <div v-for="(item, index) in items" :key="index" class="challenge-card" :id="item.id">
    <div class="challenge-content">
      <div>
        <h3 class="challenge-card_title">Défi n°{{ index + 1 }}</h3>
        <p>{{ item.text }}</p>
      </div>
      <div>
        <b class="challenge-card_subtitle indigo">Objectif</b>
        <p>{{ item.goal }}</p>
      </div>
      <div v-show="isShow" class="challenge-card_tips">
        <b class="challenge-card_subtitle citrus-text"> Astuce</b>
        <p>{{ item.tips }}</p>
      </div>
      <ButtonComponent
        :title="isShow ? 'Fermer' : `Voir l'astuce`"
        :color="isShow ? 'secondary' : 'primary'"
        @click="isShow = !isShow"
        :iconAfter="getIconUrl(isShow ? close : eye)"
      />
    </div>
    <div class="challenge-image">
      <img :src="getImageUrl(item.image)" />
    </div>
  </div>
</template>
<style>
.challenge-card:nth-child(odd) {
  background-color: #fff;
  box-shadow: 0px 3px 9.7px rgba(0, 0, 0, 0.17);
  width: 33%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-radius: 4px;
  position: absolute;
}

.challenge-card:nth-child(even) {
  background-color: #fff;
  box-shadow: 0px 3px 9.7px rgba(0, 0, 0, 0.17);
  width: 33%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 20px 0;
  border-radius: 4px;
  position: absolute;
}
.challenge-card_title {
  color: var(--indigo);
  font-weight: 800;
  font-family: "Teko";
  font-size: 24px;
}

.challenge-content {
  width: 51%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.challenge-card_tips {
  transition: transform 1s;
  width: fit-content;
}
.indigo {
  color: var(--indigo-400);
}

.citrus-text {
  color: var(--citrus-400);
}

#one {
  top: 464px;
  right: 146px;
}

#two {
  top: 687px;
  left: 111px;
}

#three {
  top: 853px;
  right: 77px;
}

#four {
  top: 1071px;
  left: 86px;
}

#five {
  top: 1258px;
  right: 127px;
}

#six {
  top: 1448px;
  left: 153px;
}

#seven {
  top: 1649px;
  right: 227px;
}
</style>
