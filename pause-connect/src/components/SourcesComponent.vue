<script setup>
const sources = [
  "https://gaeconseil.fr/addictions-2/tout-savoir-sur-laddiction-aux-ecrans/",
  "https://www.drogues.gouv.fr/lessentiel-sur-les-usages-problematiques-decrans",
  "https://www.ramsayservices.fr/pathologies/addiction-aux-ecrans-un-trouble-psychologique-prendre-au-serieux",
];
</script>
<template>
  <div class="container">
    <h2>Sources & références :</h2>
    <div class="sources-content">
      <div v-for="(source, index) in sources" :key="index" class="sources-list">
        <p>{{ index + 1 }}.</p>
        <a class="sources-link" :href="source">{{ source }}</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sources-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  margin-top: var(--space-l);
  margin-bottom: var(--space-section);
}
.sources-list {
  display: flex;
  gap: var(--space-s);
}
.sources-link {
  color: var(--indigo-500);

  &:hover {
    text-decoration: underline;
    color: var(--indigo);
  }
}
</style>
