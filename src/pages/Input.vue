<template>
  <BreadCrumb></BreadCrumb>
  <Message message="Formulário enviado com sucesso!" type="success" />
  <div class="p-3">
    <h1>Input</h1>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from "@/components/BreadCrumb.vue"
import Message from "@/components/Message.vue"

const name = "UsuarioPage"
const components = {
  BreadCrumb,
  Message,
}
</script>
