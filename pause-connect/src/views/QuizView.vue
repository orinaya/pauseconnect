<script setup>
import BannerComponent from "../components/BannerComponent.vue";
const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
];
const item = {
  title: "Quiz : Es-tu addict aux écrans et aux réseaux sociaux ?",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enimeget, pellentesque vestibulum massa.",
};

import image from "../assets/img/challenge-banner.png";
</script>

<template>
  <BannerComponent
    :previousPages="previousPages"
    pageName="Notre quiz"
    :title="item.title"
    :text="item.text"
    :image="image"
  />
</template>
