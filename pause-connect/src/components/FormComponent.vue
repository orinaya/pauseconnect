<script setup>
import InputGroupParticle from "./InputGroupParticle.vue";
import { ref } from "vue";

const formData = ref({
  nom: "",
  prenom: "",
  email: "",
  objet: "",
  accepteConditions: false,
  message: "",
});

const submitForm = () => {
  console.log(formData);
};
</script>

<template>
  <div>
    <InputGroupParticle label="Nom" inputType="text" v-model="formData.nom" />
    <InputGroupParticle label="Prénom" inputType="text" v-model="formData.prenom" />
    <InputGroupParticle label="Email" inputType="email" v-model="formData.email" />
    <InputGroupParticle label="Objet" inputType="text" v-model="formData.objet" />
    <InputGroupParticle
      label="J'accepte les conditions"
      inputType="checkbox"
      v-model="formData.accepteConditions"
    />
    <textarea v-model="formData.message" placeholder="Saisissez le message..."></textarea>

    <button @click="submitForm">Envoyer</button>
  </div>
</template>

<style></style>
