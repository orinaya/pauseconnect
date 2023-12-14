<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
  <div class="question-container">
    <div class="question-group_title">
      <h2 class="question-title">Combien d’heures passez vous chaque jour sur votre téléphone ?</h2>
      <h3>Question 1/10</h3>
    </div>

    <div class="question">
      <div @click="(answer = 1), (btnToggle = true)">
        <input id="a1" type="radio" name="answersRadio" class="answerRadio" />

        <label for="a1">
          <div class="answerImg"><img src="../../assets/img/q1_img1.svg" /></div>
          <p>0 - 2 heures</p>
        </label>
      </div>
      <div @click="(answer = 4), (btnToggle = true)">
        <input id="a2" type="radio" name="answersRadio" class="answerRadio" />

        <label for="a2">
          <div class="answerImg"><img src="../../assets/img/q1_img2.svg" /></div>
          <p>2 - 4 heures</p>
        </label>
      </div>
      <div @click="(answer = 7), (btnToggle = true)">
        <input id="a3" type="radio" name="answersRadio" class="answerRadio" />

        <label for="a3">
          <div class="answerImg"><img src="../../assets/img/q1_img3.svg" /></div>
          <p>4 - 7 heures</p>
        </label>
      </div>
      <div @click="(answer = 10), (btnToggle = true)">
        <input id="a4" type="radio" name="answersRadio" class="answerRadio" />

        <label for="a4">
          <div class="answerImg"><img src="../../assets/img/q1_img4.svg" /></div>
          <p>plus de 7 heures</p>
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
