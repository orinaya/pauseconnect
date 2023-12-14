<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import image from "../assets/img/infos-banner.png";
import SignComponent from "@/components/SignComponent.vue";
import AddictionsComponent from "@/components/AddictionsComponent.vue";
import SourcesComponent from "@/components/SourcesComponent.vue";
import PeopleComponent from "@/components/PeopleComponent.vue";
import ConsequencesComponent from "@/components/ConsequencesComponent.vue";
import NumbersComponent from "@/components/NumbersComponent.vue";
import QuizLinkComponent from "@/components/QuizLinkComponent.vue";
import InfosLinkComponent from "@/components/InfosLinkComponent.vue";

const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
];

const item = {
  title: "Qu’est-ce que l’addiction aux écrans et aux réseaux sociaux ?",
  text: "Plongez dans notre exploration approfondie définissant ce qu'est véritablement l'addiction aux réseaux sociaux. Découvrez les signes, les impacts psychologiques et les étapes pour reconnaître et surmonter cette dépendance numérique, tout en rétablissant une connexion équilibrée avec votre vie hors ligne.",
};
</script>
<template>
  <BannerComponent
    :previousPages="previousPages"
    pageName="Informations"
    :title="item.title"
    :text="item.text"
    :image="image"
  />
  <NumbersComponent />
  <PeopleComponent />
  <SignComponent />
  <ConsequencesComponent />
  <AddictionsComponent />
  <InfosLinkComponent
    title="Penses-tu être addict ?"
    text=" Teste ta relation avec les écrans et les réseaux sociaux en faisant notre quiz. Sinon, si tu te sens prêt, tu peux aussi aller te challenger avec nos défis !"
  />
  <SourcesComponent />
</template>
