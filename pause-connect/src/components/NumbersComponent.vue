<script setup>
import LinkComponent from "./LinkComponent.vue";
defineProps({
    LinkShow: {
        type: Boolean,
    },
});
</script>
<template>
    <section id="numbers-section">
        <h2>Quelques chiffres pour commencer</h2>
        <div id="numbers-container">
            <div>
                <img src="../assets/img/sign-2.png" alt="" />
                <div>
                    <span>86%</span>
                    <p>des adolescents vont sur leur téléphones au réveil</p>
                </div>
            </div>
            <div>
                <img src="../assets/img/sign-1.png" alt="" />
                <div>
                    <span>83%</span>

                    <p>des 13-17 ans passent des heures devant un écran à binge-watcher</p>
                </div>
            </div>
            <div>
                <img src="../assets/img/chips.svg" alt="" />
                <div>
                    <span>24%</span>
                    <p>
                        consomment plus de snacks et confiseries pendant leurs activités numériques
                    </p>
                </div>
            </div>
            <div>
                <img src="../assets/img/sign-5.png" alt="" />
                <div>
                    <span>56%</span>

                    <p>ne peuvent pas vivre une journée sans téléphone</p>
                </div>
            </div>
        </div>
        <div class="link-center">
            <LinkComponent
                v-if="LinkShow == true"
                title="En savoir plus"
                routeLink="/informations"
                color="primary"
            />
        </div>
    </section>
</template>
<style scoped>
#numbers-section {
    max-width: 1280px;
    margin: auto;
    margin-bottom: 80px;
}

h2 {
    margin-bottom: 40px;
}
.link-center {
    display: flex;
    justify-content: center;
}
#numbers-container {
    position: relative;
    background: url(../assets/img/phone-lines.svg) no-repeat;
    background-position: center;
    background-size: 540px 370px;
    min-height: 600px;
    @media (max-width: 1300px) {
        background-size: 38%;
    }
}

#numbers-container > div span {
    font-size: var(--h1);
    font-family: var(--font-title);
    font-weight: var(--fw-700);
    display: block;
}

#numbers-container > div {
    position: absolute;
    display: flex;
    @media (max-width: 1000px) {
        position: static;
    }
}

#numbers-container > div:nth-child(2n) {
    flex-direction: row-reverse;
}

/* individuels */

#numbers-container > div:first-child {
    top: 50px;
    left: 50px;
}

#numbers-container > div:first-child > div {
    max-width: 250px;
    position: relative;
    left: -20px;
    top: 30px;
}

#numbers-container > div:nth-child(2) {
    top: 50px;
    right: 0px;
}

#numbers-container > div:nth-child(2) > div {
    max-width: 185px;
}

#numbers-container > div:nth-child(3) {
    bottom: 50px;
    left: 0;
    flex-direction: column;
    align-items: center;
}

#numbers-container > div:nth-child(3) img {
    max-width: 175px;
    position: relative;
    left: 30px;
    bottom: -30px;
}

#numbers-container > div:nth-child(3) > div {
    max-width: 350px;
}

#numbers-container > div:last-child {
    bottom: 50px;
    right: 0;
}

#numbers-container > div:last-child > div {
    max-width: 250px;
    position: relative;
    left: 10%;
    top: 43px;
}

@media (max-width: 1000px) {
    #numbers-container {
        background: none;

        min-height: fit-content;
        padding: 10px;
    }

    #numbers-container > div span {
        font-size: var(--h1);
        font-family: var(--font-title);
        font-weight: var(--fw-700);
        display: block;
    }

    #numbers-container > div {
        position: static;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        gap: 10px;
        background-color: var(--citrus-950);
        margin-bottom: 20px;
        border-radius: 4px;
    }
    #numbers-container > div:nth-child(2n) {
        background-color: var(--mint);
    }

    #numbers-container > div img {
        max-height: 100px;
    }

    #numbers-container > div:last-child > div,
    #numbers-container > div:nth-child(3) > img,
    #numbers-container > div:first-child > div {
        position: static;
    }

    #numbers-container > div:last-child > div,
    #numbers-container > div:nth-child(3) > div,
    #numbers-container > div:nth-child(2) > div,
    #numbers-container > div:first-child > div {
        max-width: none;
    }

    #numbers-container > div:nth-child(3) {
        flex-direction: row;
    }
}
</style>
