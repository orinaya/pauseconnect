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
            text="Nous vous avons préparé une liste de défis pour vaincre votre addiction ou pour continuer vos efforts vers votre réussite.    "
            img-desktop="src/assets/img/smallMap.svg"
            img-mobile="src/assets/img/smallMapMobile.svg"
        />
    </main>
</template>
