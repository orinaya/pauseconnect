<script setup>
import BannerComponent from "../components/BannerComponent.vue";
const previousPages = [
    {
        path: "/",
        name: "Accueil",
    },
];

const item = {
    title: "Qu’est-ce que l’addiction aux écrans et aux réseaux sociaux ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enimeget, pellentesque vestibulum massa.",
};

import image from "../assets/img/infos-banner.png";
import SignComponent from "@/components/SignComponent.vue";
import AddictionsComponent from "@/components/AddictionsComponent.vue";
import SourcesComponent from "@/components/SourcesComponent.vue";
import PeopleComponent from "@/components/PeopleComponent.vue";
import ConsequencesComponent from "@/components/ConsequencesComponent.vue";
import NumbersComponent from "@/components/NumbersComponent.vue";
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
    <SourcesComponent />
</template>
