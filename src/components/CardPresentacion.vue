<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Diseño UI en Ionic</ion-card-subtitle>
            <ion-card-title>Curso de Diseño de Apps Hibridas</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            Este es el curso de diseño de Apps hibridas desarrrolladas en Vue con Ionic además de otros elementos
            de tecnologías desarrolladas para backend como spring boot o net core 3.1.
        </ion-card-content>
    </ion-card>
</template>
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
});
</script>
<style>

</style>