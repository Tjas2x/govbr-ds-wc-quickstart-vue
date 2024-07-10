<template>
  <div>
    <!-- Formulário para filtrar cursos -->
    <form @submit.prevent="filtrarCursos" class="form-container">
      <!-- Botão 1: Buscar por nome do curso -->
      <div class="form-group">
        <input type="text" v-model="busca" placeholder="Buscar curso">
      </div>

      <!-- Botão 2: Unidade -->
      <div class="form-group">
        <select v-model="filtroUnidade">
          <option value="">Unidade</option>
          <option value="IFRR">IFRR</option>
          <option value="CAM">CAM</option>
          <option value="CBV">CBV</option>
          <option value="CBVO">CBVO</option>
          <option value="CAB">CAB</option>
          <option value="CNP">CNP</option>
        </select>
      </div>

      <!-- Botão 3: Modalidade (Natureza de Participação) -->
      <div class="form-group">
        <select v-model="filtroModalidade">
          <option value="">Modalidade</option>
          <option value="Presencial">Presencial</option>
          <option value="Semipresencial">Semipresencial</option>
          <option value="Educação à Distância">Educação à Distância</option>
        </select>
      </div>

      <!-- Botão 4: Nível -->
      <div class="form-group">
        <select v-model="filtroNivel">
          <option value="">Nível</option>
          <option value="Qualificação Profissional">Qualificação Profissional</option>
          <option value="Técnico">Técnico</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Licenciatura">Licenciatura</option>
          <option value="Especialização (Lato Sensu)">Especialização (Lato Sensu)</option>
          <option value="Bacharelado">Bacharelado</option>
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado Profissional">Doutorado Profissional</option>
        </select>
      </div>

      <!-- Botão 5: Flexibilidade -->
      <div class="form-group">
        <select v-model="filtroFlexibilidade">
          <option value="">Flexibilidade</option>
          <option value="Integrado">Integrado</option>
          <option value="Subsequente">Subsequente</option>
          <option value="Concomitante">Concomitante</option>
          <option value="PROEJA">PROEJA</option>
        </select>
      </div>

      <!-- Botão Filtrar -->
      <button type="submit" class="filtrar-button">Filtrar</button>
    </form>

    <!-- Número de cursos encontrados -->
    <p v-if="cursosFiltrados.length > 0" class="cursos-encontrados">{{ cursosFiltrados.length }} cursos encontrados</p>

    <!-- Lista de cursos filtrados -->
    <div v-if="cursosPaginados.length > 0" class="curso-list-container">
      <h2>Cursos</h2>
      <div class="curso-list">
        <div v-for="curso in cursosPaginados" :key="curso.id" class="curso-card" @click="selecionarCurso(curso)">
          <div class="curso-card-header">
            <span>{{ curso.modalidade }}</span>
            <h3>{{ curso.descricao }}</h3>
            <div class="curso-card-details">
              <p>Nível: {{ curso.nivel }}</p>
              <p>Unidade de Ensino: {{ curso.unidade }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <div class="pagination-container">
        <button @click="paginaAnterior" :disabled="paginaAtual === 1" class="pagination-button">Anterior</button>
        <template v-for="pagina in totalPaginas">
          <button @click="paginaAtual = pagina" :class="{ active: pagina === paginaAtual }" class="pagination-button">{{ pagina }}</button>
        </template>
        <button @click="proximaPagina" :disabled="paginaAtual === totalPaginas" class="pagination-button">Próxima</button>
      </div>
    </div>
    <div v-else>
      <p>Nenhum curso encontrado.</p>
    </div>

    <!-- Detalhes do curso selecionado -->
    <div v-if="cursoSelecionado" class="curso-detalhes">
      <h2>{{ cursoSelecionado.descricao }}</h2>
      <p>Nível: {{ cursoSelecionado.nivel }}</p>
      <p>Modalidade: {{ cursoSelecionado.modalidade }}</p>
      <!-- Outros detalhes do curso aqui... -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import cursosData from '../assets/cursos.json';

// Dados dos cursos
const cursos = ref(cursosData);

// Filtros
const busca = ref('');
const filtroUnidade = ref('');
const filtroModalidade = ref('');
const filtroNivel = ref('');
const filtroFlexibilidade = ref('');

// Paginação
const itensPorPagina = 21; // Defina o número de itens por página
const paginaAtual = ref(1);

// Curso selecionado
const cursoSelecionado = ref(null);

// Router
const router = useRouter();

// Método para filtrar cursos
const cursosFiltrados = computed(() => {
  return cursos.value.filter(curso => {
    // Aplicar os filtros aqui
    let passouFiltro = true;
    if (busca.value && !curso.descricao.toLowerCase().includes(busca.value.toLowerCase())) {
      passouFiltro = false;
    }
    if (filtroUnidade.value && curso.unidade !== filtroUnidade.value) {
      passouFiltro = false;
    }
    if (filtroModalidade.value && curso.modalidade !== filtroModalidade.value) {
      passouFiltro = false;
    }
    if (filtroNivel.value && curso.nivel !== filtroNivel.value) {
      passouFiltro = false;
    }
    if (filtroFlexibilidade.value && curso.flexibilidade !== filtroFlexibilidade.value) {
      passouFiltro = false;
    }
    return passouFiltro;
  });
});

// Método para calcular o total de páginas
const totalPaginas = computed(() => {
  return Math.ceil(cursosFiltrados.value.length / itensPorPagina);
});

// Método para retornar os cursos da página atual
const cursosPaginados = computed(() => {
  const inicio = (paginaAtual.value - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  return cursosFiltrados.value.slice(inicio, fim);
});

// Método para navegar para a página anterior
const paginaAnterior = () => {
  if (paginaAtual.value > 1) {
    paginaAtual.value--;
  }
};

// Método para navegar para a próxima página
const proximaPagina = () => {
  if (paginaAtual.value < totalPaginas.value) {
    paginaAtual.value++;
  }
};

// Método para selecionar um curso
const selecionarCurso = (curso) => {
  // Navegar para a página de detalhes do curso, passando apenas o ID do curso como parâmetro
  router.push({ name: 'CursoDetalhes', params: { id: curso.id.toString() } });
};


// Método para filtrar cursos
const filtrarCursos = () => {
  paginaAtual.value = 1; // Resetar para a primeira página ao aplicar filtros
};
</script>

 
<style scoped>

.componente-item {
    display: flex;
  align-items: center; /* Alinha verticalmente ao centro */
  }


.componente-item > span:first-child {
  flex-grow: 1; /* Faz com que a descrição da disciplina ocupe todo o espaço disponível */
  margin-right: 10px; /* Adiciona uma margem à direita para separar a descrição do total de horas */
}

  .horas {
  
  text-align: right; /* Alinha o texto à direita */
}
  
.form-container {
  display: flex;
  align-items: flex-start; /* Alinha os itens ao início do container */
  flex-wrap: wrap;
  gap: 10px;
}

.form-group {
  flex: 1;
}

.filtrar-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto; /* Move o botão "Filtrar" para a direita */
}

.cursos-encontrados {
  margin-bottom: 10px;
}

.curso-list-container {
  margin-top: 20px;
}

.curso-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Cada card tem no mínimo 300px e o grid se ajusta automaticamente */
  gap: 20px;
}

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

.pagination-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.pagination-button {
  background-color: transparent;
  color: #007bff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.pagination-button:hover {
  background-color: #007bff;
  color: #fff;
}

.pagination-button:disabled {
  cursor: not-allowed;
  color: #6c757d;
}

.pagination-button.active {
  background-color: #007bff;
  color: #fff;
}
</style>
