<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
import EscapeBlock from "@/components/EscapeBlock.vue";
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <EscapeBlock
    title="Comment sortir de l’addiction ?"
    text="Tu penses être addict et tu veux t’améliorer ? Découvre tous nos conseils et préconisations afin de retrouver un équilibre dans ta vie et décrocher des écrans et réseaux sociaux. "
    img="src/assets/img/addiction-img.png"
  />
  <Footer />
</template>

<style>
img,
.grow {
  transition: transform 1s;
}

img:hover,
.grow:hover {
  transform: scale(1.1);
}
</style>
