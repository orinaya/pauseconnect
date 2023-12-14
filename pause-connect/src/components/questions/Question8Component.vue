<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
    <div class="question-container">
        <h2>Combien de temps penses-tu être capable de te passer de ton téléphone et/ou ordi</h2>
        <div class="question">
            <div @click="(answer = 9), (btnToggle = true)">
                <input id="a1" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a1">Impossible !</label>
            </div>
            <div @click="(answer = 7), (btnToggle = true)">
                <input id="a2" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a2"> 12 heures </label>
            </div>
            <div @click="(answer = 5), (btnToggle = true)">
                <input id="a3" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a3"> 1 jour </label>
            </div>
            <div @click="(answer = 3), (btnToggle = true)">
                <input id="a4" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a4"> 1 week-end </label>
            </div>
            <div @click="(answer = 1), (btnToggle = true)">
                <input id="a5" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a5"> 1 semaine </label>
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
label {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.question {
    display: grid;
    grid-auto-columns: max-content;
}

.question > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 15px;
    border-radius: 2px;
    margin-bottom: 20px;
    font-size: var(--h3);
}

.question > div:last-child {
    background-color: var(--indigo-900);
    color: var(--indigo);
}
.question > div:nth-child(4) {
    background-color: var(--indigo-700);
    color: var(--indigo);
}
.question > div:nth-child(3) {
    background-color: var(--indigo-500);
    color: var(--indigo-900);
}
.question > div:nth-child(2) {
    background-color: var(--indigo-300);
    color: var(--indigo-900);
}

.question > div:first-child {
    background-color: var(--indigo-100);
    color: var(--indigo-900);
}

.answerRadioVisible {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0;
}

@media (min-width: 1000px) {
    .question {
        background: url(../../assets/img/noPhone.svg) no-repeat;
        background-position: center right 20%;
    }
}
</style>
