<template>
  <br-footer :text="license" :logo="JSON.stringify(logo)" id="footer" container-fluid="true"></br-footer>
</template>

<script setup lang="ts">
const license: string = "Todo o conteúdo deste site está publicado sob a licença MIT"
const logo = {
  url: "https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png",
  description: "Logo de exemplo",
}
</script>
