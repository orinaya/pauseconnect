<script setup>
const adivicesTab = [
    {
        title: "Favorise les moments de plaisir sans les écrans",
        text: "Sors entre amis, en famille ou même seul... Le but est que tu te crées des souvenirs. Sois spontané et vis le moment !",
    },
    {
        title: "Ne restes pas seul",
        text: "Demande de l’aide si tu ne sais pas comment faire, à un ami, à un adulte, à un enseignant, à un professionnel de la santé",
    },
    {
        title: "Change tes habitudes ",
        text: "Change tes appareils électroniques d’endroits, connecte toi à des heures différentes chaque jour. Cela permettra de casser ta routine",
    },
    {
        title: "Prends tu temps pour faire des activités qui te plaisent",
        text: "Concocte toi un planning d’utilisation de médias mais aussi d’activités",
    },
    {
        title: "Évite le “multi-tasking”",
        text: "N’utilise pas ton téléphone ou ton ordinateur si tu es déjà occupée sur une tâche. Cela évitera une surcharge mentale !",
    },
    {
        title: "Fais de la prévention autour de toi",
        text: "Ton entourage aussi est concerné par ses règles. Les adultes aussi doivent réguler leur utilisation surtout devant leurs enfants",
    },
    {
        title: "Répare ton sommeil",
        text: "Éteins ton téléphone au moins 1h avant te dormir",
    },
    {
        title: "Ne restes pas seul",
        text: "Tu peux mettre une alarme pour t’arrêter, elle te permettra aussi de prendre conscience du temps passé sur les écrans",
    },
];
</script>
<template>
    <section id="advices">
        <h2>1ère étape : La prévention</h2>
        <p>
            Voici des points sur lesquels tu peux t’améliorer mais aussi sur lesquels tu peux être
            vigilant chez toi autant que chez les autres :
        </p>
        <div>
            <div class="advice" v-for="advice in adivicesTab">
                <div>
                    <h3>{{ advice.title }}</h3>
                    <p>{{ advice.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
#advices {
    max-width: 1280px;
    margin: auto;
    @media (max-width: 767px) {
        margin-inline: 30px;
    }
}

#advices > div {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 40px;
    padding-inline: 7%;
    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
        padding-inline: 0;
    }
}
.advice {
    background-color: hsl(206, 66%, 90%);
    display: flex;
    gap: 0.8rem;
    padding: 20px;
    border-radius: 4px;
}

.advice::before {
    content: url(../assets/icons/tickMark.svg);
    display: block;
    width: 34px;
    height: 34px;
}

h3 {
    font-size: var(--p-text);
}
</style>
