<template>
    <ion-chip color="primary">
        <ion-label>Componente Inicial</ion-label>
    </ion-chip>

    <ion-chip>
        <ion-avatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>Tu Avatar</ion-label>
        <ion-icon :icon="closeCircle"></ion-icon>
    </ion-chip>

    <ion-chip>
        <ion-icon :icon="heart" color="primary"></ion-icon>
        <ion-label>Default</ion-label>
    </ion-chip>
</template>
<script>
import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
import { close, closeCircle, pin, heart } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonChip, IonAvatar, IonLabel, IonIcon },
    setup() {
        return {
            close,
            closeCircle,
            pin,
            heart,
        };
    },
});
</script>
<style>

</style>