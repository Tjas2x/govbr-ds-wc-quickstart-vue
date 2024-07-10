import { createRouter, createWebHistory } from 'vue-router'
import Cookiebar from './pages/CookiebarPage.vue'
import Formulario from './pages/Formulario.vue'
import Home from './pages/Home.vue'
import Signin from './pages/Signin.vue'
import Cursos from './pages/Cursos.vue'


import CursoDetalhes from './pages/CursoDetalhes.vue';


const routes = [
  {
    path: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/cursos',
    component: Cursos,
    name: 'Cursos',
    meta: {
      label: 'Cursos',
    },
 },
    {
    path: '/cursos/:id',
    component: CursoDetalhes,
    name: 'CursoDetalhes',
    meta: {
      label: 'Detalhes do Curso',
    },


  },
  {
    path: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/',
    component: Home,
    name: 'Home',
    meta: {
      label: 'Página Inicial',
    },
  },
  {
    path: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/formulario',
    component: Formulario,
    name: 'Formulário',
    meta: {
      label: 'Formulário',
    },
  },
  {
    path: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/sign-in',
    component: Signin,
    name: 'Sign-in',
    meta: {
      label: 'Sign-in',
    },
  },
  {
    path: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/cookiebar',
    component: Cookiebar,
    name: 'Cookiebar',
    meta: {
      label: 'Cookiebar',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
