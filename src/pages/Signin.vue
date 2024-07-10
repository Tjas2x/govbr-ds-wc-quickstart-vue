<template>
  <div>
    <p>
      Usuário <b>{{ isLogged ? "autenticado" : "não autenticado" }}</b>
    </p>

    <br-message state="info" show-icon="true">
      Clique nos componentes abaixo para simular um evento de <strong>login/logout</strong> e observe o console do
      navegador para mais informações.
    </br-message>

    <div class="dropdown">
      <br-sign-in v-if="!isLogged" type="primary" label="Entrar com" entity="gov.br" @click="toggleSignIn"></br-sign-in>
      <button
        v-else
        class="br-sign-in"
        type="button"
        id="avatar-dropdown-trigger"
        aria-label="Abrir menu do usuário"
        @click="toggleUserMenu"
        :data-toggle="userMenuVisible ? 'dropdown' : ''"
        :style="avatarButtonStyle"
        :data-target="userMenuVisible ? 'user-menu' : ''"
        :aria-controls="userMenuVisible ? 'user-menu' : ''"
        :data-visible="isLogged"
        :aria-expanded="isLogged"
      >
        <br-avatar name="Usuário Logado" image="https://picsum.photos/id/823/400"></br-avatar>
        <i v-if="userMenuVisible" class="fas fa-caret-up" aria-hidden="true"></i>
        <i v-else class="fas fa-caret-down" aria-hidden="true"></i>
      </button>

      <br-list v-if="userMenuVisible" id="user-menu">
        <br-item hover @click="toggleFunctionality('Funcionalidade 01')">Funcionalidade 01</br-item>
        <br-item hover @click="toggleFunctionality('Funcionalidade 02')">Funcionalidade 02</br-item>
        <br-item hover @click="toggleFunctionality('Funcionalidade 03')">Funcionalidade 03</br-item>
        <br-item hover @click="toggleSignIn">Fazer logout</br-item>
      </br-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const isLogged = ref(false)
const userMenuVisible = ref(false)
const avatarButtonStyle = {
  padding: "var(--spacing-scale-base)",
  height: "auto",
}

const toggleSignIn = () => {
  isLogged.value = !isLogged.value
  userMenuVisible.value = false
}

const toggleUserMenu = () => {
  userMenuVisible.value = !userMenuVisible.value
}

const toggleFunctionality = (functionality: string) => {
  // Lógica para alternar a funcionalidade
  console.log("Funcionalidade clicada:", functionality)
}
</script>
