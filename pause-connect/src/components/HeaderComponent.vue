<script setup>
import LinkComponent from "./LinkComponent.vue";

var menu = [
  {
    name: "Quiz",
    link: "/notre-quiz",
  },
  {
    name: "Quiz",
    link: "/notre-quiz",
  },
  {
    name: "Quiz",
    link: "/notre-quiz",
  },
];
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <RouterLink :to="item.link">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <LinkComponent title="Button" color="primary" routeLink="/nos-defis" />
  <LinkComponent title="Button" color="secondary" routeLink="/nos-defis" />
</template>
