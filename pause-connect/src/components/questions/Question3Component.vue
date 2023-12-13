<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
    <div class="question-container">
        <h2>Utilisation juste avant de dormir et/ou utilisation juste après le réveil</h2>
        <div class="question">
            <div @click="(answer = 4), (btnToggle = true)">
                <input id="a2" type="radio" name="answersRadio" class="answerRadio" />
                <label for="a2">
                    <div class="answerImg"><img src="../../assets/img/sunrise.png" /></div>
                    <p>Au réveil</p>
                </label>
            </div>
            <div @click="(answer = 4), (btnToggle = true)">
                <input id="a3" type="radio" name="answersRadio" class="answerRadio" />
                <label for="a3">
                    <div class="answerImg"><img src="../../assets/img/night.png" /></div>
                    <p>Au couché</p>
                </label>
            </div>
            <div @click="(answer = 10), (btnToggle = true)">
                <input id="a4" type="radio" name="answersRadio" class="answerRadio" />
                <label for="a4">
                    <div class="answerImg"><img src="../../assets/img/bothSun.png" /></div>
                    <p>Les deux</p>
                </label>
            </div>
        </div>
        <ButtonComponent
            @click="$emit('nextQuestion', answer)"
            class="questionBtn"
            :class="{ active: btnToggle == false }"
            color="primary"
            title="Valider ma réponse"
        />
    </div>
</template>
<style scoped>
.question {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10%;
}

.question > div {
    text-align: center;
}

.answerImg {
    background-color: var(--indigo-900);
    border: 3px var(--indigo-500) solid;
    height: 150px;
    display: flex;
    justify-content: center;
    border-radius: 2px;
    aspect-ratio: 1;
    &:hover {
        border-color: var(--indigo-200);
        cursor: pointer;
    }

    @media (max-width: 767px) {
        height: 100px;
    }
}

.answerImg img {
    height: 100%;
    display: block;
}

label > p {
    margin-top: 20px;
}
</style>
