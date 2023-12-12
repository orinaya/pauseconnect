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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus tellus,
          lacinia non tellus at, convallis laoreet felis. Fusce est lorem, scelerisque vel enim
          eget, pellentesque vestibulum massa. Je veux laisser du maxi gros prout de feur
        </p>
        <div class="hero-buttons">
          <LinkComponent title="Répondre au quiz" color="primary" routeLink="/notre-quiz" />
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
    transform: scale(1.06);
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
