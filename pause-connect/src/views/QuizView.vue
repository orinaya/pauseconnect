<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import Question1 from "@/components/questions/Question1Component.vue";
import { ref } from "vue";
const previousPages = [
    {
        path: "/",
        name: "Accueil",
    },
];
const item = {
    title: "Quiz : Es-tu addict aux écrans et aux réseaux sociaux ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus, lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enimeget, pellentesque vestibulum massa.",
};

import image from "../assets/img/challenge-banner.png";

var questionIndex = ref(1);
var response = ref(0);

function addIndex(points) {
    questionIndex.value++;
    response = response + points;
}
</script>

<template>
    <pre>Points: {{ response }} Index:{{ questionIndex }}</pre>
    <section id="quiz-questions">
        <Question1 v-if="questionIndex == 1" v-on:nextQuestion="addIndex" />
    </section>
</template>
<style>
#quiz-questions {
    height: 65vh;
    min-height: fit-content;
    max-width: 1280px;
    box-shadow: 0px 4px 22.1px 0px rgba(0, 0, 0, 0.25);
    margin: 80px auto;
    border-radius: 4px;
    padding: 30px;
    box-sizing: border-box;
}

.question-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.questionBtn {
    align-self: end;
}

/* .answerRadio {
    display: none;
}

.answerRadio:checked ~ label {
    border: 6px solid black;
} */
</style>
