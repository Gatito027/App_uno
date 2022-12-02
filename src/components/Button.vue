<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h2>Estamos usando Ionic quieres aprender mas da click.</h2>
    <ion-button expand="block" color="success">Click</ion-button>
</template>
<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonButton },
});
</script>
<style>
</style>