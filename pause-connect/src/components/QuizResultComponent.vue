<script setup>
import { ref } from "vue";

const results = defineProps({
    points: {
        type: Number,
    },
    color: {
        type: String,
    },
});

var tab = ref({ color: null, text: null });

function yes() {
    if (results.points < 30) {
        tab.value.text =
            "Vous utilisez rarement les réseaux sociaux ou votre téléphone. Aucun souci à craindre";
        tab.value.color = "green";
    } else if (results.points >= 30 && results.points < 70) {
        tab.value.text =
            "Ils vous arrive de passer pas mal de temps sur les réseaux ou sur un écran. Parfois cela à des conséquences sur votre someil ou votre mental. Nous vous conseillons de vous éloignez des écrans de temps en temps. Aucune pression cependant ";

        tab.value.color = "yellow";
    } else {
        tab.value.text =
            "Votre consommation d'écran et des réseaux sociaux est trop importante et est néfaste pour votre santé. De simples défis et effors journaliers vous aidront à alméliorer votre vie tout en gardant vos passe-temps ";
        tab.value.color = "red";
    }
}

yes();
</script>
<template>
    <h2>Voici tes résultats :</h2>
    <div>
        <h3 :class="tab.color">{{ results.points }}</h3>
        <p>{{ tab.text }}</p>
    </div>
</template>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
}

h3 {
    font-size: var(--h1);
    animation: anim 1s ease-in-out forwards;
}

.green {
    color: var(--mint);
}

.yellow {
    color: rgb(250, 201, 65);
}

.red {
    color: #e97c7c;
}

p {
    width: 50%;
    min-width: 200px;
}

@keyframes anim {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}
</style>
