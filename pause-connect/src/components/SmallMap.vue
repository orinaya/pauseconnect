<script setup>
import LinkComponent from "./LinkComponent.vue";

const mapSection = defineProps({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    imgDesktop: {
        type: String,
    },
    imgMobile: {
        type: String,
    },
});
</script>
<template>
    <section>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <div id="map-content">
            <img :src="imgDesktop" alt="title" />
            <img :src="imgMobile" alt="title" />
            <LinkComponent title="Relever les défis" color="primary" route-link="/nos-defis" />
        </div>
    </section>
</template>
<style scoped>
section {
    max-width: 1280px;
    margin: auto;
    margin-bottom: 80px;
}

section #map-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    @media (max-width: 900px) {
        padding: 0 10px;
    }
}

section #map-content img {
    width: 100%;
    max-width: 970px;
    display: block;
    margin-top: 3rem;

    &:first-child {
        display: block;
        @media (max-width: 900px) {
            display: none;
        }
    }
    &:nth-child(2) {
        display: none;
        @media (max-width: 900px) {
            display: block;
        }
    }
}
</style>
