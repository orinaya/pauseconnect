<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
    <div class="question-container">
        <h2>
            Est-ce que tu décales ton sommeil pour être sur ton téléphone, sur les réseaux sociaux ?
        </h2>
        <div class="question">
            <div @click="(answer = 10), (btnToggle = true)">
                <input id="a1" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a1"> Oui </label>
            </div>
            <div @click="(answer = 0), (btnToggle = true)">
                <input id="a2" type="radio" name="answersRadio" class="answerRadioVisible" />

                <label for="a2"> Non </label>
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

.question > div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 8px 15px;
    border-radius: 2px;
    margin-bottom: 20px;
    font-size: var(--h3);
}

.question > div:first-child {
    background-color: var(--indigo);
    color: var(--indigo-900);
}

.question > div:last-child {
    background-color: var(--indigo-900);
    color: var(--indigo);
}

.answerRadioVisible {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0;
}

@media (min-width: 1000px) {
    .question-container {
        background: url(../../assets/img/Phone in bed.svg) no-repeat;
        background-position: center right 20%;
        background-size: auto 80%;
    }
}
</style>
