<script setup>
import LinkComponent from "./LinkComponent.vue";

defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <div class="quiz-link container">
    <div class="container quiz-link_container">
      <div class="quiz-link_content">
        <div class="qc-text">
          <h2>{{ title }}</h2>
          <p>
            {{ text }}
          </p>
        </div>
        <div class="infos-link_buttons">
          <LinkComponent title="Répondre au quiz" color="primary" routeLink="/notre-quiz" />
          <LinkComponent title="Réaliser nos défis" color="secondary" routeLink="/nos-defis" />
        </div>
      </div>
      <img class="quiz-link_image" src="../assets/img/quiz-link.svg" />
    </div>
  </div>
</template>

<style scoped>
.infos-link_buttons {
  display: flex;
  gap: 40px;
}
.quiz-link {
  color: white;
  margin-bottom: var(--space-section);
}
.quiz-link_container {
  display: flex;
  justify-content: space-around;
  background-color: var(--indigo-200);
  height: max-content;
  width: 100%;
  border-radius: 4px;

  @media (max-width: 980px) {
    width: auto;
    padding: 20px;
  }
  @media (max-width: 760px) {
    width: 100%;
    gap: 40px;
    flex-direction: column-reverse;
    gap: 20px;
  }
}

.quiz-link_content {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: 760px) {
    width: 100%;
    gap: 40px;
  }
}

.quiz-link_image {
  @media (max-width: 760px) {
    width: 60%;
  }
}
h2 {
  color: #fff;
}
</style>
