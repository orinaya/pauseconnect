<script setup>
defineProps({
  label: String,
  inputType: String,
  placeholder: String,
});
</script>
<template>
  <div class="form-particle">
    <label>{{ label }}</label>
    <input class="form-particule_input" :type="inputType" :placeholder="placeholder" />
  </div>
</template>

<style>
.form-particle {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.form-particule_input {
  border: none;
  padding: 15px;
  border-radius: 4px;
  border: solid 1px rgba(128, 128, 128, 0.501);
  background: #fff;
  font-size: 16px;
  position: relative;
  z-index: 1;
}

label {
  font-weight: 600;
}
</style>
