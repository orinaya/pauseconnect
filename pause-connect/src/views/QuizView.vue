<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import Question1 from "@/components/questions/Question1Component.vue";
import Question2 from "@/components/questions/Question2Component.vue";
import Question3 from "@/components/questions/Question3Component.vue";
import Question4 from "@/components/questions/Question4Component.vue";
import Question5 from "@/components/questions/Question5Component.vue";
import Question6 from "@/components/questions/Question6Component.vue";
import Question7 from "@/components/questions/Question7Component.vue";
import Question8 from "@/components/questions/Question8Component.vue";
import Question9 from "@/components/questions/Question9Component.vue";
import Question10 from "@/components/questions/Question10Component.vue";
import Results from "@/components/QuizResultComponent.vue";
import { computed, ref } from "vue";
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
var resultTab = ref({ color: "yes", text: null });

function addIndex(points) {
    questionIndex.value++;
    response.value = response.value + points;
}

function calcResult() {
    if (response <= 30) {
        resultTab.value.color = "green";
    } else if (response > 30 && response < 70) {
        resultTab.value.color = "yellow";
    } else if (response > 70) {
        resultTab.value.color = "red";
    }
}
</script>

<template>
    <section id="quiz-questions">
        <Question1 v-if="questionIndex == 1" v-on:nextQuestion="addIndex" />
        <Question2 v-if="questionIndex == 2" v-on:nextQuestion="addIndex" />
        <Question3 v-if="questionIndex == 3" v-on:nextQuestion="addIndex" />
        <Question7 v-if="questionIndex == 4" v-on:nextQuestion="addIndex" />
        <Question4 v-if="questionIndex == 5" v-on:nextQuestion="addIndex" />
        <Question5 v-if="questionIndex == 6" v-on:nextQuestion="addIndex" />
        <Question6 v-if="questionIndex == 7" v-on:nextQuestion="addIndex" />
        <Question8 v-if="questionIndex == 8" v-on:nextQuestion="addIndex" />
        <Question9 v-if="questionIndex == 9" v-on:nextQuestion="addIndex" />
        <Question10 v-if="questionIndex == 10" v-on:nextQuestion="addIndex" />
        <Results
            v-if="questionIndex == 11"
            :points="response"
            :color="resultTab.color"
            :text="resultTab.text"
        />
    </section>
</template>
<style>
@media (min-width: 1000px) {
    #quiz-questions h2 {
        font-size: 26px;
    }
}

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

.answerRadio {
    display: none;
}

.answerRadio:checked ~ label .answerImg {
    border-color: var(--indigo-200);

    animation: bloup 250ms ease-in-out forwards;
}

@keyframes bloup {
    75% {
        transform: scale(1.15);
    }
    to {
        transform: scale(1.1);
    }
}

.active {
    opacity: 0;
}
</style>
