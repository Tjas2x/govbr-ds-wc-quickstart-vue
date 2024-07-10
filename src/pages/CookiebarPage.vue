<template>
  <div>
    <br-message state="info" show-icon="true">
      O componente <strong>&lt;br-cookiebar&gt;&lt;/br-cookiebar&gt;</strong> foi configurado para aparecer apenas nessa
      página para demonstrar seu funcionamento.
      <br />
      Na maioria dos casos, ele será configurado para aparecer em todas as páginas.
    </br-message>

    <Cookiebar></Cookiebar>
  </div>
</template>

<script setup lang="ts">
import Cookiebar from "../components/Cookiebar.vue"
</script>
