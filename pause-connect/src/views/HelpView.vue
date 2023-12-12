<script setup>
import AdviceComponent from "@/components/HelpAdviceComponent.vue";
const adivicesTab = [
    {
        title: "prout",
        text: "caca",
    },
    {
        title: "pipi",
        text: "fesse",
    },
];
</script>
<template>
    <h1>HELP</h1>
    <AdviceComponent v-for="advice in adivicesTab" :headline="advice.title" :text="advice.text" />
</template>
