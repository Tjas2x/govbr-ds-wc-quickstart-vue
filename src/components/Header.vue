<script setup lang="ts">
import { ref } from "vue";

const title = "Web Components GovBR-DS - Quickstart Vue"
const signature = "Padrão Digital de Governo"
const image = ref({
  src: "/bibliotecas/wc/govbr-ds-wc-quickstart-vue/logo-vue.png",
  alt: "Logo de exemplo",
})

const links = ref([
  {
    name: "Web Components",
    href: "https://www.gov.br/ds/webcomponents",
    title: "Web Components",
    target: "_blank",
  },
  {
    name: "Padrão Digital de Governo",
    href: "https://gov.br/ds",
    title: "Padrão Digital de Governo",
    target: "_blank",
  },
])

const functions = ref([
  {
    icon: "code",
    name: "Repositórios de Web Components",
    url: "https://gitlab.com/govbr-ds/bibliotecas/wc",
    tooltipText: "Contribua com os projetos de Web Components",
    tooltipPlace: "bottom",
  },
  {
    icon: "discord",
    iconFamily: "fab",
    name: "Discord",
    url: "https://discord.gg/U5GwPfqhUP",
    tooltipText: "Faça parte da nossa comunidade no discord",
    tooltipPlace: "bottom",
  },
  {
    icon: "book",
    name: "Wiki",
    url: "https://gov.br/ds/wiki/",
    tooltipText: "Conheça nossa Wiki",
    tooltipPlace: "bottom",
  },
])

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <br-header
    :alt="image.alt"
    container-fluid="true"
    has-menu
    has-title-link="true"
    id="header"
    :image="image.src"
    :signature="signature"
    title-link-url="/bibliotecas/wc/govbr-ds-wc-quickstart-vue/"
    :title="title"
  >
    <div slot="headerMenu">
      <br-button
        role="option"
        circle
        density="small"
        aria-label="Menu"
        :icon="isOpen ? 'times' : 'bars'"
        data-toggle="menu"
        data-target="#main-navigation"
        @click="toggleMenu"
      ></br-button>
    </div>
    <br-header-action
      slot="headerAction"
      title-links="Bibliotecas de componentes"
      :list-links="JSON.stringify(links)"
      title-functions="Links relacionados"
      :list-functions="JSON.stringify(functions)"
    ></br-header-action>
  </br-header>
</template>
