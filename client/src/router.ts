import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Inicio from './paginas/Inicio.vue';
import Nosotros from './paginas/Nosotros.vue';
import Servicios from './paginas/Servicios.vue';
import Contacto from './paginas/Contacto.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros,
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
  // Rutas adicionales pueden agregarse aquí en español
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;