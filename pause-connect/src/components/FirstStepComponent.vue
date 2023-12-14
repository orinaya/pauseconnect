<script setup>
import LinkComponent from "./LinkComponent.vue";
</script>
<template>
  <div class="container first-step_container">
    <div class="first-step_content">
      <p>
        Avancer c’est reconnaître ses points faibles. Avoir conscience de son addiction, c’est une
        porte vers l’amélioration. Tu es la première personne que tu dois convaincre. Si tu n’es pas
        sûr ou si tu veux te conforter dans ton idée, je te laisse faire notre quiz. Si ton résultat
        t’annonces une dépendance ou presque, tu es le bienvenu dans notre guide où tu trouveras de
        nombreux conseils pour t’aider et te guider !
      </p>
      <LinkComponent title="Répondre au quiz" color="primary" to="/notre-quiz" />
    </div>
    <img src="../assets/img/auto-evaluation.png" />
  </div>
</template>
<style scoped>
.first-step_container {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl);

  @media (max-width: 760px) {
    flex-direction: column;
  }
}

.first-step_content {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 60%;

  @media (max-width: 760px) {
    width: 100%;
  }
}
</style>
