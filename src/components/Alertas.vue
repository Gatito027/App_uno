<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ion-button @click="presentarAlerta">Mostrar Alerta</ion-button>
</template>
<script>
import { IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { IonButton },
    methods: {
        async presentarAlerta(){
            const alert = await alertController
            .create({
                cssClass: 'my-custom-class',
                header: 'Mensaje Privado',
                subHeader: 'Estas utilizando Vue y Ionic',
                message: 'Esta es una alerta',
                buttons: ['ok']
            });
            await alert.present();
            const {role} = await alert.onDidDismiss();
            console.log('onDidDismiss resolvio la alerta',role);
        }
    },
});
</script>
<style>
.my-custom-class {
    --background: #e5e5e5;
}
</style>