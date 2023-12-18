<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { computed, ref } from "vue";
var answer = ref(3);
var btnToggle = ref(true);

const points = computed(() => {
    return answer.value * 2;
});
</script>
<template>
    <div class="question-container">
        <div class="question-group_title">
            <h2 class="question-title">Combien d’écrans utilises-tu chaque jour ?</h2>
            <h3>Question 2/10</h3>
        </div>
        <div class="question">
            <div class="devices">
                <img v-show="answer >= 1" src="../../assets/img/Phone.svg" alt="Phone" />
                <img v-show="answer >= 2" src="../../assets/img/laptop.svg" alt="laptop" />
                <img v-show="answer >= 3" src="../../assets/img/desktop.svg" alt="desktop" />
                <img v-show="answer >= 4" src="../../assets/img/smartWatch.svg" alt="smartWatch" />
                <img v-show="answer >= 5" src="../../assets/img/vrHeadset.svg" alt="vrHeadset" />
            </div>
            <div class="slider">
                <label for="rangeDevices">{{ answer }}</label>
                <input id="rangeDevices" type="range" min="1" max="5" step="1" v-model="answer" />
                <div class="range"><span>1</span><span>5 et +</span></div>
                <p><i>*utilise le curseur pour changer la valeur</i></p>
            </div>
        </div>
        <ButtonComponent
            @click="$emit('nextQuestion', points)"
            class="questionBtn"
            :class="{ active: btnToggle == false }"
            color="primary"
            title="Valider ma réponse"
        />
    </div>
</template>
<style scoped>
.question {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.question-group_title {
    display: flex;
    justify-content: space-between;
}
.question-title {
    text-transform: inherit;
}
label {
    text-align: center;
    font-weight: var(--fw-600);
}
.slider {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    justify-content: center;
}
.slider .range {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.devices {
    position: relative;
    height: 100%;
    min-width: 370px;
    margin: auto;
    @media (max-width: 760px) {
        min-width: auto;
        margin: inherit;
    }
}
.devices img {
    position: absolute;
    @media (max-width: 760px) {
        scale: 0.8;
    }
}

.devices img:first-child {
    max-width: 126px;
    left: calc(50% - (126px / 2));
    top: 20svh;
    @media (max-width: 760px) {
        top: 18svh;
    }
}

.devices img:nth-child(2) {
    max-width: 135px;
    left: calc(59%);
    top: 10.5svh;
    @media (max-width: 760px) {
        top: 8.5svh;
    }
}

.devices img:nth-child(3) {
    max-width: 169px;
    left: calc(-5.5%);
    top: 7svh;
    @media (max-width: 760px) {
        top: 4svh;
    }
}

.devices img:nth-child(4) {
    max-width: 36px;
    left: calc(71%);
    top: 24svh;
    @media (max-width: 760px) {
        top: 23svh;
    }
}

.devices img:last-child {
    max-width: 75px;
    left: calc(17%);
    top: 27svh;
    @media (max-width: 760px) {
        top: 25svh;
    }
}

#rangeDevices::-moz-range-track {
    background: black;
}

#rangeDevices::-moz-range-thumb {
    background: var(--indigo-600);
    border: 2px solid black;
    width: 40px;
    height: 20px;
    border-radius: 30px;
}
</style>
