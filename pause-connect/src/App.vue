<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
