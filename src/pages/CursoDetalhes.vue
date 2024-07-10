<template>
  <div v-if="cursoSelecionado">
    <h1>{{ cursoSelecionado.descricao }}</h1>
    <p>Modalidade: {{ cursoSelecionado.modalidade }}</p>
    <p>Unidade: {{ cursoSelecionado.unidade }}</p>

    <h2>Matrizes:</h2>

    <div v-for="(matriz, index) in cursoSelecionado.matrizes" :key="matriz.id">
      <!-- Botão de colapso no nome do curso -->
      <h3 @click="toggleCollapse(index)" style="cursor: pointer;">
        {{ matriz.descricao }} <span v-if="isCollapsed[index]">▼</span><span v-else>▲</span>
      </h3>
      <ul v-if="!isCollapsed[index]">
        <li v-for="componente in matriz.componentes" :key="componente.id" class="componente-item">
          <span class="descricao"><strong>●</strong> {{ componente.descricao }}</span>
          <span class="horas">{{ componente.get_carga_horaria_total }} H</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import cursosData from '../assets/cursos.json';

// Obter o ID do curso a partir dos parâmetros da rota
const route = useRoute();
const cursoId = route.params.id.toString(); // Converter para string

// Encontrar o curso correspondente ao ID
const cursoSelecionado = computed(() => {
  return cursosData.find(curso => curso.id.toString() === cursoId);
});

// Estado de colapso para cada matriz
const isCollapsed = ref([]);

// Inicializa o estado de colapso para cada matriz
if (cursoSelecionado.value) {
  isCollapsed.value = cursoSelecionado.value.matrizes.map(() => true);
}

// Função para alternar o estado de colapso
const toggleCollapse = (index: number) => {
  isCollapsed.value[index] = !isCollapsed.value[index];
};
</script>

<style scoped>
.componente-item {
  display: flex;
  justify-content: space-between;
  padding-right: 2rem; /* Ajuste o valor conforme necessário */
}

.descricao {
  flex-grow: 1;
}

.horas {
  text-align: right;
}
</style>
