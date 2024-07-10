<template>
  <div class="curso-card" @click="verDetalhes(curso.id)">
    <div class="curso-card-header">
      <span>{{ curso.nivel }}</span>
      <h3>{{ curso.descricao }}</h3>
      <div class="curso-card-details">
        <p>Modalidade: {{ curso.modalidade }}</p>
        <p>Unidade de Ensino: {{ curso.unidade }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  curso: {
    id: number;
    nivel: string;
    descricao: string;
    modalidade: string;
    unidade: string;
    // outras propriedades do curso
  };
}>();

const router = useRouter();

const verDetalhes = (id: number) => {
  router.push({ name: 'CursoDetalhes', params: { id } });
};
</script>

<style scoped>
/* Estilos do card do curso */
.curso-card {
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
}

.curso-card:hover {
  background-color: #e9ecef;
}

.curso-card-header {
  margin-bottom: 10px;
}

.curso-card-header span {
  font-weight: bold;
}

.curso-card-details p {
  margin-bottom: 5px;
}

</style>
