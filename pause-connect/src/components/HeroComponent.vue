<script setup>
import LinkComponent from "./LinkComponent.vue";
</script>
<template>
  <div class="hero">
    <div class="hero-container container">
      <div class="hero-image">
        <img class="hero-image_mask" src="../assets/img/hero-image.jpg" />
      </div>

      <div class="hero-content">
        <h1 class="h1-title">
          Le guide pour vaincre l’addiction aux écrans et aux réseaux sociaux
        </h1>
        <p>
          À l'ère de la connectivité constante, découvre notre guide pour vaincre l'<strong
            >addiction aux écrans et aux réseaux sociaux</strong
          >. Nous t'expliquerons cette addiction tout en te fournissant de précieux
          <strong>conseils et astuces</strong> ! Tu pourras également participer à un
          <strong>quiz</strong> mais aussi te challenger avec nos <strong>défis</strong>. À toi de
          jouer !
        </p>
        <div class="hero-buttons">
          <LinkComponent title="Es-tu addict ?" color="primary" routeLink="/notre-quiz" />
          <LinkComponent title="Relever nos défis" color="secondary" routeLink="/nos-defis" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  content: "";
  background-image: url(../assets/img/hero-background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  color: #fff;
  margin-bottom: var(--space-section);
}

.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xxxl);
}
.hero-image_mask {
  transition: transform 1s;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
  }
}

.hero-image_graphic {
}

.hero-image {
  mask-image: url(../assets/img/mask-image.svg);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 793px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  text-align: center;
}

.hero-buttons {
  display: flex;
  gap: var(--space-xl);
  margin: 0 auto;
}
</style>
