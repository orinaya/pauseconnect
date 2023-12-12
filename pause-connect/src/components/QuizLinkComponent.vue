<script setup>
import LinkComponent from "./LinkComponent.vue";
</script>
<template>
  <div class="quiz-link">
    <div class="container quiz-link_container">
      <div class="quiz-link_content">
        <div class="qc-text">
          <h2>Penses-tu être addict ?</h2>
          <p>
            Testez votre relation avec les écrans et les réseaux sociaux en faisant notre quiz.
            C'est le moment de prendre conscience et de trouver le bon équilibre. Êtes-vous prêt
            pour le challenge ? Commencez maintenant.
          </p>
        </div>
        <LinkComponent title="Répondre au quiz" color="primary" routeLink="/notre-quiz" />
      </div>
      <img src="../assets/img/quiz-link.svg" />
    </div>
  </div>
</template>

<style scoped>
.quiz-link {
  color: white;
}
.quiz-link_container {
  display: flex;
  justify-content: space-around;
  background-color: var(--indigo-200);
  height: max-content;
  width: 100%;
}

.quiz-link_content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
}

h2 {
  color: #fff;
}
</style>
