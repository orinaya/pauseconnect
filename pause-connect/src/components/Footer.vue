<script setup>
import { RouterLink } from "vue-router";
import LinkComponent from "@/components/LinkComponent.vue";
</script>
<template>
    <footer>
        <div id="footer-main-links">
            <ul>
                <span>Plan du site</span>
                <li><RouterLink to="">Accueil</RouterLink></li>
                <li><RouterLink to="">À propos</RouterLink></li>
                <li><RouterLink to="">Notre quiz</RouterLink></li>
                <li><RouterLink to="">Nos défis</RouterLink></li>
                <li><RouterLink to="">Obtenir de l’aide</RouterLink></li>
            </ul>
            <ul id="socials">
                <span>Nous suivre</span>
                <div>
                    <li>
                        <a href=""
                            ><img src="../assets/icons/instagram.svg" alt="lien vers instagram"
                        /></a>
                    </li>
                    <li>
                        <a href=""
                            ><img src="../assets/icons/facebook.svg" alt="lien vers facebook"
                        /></a>
                    </li>
                </div>
            </ul>
            <ul>
                <span>Vous souhaitez en parler dans votre établissement ?</span>
                <li>
                    <LinkComponent
                        color="secondary"
                        title="Contactez nous"
                        route-link="#"
                    ></LinkComponent>
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

#socials > div {
    display: flex;
    gap: 20px;
}
</style>
