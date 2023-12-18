<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
    <div class="question-container">
        <div class="question-group_title">
            <h2 class="question-title">Tu préfères ...</h2>
            <h3>Question 9/10</h3>
        </div>
        <div class="question">
            <div @click="(answer = 1), (btnToggle = true)">
                <input id="a1" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a1">
                    <div class="answerImg"><img src="../../assets/img/friends.webp" /></div>
                    <p>Sortir avec des amis</p>
                </label>
            </div>
            <div @click="(answer = 4), (btnToggle = true)">
                <input id="a2" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a2">
                    <div class="answerImg"><img src="../../assets/img/tv.webp" /></div>
                    <p>Regarder un film seul chez toi</p>
                </label>
            </div>
            <div @click="(answer = 7), (btnToggle = true)">
                <input id="a3" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a3">
                    <div class="answerImg"><img src="../../assets/img/videogames.webp" /></div>
                    <p>Jouer aux jeux vidéos</p>
                </label>
            </div>
            <div @click="(answer = 10), (btnToggle = true)">
                <input id="a4" type="radio" name="answersRadio" class="answerRadio" />

                <label for="a4">
                    <div class="answerImg"><img src="../../assets/img/socialMedia.webp" /></div>
                    <p>Trainer sur les réseaux sociaux</p>
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

.question-group_title {
    display: flex;
    justify-content: space-between;
}
.question-title {
    text-transform: inherit;
}
.question > div {
    text-align: center;
    flex: 1;
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

label {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label > p {
    margin-top: 20px;
}
</style>
