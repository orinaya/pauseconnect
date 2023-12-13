<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import image from "../assets/img/contact-img.png";
import FormComponent from "@/components/FormComponent.vue";

const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
];
const item = {
  title: "Contact",
  text: "En tant que principal(e), enseignant(e) ou autres et que vous souhaitez aborder ce sujet dans votre établissement, vous pouvez remplir ce formulaire afin de discuter de votre projet.",
};
</script>

<template>
  <BannerComponent
    :previousPages="previousPages"
    pageName="Contact"
    :title="item.title"
    :text="item.text"
    :image="image"
  />

  <div class="container">
    <FormComponent />
  </div>
</template>
