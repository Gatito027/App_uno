<template>
    <ion-item>
        <ion-label>Fechas</ion-label>
        <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>
    </ion-item>

    <ion-item>
        <ion-label>Mes Año Día</ion-label>
        <ion-datetime display-format="MM DD YY" placeholder="Select Date"></ion-datetime>
    </ion-item>

    <ion-item>
        <ion-label>Bloqueado</ion-label>
        <ion-datetime id="dynamicDisambled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>
    </ion-item>

    <ion-item>
        <ion-label position="stacked">MMMM YY</ion-label>
        <ion-datetime display-format="MM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.780"></ion-datetime>
    </ion-item>
</template>
<script>
import { IonDatetime, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { IonDatetime, IonItem, IonLabel },
});
</script>