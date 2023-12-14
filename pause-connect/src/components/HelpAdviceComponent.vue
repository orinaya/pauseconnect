<script setup>
const adivicesTab = [
  {
    title: "Favorise les moments de plaisir sans les écrans",
    text: "Sors entre amis, en famille ou même seul... Le but est que tu te crées des souvenirs. Sois spontané et vis le moment !",
  },
  {
    title: "Prends tu temps pour faire des activités qui te plaisent",
    text: "Concocte toi un planning d’utilisation de médias mais aussi d’activités",
  },
  {
    title: "Change tes habitudes ",
    text: "Change tes appareils électroniques d’endroits, connecte toi à des heures différentes chaque jour. Cela permettra de casser ta routine",
  },
  {
    title: "Évite le “multi-tasking”",
    text: "N’utilise pas ton téléphone ou ton ordinateur si tu es déjà occupée sur une tâche. Cela évitera une surcharge mentale !",
  },
  {
    title: "Fais de la prévention autour de toi”",
    text: "Ton entourage aussi est concerné par ses règles. Les adultes aussi doivent réguler leur utilisation surtout devant leurs enfants",
  },
  {
    title: "Désactive les notifications inutiles",
    text: "Tes notifications t’incitent à vérifier ton téléphone. Les désactiver te permettra de te concentrer sur autre chose.",
  },
  {
    title: "Ne restes pas seul",
    text: "Ne t’isole pas, rencontre des gens, parle avec ton entourage et n’hésite pas à leur faire part de tes inquiétudes ou de tes problèmes !",
  },
  {
    title: "Trouve des alternatives à tes émotions",
    text: "Lorsque tu ressens certaines émotions, ton attention peut se tourner vers ton téléphone. À toi de trouver des alternatives saines et déconnectées.",
  },
];
</script>
<template>
  <section id="advices">
    <p class="container">
      Voici des points sur lesquels tu peux t’améliorer mais aussi sur lesquels tu peux être
      vigilant chez toi autant que chez les autres :
    </p>
    <div>
      <div class="advice grow" v-for="advice in adivicesTab">
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
  margin-top: var(--space-xl);
  margin-bottom: var(--space-section);
  @media (max-width: 760px) {
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
  @media (max-width: 760px) {
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
