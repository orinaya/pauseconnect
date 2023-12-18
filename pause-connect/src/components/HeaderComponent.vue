<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { ref } from "vue";

var menu = [
    {
        name: "Accueil",
        link: "/",
        color: "white",
    },
    {
        name: "Informations",
        link: "/informations",
        color: "white",
    },
    {
        name: "Notre quiz",
        link: "/notre-quiz",
        color: "white",
    },
    {
        name: "Nos défis",
        link: "/nos-defis",
        color: "white",
    },
    {
        name: "Sortir de l'addiction",
        link: "/aide",
        color: "citrus",
    },
];

const isMenuOpen = ref(false);

const setOpennedMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const getIconUrl = (image) => {
    return new URL(`../assets/icons/${image}`, import.meta.url).href;
};

const burger = "icon-burger.svg";
const close = "icon-close-white.svg";
</script>

<template>
    <nav>
        <div class="nav-container container">
            <RouterLink to="/"><img src="../assets/img/logo-pause-connect.svg" /></RouterLink>
            <ul :class="isMenuOpen ? 'nav-content' : 'openned'">
                <li class="nav-content_link" v-for="(item, index) in menu" :key="index">
                    <RouterLink :to="item.link" :class="item.color">{{ item.name }}</RouterLink>
                </li>
            </ul>

            <ButtonComponent
                color="transparent"
                :iconAfter="getIconUrl(isMenuOpen ? close : burger)"
                @click="setOpennedMenu"
                class="nav-button"
            />
        </div>
    </nav>
</template>

<style>
nav {
    background-color: var(--indigo-100);
    position: sticky;
    top: 0;
    z-index: 2;
}

.nav-container {
    height: 60px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
}

.nav-content {
    display: none;

    @media (max-width: 980px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: var(--indigo-100);
        top: 0;
        margin: 0 auto;
        width: 100%;
        left: 0;
        padding: 100px 0;
    }
}

.openned {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-xxl);
    text-transform: uppercase;
    font-size: var(--font-base);
    font-weight: 600;

    @media (max-width: 980px) {
        display: none;
    }
}

.nav-button {
    display: none !important;
    @media (max-width: 980px) {
        display: block !important;
    }
}
.nav-content_link {
    &:after {
        display: block;
        content: "";
        border-bottom: solid 4px var(--citrus-500);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        border-radius: 5rem;
    }

    &:hover::after,
    &:focus {
        transform: scaleX(1);
    }

    &:hover {
        color: var(--citrus-500);
    }
}
.citrus {
    color: var(--citrus-500);
}

.white {
    color: #fff;
}
</style>
