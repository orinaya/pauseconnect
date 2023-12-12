<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
import EscapeBlock from "@/components/EscapeBlock.vue";
</script>

<template>
    <RouterView />
    <EscapeBlock
        title="Comment sortir de l’addiction ?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enim eget, pellentesque vestibulum massa."
        img="src/assets/img/addiction-img.png"
    />
    <Footer />
</template>

<style scoped></style>
