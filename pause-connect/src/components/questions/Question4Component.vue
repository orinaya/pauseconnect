<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
    <div class="question-container">
        <h2>Que manges-tu pendant tes activités numériques ?</h2>
        <div class="question">
            <div @click="(answer = 5), (btnToggle = true)">
                <input id="a1" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a1">
                    <div class="answerImg"><img src="../../assets/img/sweets.svg" /></div>
                    <div>
                        <h3>Bonbons, chocolat, gâteaux...</h3>
                        <p>Tout aliment particulièrement sucré</p>
                    </div>
                </label>
            </div>
            <div @click="(answer = 5), (btnToggle = true)">
                <input id="a2" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a2">
                    <div class="answerImg"><img src="../../assets/img/sandwich.svg" /></div>
                    <div>
                        <h3>Chips, sandwich...</h3>
                        <p>Aliments salés ou de snacking</p>
                    </div>
                </label>
            </div>
            <div @click="(answer = 0), (btnToggle = true)">
                <input id="a3" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a3">
                    <div class="answerImg"><img src="../../assets/icons/redX.svg" /></div>
                    <div>
                        <h3>Rien je n’ai pas faim.</h3>
                        <p>Tout aliment composé de vide</p>
                    </div>
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
label {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.question {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 10%;
}

/* .question > div {
    text-align: center;
} */

.answerImg {
    background-color: var(--indigo-900);
    border: 3px var(--indigo-500) solid;
    height: 100px;
    width: 100px;
    padding: 10px;

    display: flex;
    justify-content: center;
    border-radius: 2px;
    &:hover {
        border-color: var(--indigo-200);
        cursor: pointer;
    }

    @media (max-width: 767px) {
        height: 50px;
        width: 50px;
    }
}

.answerImg img {
    height: auto;
    width: 100%;
    display: block;
}

label p {
    margin-top: 20px;
}
</style>
