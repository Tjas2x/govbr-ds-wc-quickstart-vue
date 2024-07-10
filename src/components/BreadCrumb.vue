<template>
  <br-breadcrumb v-if="links.length > 1" label="Breadcrumb" :links="JSON.stringify(links)"></br-breadcrumb>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

const isHome = ref(false)
const route = useRoute()

const links = computed(() => {
  const routes = route.matched
  const breadcrumbs: any[] = [
    {
      label: "Página Inicial",
      url: "/bibliotecas/wc/govbr-ds-wc-quickstart-vue/",
      home: true,
    },
  ]

  for (const routeRecord of routes) {
    if (routeRecord.name && routeRecord.path !== "/") {
      breadcrumbs.push({
        label: String(routeRecord.meta?.breadcrumb || routeRecord.name),
        url: `/bibliotecas/wc/govbr-ds-wc-quickstart-vue/${routeRecord.path}`,
        active: true,
      })
    }
  }

  return breadcrumbs
})
</script>
