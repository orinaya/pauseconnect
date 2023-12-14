<script setup>
import { ref } from "vue";
import BannerComponent from "../components/BannerComponent.vue";
import image from "../assets/img/help-banner.png";

import AdviceComponent from "@/components/HelpAdviceComponent.vue";
import SteppersComponent from "@/components/SteppersComponent.vue";
import FirstStepComponent from "@/components/FirstStepComponent.vue";
import ThirdStepComponent from "@/components/ThirdStepComponent.vue";
import FourthStepComponent from "@/components/FourthStepComponent.vue";
const previousPages = [
  {
    path: "/",
    name: "Accueil",
  },
];

const step1IsShow = ref(true);
const step2IsShow = ref(false);
const step3IsShow = ref(false);
const step4IsShow = ref(false);

const item = {
  title: "Comment sortir de cette addiction ?",
  text: "Découvre notre guide pour sortir de l'addiction aux écrans et aux réseaux sociaux. Découvre des conseils concrets, des étapes progressives et des approches équilibrées pour retrouver le contrôle de ton temps en ligne et rétablir une connexion significative avec le monde réel ! ",
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

  <SteppersComponent
    title="1ère étape : L'auto-évaluation"
    @click="step1IsShow = !step1IsShow"
    :rotate="step1IsShow ? 'stepper-flipped' : ''"
  />
  <FirstStepComponent v-show="step1IsShow" class="help-content" />

  <SteppersComponent
    title="2ème étape : La prévention"
    @click="step2IsShow = !step2IsShow"
    :rotate="step2IsShow ? 'stepper-flipped' : ''"
  />
  <AdviceComponent v-show="step2IsShow" />

  <SteppersComponent
    title="3ème étape : Définition d’objectifs"
    @click="step3IsShow = !step3IsShow"
    :rotate="step3IsShow ? 'stepper-flipped' : ''"
  />
  <ThirdStepComponent v-show="step3IsShow" />

  <SteppersComponent
    title="4ème étape : Consultation d’un professionnel de la santé"
    @click="step4IsShow = !step4IsShow"
    :rotate="step4IsShow ? 'stepper-flipped' : ''"
  />
  <FourthStepComponent v-show="step4IsShow" />
</template>

<style>
.stepper {
  transform: rotate(0);
  transition: transform 250ms ease-in-out;
  cursor: pointer;
}

.stepper-flipped {
  transform: rotate(180deg);
}

.help-content {
  transition: max-height 250ms ease-in-out;
}
</style>
