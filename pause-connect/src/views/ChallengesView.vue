<script setup>
import BannerComponent from "../components/BannerComponent.vue";
const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
];
const item = {
  title: "Prêt à relever nos défis ?",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enimeget, pellentesque vestibulum massa.",
};

import image from "../assets/img/challenge-banner.png";
import ChallengeCardComponent from "@/components/ChallengeCardComponent.vue";
</script>

<template>
  <BannerComponent
    :previousPages="previousPages"
    pageName="Nos défis"
    :title="item.title"
    :text="item.text"
    :image="image"
  />

  <div class="challenge">
    <ChallengeCardComponent />
    <div class="challenge-goal">
      <img src="../assets/img/trophy.png" />
      <div class="challenge-goal_text">
        <h3>Bien joué !</h3>
        <p>
          Maintenant, les cartes sont entre tes mains, applique ces défis dans ta vie et regarde ton
          quotidien se métamorphoser !
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-secondary {
  margin-bottom: 0;
}

.challenge {
  background-image: url("../assets/img/road-map.png");
  height: 1883px;
  background-repeat: no-repeat;
  background-position-x: 57px;
  background-size: contain;
  background-color: var(--mint-800);
}

.challenge-goal {
  background-color: #fff;
  box-shadow: 0px 3px 9.7px rgba(0, 0, 0, 0.17);
  width: fit-content;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  gap: 28px;
  border-radius: 4px;
  position: absolute;
  top: 2085px;
  right: 473px;
}

.challenge-goal_text {
  width: 270px;
}
</style>
