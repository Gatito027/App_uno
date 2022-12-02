<template>
  <ion-app>
    <ion-menu side="start" menu-id="first" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Archivos</ion-item>
          <ion-item>Fotos</ion-item>
          <ion-item>Red Social</ion-item>
          <ion-item>Tus Preferencias</ion-item>
          <ion-item>Mis Contactos</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <!--//*Añadir para arreglar bugs-->
    <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Tap the button in the toolbar to open the menu.
    </ion-content>
  </ion-page>

    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>