<script setup>
import { RouterLink } from "vue-router";
import LinkComponent from "@/components/LinkComponent.vue";
</script>
<template>
  <footer>
    <div id="footer-main-links">
      <ul>
        <span>Plan du site</span>
        <li class="nav-content_footer">
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li class="nav-content_footer">
          <RouterLink to="/informations">À propos</RouterLink>
        </li>
        <li class="nav-content_footer">
          <RouterLink to="/notre-quiz">Notre quiz</RouterLink>
        </li>
        <li class="nav-content_footer">
          <RouterLink to="/nos-defis">Nos défis</RouterLink>
        </li>
        <li class="nav-content_footer">
          <RouterLink to="/aide">Obtenir de l’aide</RouterLink>
        </li>
      </ul>
      <ul id="socials">
        <span>Nous suivre</span>
        <div>
          <li>
            <a href=""><img src="../assets/icons/instagram.svg" alt="lien vers instagram" /></a>
          </li>
          <li>
            <a href=""><img src="../assets/icons/facebook.svg" alt="lien vers facebook" /></a>
          </li>
        </div>
      </ul>
      <ul>
        <span>Vous souhaitez en parler dans votre établissement ?</span>
        <li>
          <LinkComponent color="secondary" title="Contactez nous" route-link="#"></LinkComponent>
        </li>
      </ul>
    </div>
    <div id="footer-legal-links">
      <a href="">Politique de confidentialité</a>
      <span>-</span>
      <a href="">Mentions légales</a>
    </div>
  </footer>
</template>
<style scoped>
footer {
  padding: 40px 0 0 0;
  width: 100%;
  background-color: hsl(206, 66%, 10%);
  color: white;
}

footer #footer-main-links a:not(.btn) {
  color: white;
}

footer li {
  list-style: none;
  margin-bottom: 16px;
}

footer #footer-main-links {
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    flex-direction: column;
  }
}

footer #footer-main-links span {
  font-weight: bold;
  color: var(--citrus);
  margin-bottom: 20px;
  display: block;
}

footer #footer-legal-links {
  background-color: #99d98c;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 42px;
  color: black;
}

footer #footer-legal-links a {
  &:hover {
    text-decoration: underline;
  }
}

#socials > div {
  display: flex;
  gap: 20px;
}

.nav-content_footer {
  padding: 4px 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--citrus);
    text-decoration-thickness: 3px;
  }
}
</style>
