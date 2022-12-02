import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'presentacion',
        component: () => import('@/components/CardPresentacion.vue')
      },
      {
        path: 'boton',
        component: () => import('@/components/Button.vue')
      },
      {
        path: 'alerta',
        component: () => import('@/components/Alertas.vue')
      },
      {
        path: 'chip',
        component: () => import('@/components/IonChip.vue')
      },
      {
        path: 'fechas',
        component: () => import('@/components/DateTime.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
