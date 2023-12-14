<script setup>
const items = [
  {
    title: "Médecin traitant",
    image: "prout.png",
  },
  {
    title: "Psychologue",
    image: "prout.png",
  },
  {
    title: "Psychiatre",
    image: "prout.png",
  },
  {
    title: "Centre de soin, d’accompagnement et de prévention en addictologie (CSAPA)",
    image: "prout.png",
  },
  {
    title: "À l’hôpital dans un service d’addictologie",
    image: "prout.png",
  },
];

const tabs = [
  {
    title: "Thérapies comportementales et cognitives (TCC)",
    text: "Texte à rajouter voir notions",
  },
  {
    title: "Thérapie systémique (ou familiale)",
    text: "Texte à rajouter voir notions",
  },
  {
    title: "Thérapie psychodynamique ",
    text: "Texte à rajouter voir notions",
  },
  {
    title: "Intégrer un groupe de parole",
    text: "Texte à rajouter voir notions",
  },
];
</script>
<template>
  <div class="container fourth-step_container">
    <p>
      En cas d’addiction et si tu n’arrive pas à te réguler, tu peux tout à fait consulter un
      professionnel de la santé. Voici les personnes ou lieu où tu peux consulter :
    </p>
    <div class="fourth-card_group">
      <div v-for="(item, index) in items" :key="index" class="fourth-step_card grow">
        <img src="../assets/img/test.png" />
        <h3 class="group-title">{{ item.title }}</h3>
      </div>
    </div>
    <p>
      Si tu es dans ce cas, il est très important que tu saches que les médicaments ne sont pas une
      obligation. En effet, tu pourras recevoir les thérapies suivantes :
    </p>
    <div class="fourth-step_content">
      <div class="advice grow" v-for="(tab, index) in tabs" :key="index">
        <div>
          <h3>{{ tab.title }}</h3>
          <p>{{ tab.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fourth-step_container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: var(--space-xl);
  margin-bottom: var(--space-section);
}

.fourth-step_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
}

.fourth-card_group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 60px;

  @media (max-width: 760px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
}

.group-title {
  width: 60%;
  text-transform: inherit;
}
.fourth-step_card {
  background-image: url(../assets/img/citrus-ellipse.png);
  background-repeat: no-repeat;
  width: 29%;
  height: 220px;
  display: flex;
  align-items: center;
  gap: 40px;
  background-position-x: left;
  background-position-y: center;

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (min-width: 760px) and (max-width: 980px) {
    width: 40%;
  }
}

#advices {
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
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    padding-inline: 0;
  }
}
.advice {
  background-color: var(--mint-900);
  display: flex;
  gap: 0.8rem;
  padding: 20px;
  border-radius: 4px;
  width: 40%;

  @media (max-width: 767px) {
    width: 80%;
  }
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
