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
      "Tu utilises rarement les réseaux sociaux ou ton téléphone. Rien à craindre, il y a peu de chances que tu sois addict mais tu peux toujours aller tester nos défis. Un jeu d'enfant pour toi.";
    tab.value.color = "green";
  } else if (results.points >= 30 && results.points < 70) {
    tab.value.text =
      "Il t'arrive de passer pas mal de temps sur les réseaux sociaux ou sur un écran. Parfois cela à des conséquences sur ton sommeil ou ton mental. Nous te conseillons de t'éloigner des écrans de temps en temps. Aucune pression cependant. Tu peux aller tester nos défis afin de t'améliorer ! ";

    tab.value.color = "yellow";
  } else {
    tab.value.text =
      "Ta consommation d'écran et des réseaux sociaux est trop importante. Elle est néfaste pour ta santé et ton bien-être. De simples défis et efforts journaliers t'aideront à améliorer ton quotidien tout en gardant tes passe-temps. Nous t'invitons vivement à relever nos défis mais aussi à consulter nos conseils et nos suggestions !";
    tab.value.color = "red";
  }
}

yes();
</script>
<template>
  <h2>Voici tes résultats :</h2>
  <div>
    <img src="../assets/img/bravo.gif" v-if="results.points < 30" />
    <img src="../assets/img/improve.gif" v-if="results.points >= 30 && results.points < 70" />
    <img src="../assets/img/warning.gif" v-if="results.points >= 70" />
    <h3 :class="tab.color">{{ results.points }} / 100</h3>
    <p class="quiz-result_text">{{ tab.text }}</p>
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
  color: var(--mint-600);
}

.quiz-result_text {
  text-align: center;
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
