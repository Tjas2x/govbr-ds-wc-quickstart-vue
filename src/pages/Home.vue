<template>
  <br-message state="info" show-icon> Leia com atenção as informações abaixo </br-message>

  <div v-html="renderedMarkdown"></div>
</template>

<script setup lang="ts">
import axios from "axios";
import MarkdownIt from "markdown-it";
import { computed, ref } from "vue";

const markdownContent = ref("")
const md = new MarkdownIt()

axios
  .get("/bibliotecas/wc/govbr-ds-wc-quickstart-vue/README.md")
  .then((response) => {
    markdownContent.value = response.data
  })
  .catch((error) => {
    console.error("Erro ao buscar o arquivo Markdown:", error)
  })

const renderedMarkdown = computed(() => {
  return md.render(markdownContent.value)
})
</script>
