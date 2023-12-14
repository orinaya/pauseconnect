<script setup>
import LinkComponent from "./LinkComponent.vue";
</script>
<template>
  <div class="challenge-link container">
    <div class="container challenge-link_container">
      <div class="challenge-link_content">
        <div class="qc-text">
          <h2>Tu peux aussi te challenger avec nos défis !</h2>
          <p>Si tu penses être prêt, à toi de jouer !</p>
        </div>
        <LinkComponent title="Faire nos défis" color="primary-indigo" routeLink="/nos défis" />
      </div>
      <img class="challenge-link_image" src="../assets/img/challenge-banner.png" />
    </div>
  </div>
</template>

<style scoped>
.challenge-link {
  margin-bottom: var(--space-section);
}
.challenge-link_container {
  display: flex;
  justify-content: space-around;
  background-color: var(--citrus-800);
  height: max-content;
  width: auto;
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 980px) {
    width: auto;
    padding: 20px;
  }
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
}

.challenge-link_content {
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

.challenge-link_image {
  @media (max-width: 760px) {
    width: 60%;
  }
}
h2 {
  color: var(--indigo);
}
</style>
