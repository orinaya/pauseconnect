<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ref } from "vue";
var answer = ref(0);
var btnToggle = ref(false);
</script>
<template>
  <div class="question-container">
    <div class="question-group_title">
      <h2 class="question-title">
        T’arrive-t-il de te sentir mal en comparant ta vie à celle des autres sur les réseaux
        sociaux ?
      </h2>
      <h3>Question 6/10</h3>
    </div>
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

.question-group_title {
  display: flex;
  justify-content: space-between;
}
.question-title {
  text-transform: inherit;
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
</style>
