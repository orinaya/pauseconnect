<script setup>
import HeroComponent from "@/components/HeroComponent.vue";
import SmallMap from "@/components/SmallMap.vue";
import QuizLinkComponent from "@/components/QuizLinkComponent.vue";
import NumbersComponent from "@/components/NumbersComponent.vue";
</script>

<template>
  <main>
    <HeroComponent />
    <NumbersComponent :-link-show="true" />
    <QuizLinkComponent />

    <SmallMap
      title="Sauras-tu relever nos défis ?"
      text="Nous t'avons préparé une liste de défis pour vaincre ton addiction ou pour continuer tes efforts vers la réussite. À toi de jouer !    "
      img-desktop="src/assets/img/smallMap.svg"
      img-mobile="src/assets/img/smallMapMobile.svg"
    />
  </main>
</template>
