<script setup>
var items = [
  {
    title: "Limite de temps quotidienne",
    goal: "Réduire le temps quotidien passé devant les écrans de X heures à Y heures",
    example:
      "Je m'engage à limiter mon temps d'écran à 2 heures par jour pendant les jours de semaine",
    image: "challenge-1.png",
  },
  {
    title: "Plan de déconnexion",
    goal: "Élaborer un plan de déconnexion pour les moments clés de la journée",
    example:
      "Je vais créer un plan de déconnexion pour les repas en famille, en laissant mon téléphone dans une autre pièce pour éviter les distractions",
    image: "sign-5.png",
  },
  {
    title: "Réparation dU sommeil",
    goal: "Améliorer la qualité du sommeil en réduisant l'utilisation des écrans avant le coucher",
    example:
      "Je vais éviter l'utilisation d'écrans au moins une heure avant d'aller me coucher pendant les 30 prochains jours",
    image: "sign-2.png",
  },
  {
    title: "Gestion des notifications",
    goal: "Réduire les interruptions en gérant les notifications de manière plus efficace",
    example:
      "Je vais désactiver les notifications non essentielles sur mon téléphone et ne les vérifier que pendant des moments spécifiques de la journée",
    image: "challenge-2.png",
  },
  {
    title: "Habitudes hors-ligne",
    goal: "Remplacer les habitudes sur les écrans et les réseaux par des habitudes hors-ligne",
    example:
      "Je vais explorer la méditation ou la cuisine pour remplacer une partie du temps que je passais devant les écrans",
    image: "challenge-3.png",
  },
  {
    title: "Création d’espaces free-screen",
    goal: "Définir des espaces de chez soi sans écrans",
    example:
      "Je décide que ma chambre est une zone sans écrans et laisser les appareils électroniques hors de la chambre",
    image: "challenge-5.png",
  },
  {
    title: "Participation à des activités",
    goal: "Participer à des activités avec son entourage ou même seul, en extérieur",
    example:
      "Je vais planifier une sortie hebdomadaire avec des amis ou la famille sans utiliser d'appareils électroniques",
    image: "challenge-4.png",
  },
  {
    title: "Pratique d’activités sportives",
    goal: "Intégrez des activités physiques dans la journée pour prendre soin de soi et son bien-être",
    example:
      "Je m'engage à consacrer au moins deux à trois sessions d'activité sportive par semaine.",
    image: "challenge-4.png",
  },
  {
    title: "Mesurer ses progrès",
    goal: "Établir des critères de mesure pour évaluer les progrès réalisés",
    example:
      "Je vais suivre mon temps d'écran quotidien et noter mes émotions et niveaux de stress pour évaluer l'impact des changements que je mets en place",
    image: "challenge-4.png",
  },
];

const getImageUrl = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
<template>
  <section id="third-step" class="container">
    <p class="third-step_text">
      Si la prévention est insuffisante ou si tu es déjà addict, fixe toi des objectifs spécifiques,
      mesurables, atteignables, réalistes et potentiellement temporels . Si les objectifs te
      paraissent trop brutaux, tu peux essayer nos défis, le tout progressivement. Sinon, voici
      quelques objectifs que tu peux te fixer. Libre à toi d’en choisir l’ordre et l’exécution !
    </p>
    <div class="third-step_content">
      <div v-for="(item, index) in items" :key="index" class="challenge-card grow" :id="item.id">
        <div class="challenge-content">
          <div>
            <h3 class="challenge-card_title">{{ item.title }}</h3>
          </div>
          <div>
            <b class="challenge-card_subtitle indigo">Objectif</b>
            <p>{{ item.goal }}</p>
          </div>
          <div class="challenge-card_example">
            <b class="challenge-card_subtitle citrus-text"> Astuce</b>
            <p>{{ item.example }}</p>
          </div>
        </div>
        <div class="challenge-image">
          <img :src="getImageUrl(item.image)" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#third-step {
  margin-bottom: var(--space-section);
}
.third-step_text {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.third-step_content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
}
.challenge-card {
  background-color: #fff;
  box-shadow: 0px 3px 9.7px rgba(0, 0, 0, 0.17);
  width: 46%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-radius: 4px;

  @media (max-width: 760px) {
    width: auto;
    flex-direction: column-reverse;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 760px) and (max-width: 980px) {
    width: auto;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    border-radius: 4px;
  }
}

.challenge-card_title {
  color: var(--indigo);
  font-weight: 800;
  font-family: "Teko";
  font-size: 24px;
}

.challenge-content {
  width: 51%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (min-width: 760px) and (max-width: 980px) {
    width: 100%;
  }
}

.challenge-card_example {
  transition: transform 1s;
  width: fit-content;
}
.indigo {
  color: var(--indigo-400);
}

.citrus-text {
  color: var(--citrus-400);
}
</style>
