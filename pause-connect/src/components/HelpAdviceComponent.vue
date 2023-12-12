<script setup>
const advice = defineProps({
    headline: {
        type: String,
    },
    text: {
        type: String,
    },
});
</script>
<template>
    <div class="advice">
        <div>
            <h3>{{ advice.headline }}</h3>
            <p>{{ advice.text }}</p>
        </div>
    </div>
</template>
<style scoped>
.advice {
    background-color: hsl(206, 66%, 90%);
    display: flex;
    gap: 0.8rem;
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
