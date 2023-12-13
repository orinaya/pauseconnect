<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import image from "../assets/img/help-banner.png";

import AdviceComponent from "@/components/HelpAdviceComponent.vue";
const previousPages = [
    {
        path: "/",
        name: "Accueil",
    },
];

const item = {
    title: "Comment sortir de cette addiction ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enimeget, pellentesque vestibulum massa.",
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
    <AdviceComponent />
</template>
