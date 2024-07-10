# Web Components GovBR-DS - Quickstart Vue

## Descrição

Projeto exemplificando o uso da [biblioteca de Web Components do GovBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GovBR-DS') em projetos [Vue](https://vuejs.org/ 'Vue').

Esse projeto usa Vue 3 `<script setup>` SFCs. Confira os [documentos de configuração do script](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) para aprender mais.

## O que é um quickstart?

É um projeto modelo pré-configurado que facilita o início das atividades assim como serve de exemplo para projetos já em andamento.

## Considerações sobre segurança, qualidade e boas práticas

É importante entender que um projeto Quickstart em software não deve ser usado diretamente em um ambiente de produção. Isso porque esses projetos são simplificados e podem não lidar com todos os desafios do mundo real.

O código do projeto Quickstart pode não lidar com questões avançadas, como segurança, escalabilidade ou gerenciamento de erros. Portanto, antes de implantar o código em um ambiente de produção real, **é crucial revisar**, testar e personalizar o código para atender às necessidades específicas do projeto e garantir que seja robusto e seguro.

Além disso, em projetos Quickstart de software, às vezes são tomadas liberdades na forma como o código é escrito para torná-lo mais fácil de entender. Isso pode significar que algumas boas práticas de programação não são seguidas ou que o código não está otimizado para desempenho máximo. Portanto, é responsabilidade do desenvolvedor adaptar o projeto Quickstart para atender às necessidades e padrões de produção adequados.

Em resumo, um projeto Quickstart em software é **um ponto de partida** útil, mas não deve ser implantado diretamente em um ambiente de produção sem revisão e ajustes adequados. Os desenvolvedores devem lembrar que a simplicidade é frequentemente priorizada em projetos Quickstart em detrimento da complexidade do mundo real e devem personalizar o código para atender às necessidades específicas de seu projeto.

## Tecnologias

Esse projeto é desenvolvido usando:

1. [Biblioteca de Web Components do GovBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GovBR-DS')
1. [Vue 3](https://vuejs.org/ 'Vue 3').
1. [TypeScript](https://www.typescriptlang.org/ 'TypeScript').
1. [Vite](https://vitejs.dev/ 'Vite').

Para saber mais detalhes sobre Web Components sugerimos que consulte o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components 'Web Components | MDN').

## Dependências

As principais dependências do projeto são:

1. [GovBR-DS](https://www.gov.br/ds/ 'GovBR-DS')

1. [Web Components](https://gov.br/ds/webcomponents/ 'Web Components GovBR-DS')

1. [Font Awesome](https://fontawesome.com/ 'Font Awesome')

1. [Fonte Rawline](https://www.cdnfonts.com/rawline.font/ 'Fonte Rawline')

> O fontawesome e a fonte rawline podem ser importadas de um CDN. Consulte a documentação no site do GovBR-DS para mais detalhes

## Como executar o projeto?

```sh
git clone git@gitlab.com:govbr-ds/bibliotecas/wc/govbr-ds-wc-quickstart-vue.git

npm install

npm run dev
```

Após isso o projeto vai estar disponível no endereço `http://127.0.0.1:5173/`.

OBS: Para contribuir com o projeto o clone pode não ser a maneira correta. Por favor consulte nossos guias sobre como contribuir na nossa [wiki](https://gov.br/ds/wiki/ 'Wiki').

## Utilizando os Web Components

Inclua essas duas importações no arquivo *main.ts*.

```javascript
import '../node_modules/@govbr-ds/webcomponents/dist/webcomponents.umd.min.js'
```

## Rotas com os web componentes e Frameworks

O atributo isSpaLinkBehavior foi criado para adicionar suporte a um comportamento específico nos links do componente br-menu em aplicativos de página única (SPA). O objetivo principal é permitir que os links dentro do menu se comportem de forma diferente quando o aplicativo está em execução como SPA, em comparação com um comportamento tradicional de reload de página.

Em aplicações SPA, onde as páginas são carregadas dinamicamente sem a necessidade de recarregar a página inteira, o comportamento padrão dos links é executar uma ação interna dentro da aplicação, navegando para a nova rota sem atualizar toda a página. No entanto, quando se trata de um link tradicional, ao clicar nele, a página é recarregada do zero, o que pode causar uma experiência mais lenta e indesejada para o usuário.

Em resumo, o atributo isSpaLinkBehavior foi criado para o componente br-menu com o objetivo de oferecer suporte a aplicativos de página única (SPA). Quando definido como true para um item do menu, o link associado a esse item se comporta como um link interno do SPA, evitando o reload da página ao ser clicado. Isso proporciona uma navegação mais suave e eficiente para os usuários, melhorando a experiência geral do aplicativo. O atributo é particularmente útil em cenários com várias rotas no SPA, onde a necessidade de navegação interna é frequente. Recomenda-se usar o isSpaLinkBehavior sempre que houver links internos em um SPA, garantindo uma experiência de usuário mais agradável.

Menu.vue:

```javascript
<template>
  <nav>
    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem.id">
        <a
          href="javascript:void(0)"
          @click="handleClick(menuItem, $event)"
        >
          {{ menuItem.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(menuItem, event) {
      event.preventDefault();

      if (menuItem.isSpaLinkBehavior && menuItem.url) {
        this.$emit('navigate', menuItem.url);
      } else if (menuItem.url) {
        window.location.href = menuItem.url;
      }
    }
  }
};
</script>
```

App.vue (exemplo de utilização):

```javascript
<template>
  <div>
    <h1>Exemplo de uso do Menu</h1>
    <Menu :menu-items="menuItems" @navigate="onNavigate" />
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  components: {
    Menu
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Home', url: '/' },
        { id: 2, name: 'Sobre', url: '/about' },
        { id: 3, name: 'Serviços', url: '/services', isSpaLinkBehavior: true },
        { id: 4, name: 'Contato', url: '/contact', isSpaLinkBehavior: true },
        { id: 5, name: 'Link Externo', url: 'https://www.google.com', isSpaLinkBehavior: false },
      ]
    };
  },
  methods: {
    onNavigate(url) {
      console.log('Navegando para:', url);
      // Lógica de navegação no SPA
    }
  }
};
</script>
```

Neste exemplo, temos um componente Vue chamado Menu.vue com uma propriedade chamada menuItems, que é uma lista de objetos que representam os itens do menu. Cada item do menu pode ter a propriedade isSpaLinkBehavior definida como true para indicar que o link deve ser tratado como um link interno do SPA. No método handleClick, verificamos se o isSpaLinkBehavior está definido para lidar com a navegação de acordo com a necessidade.

Lembre-se de que este é apenas um exemplo básico de como implementar o uso do atributo isSpaLinkBehavior em um componente Vue. Em um projeto real, você pode estender e personalizar esse exemplo de acordo com as necessidades específicas do seu aplicativo.

## Precisa de ajuda?

> Por favor **não** crie issues para fazer perguntas...

Use nossos canais abaixo para obter tirar suas dúvidas:

- Site do GovBR-DS [http://gov.br/ds](http://gov.br/ds)

- Web Components [https://gov.br/ds/webcomponents/](https://gov.br/ds/webcomponents/)

- Usando nosso canal no discord [https://discord.gg/U5GwPfqhUP](https://discord.gg/U5GwPfqhUP)

## Como contribuir?

Antes de abrir um Merge Request tenha em mente algumas informações:

- Esse é um projeto opensource e contribuições são bem-vindas.
- Para facilitar a aprovação da sua contribuição, escolha um título curto, simples e explicativo para o MR, e siga os padrões da nossa [wiki](https://gov.br/ds/wiki/ 'Wiki').
- Quer contribuir com o projeto? Confira o nosso guia [como contribuir](./CONTRIBUTING.md 'Como contribuir?').

### Commits

Nesse projeto usamos um padrão para branches e commits. Por favor observe a documentação na nossa [wiki](https://gov.br/ds/wiki/ 'Wiki') para aprender sobre os nossos padrões.

## Créditos

Os Web Components do GovBR-DS são criados pelo [SERPRO](https://www.serpro.gov.br/ 'SERPRO | Serviço Federal de Processamento de Dados') e [Dataprev](https://www.dataprev.gov.br/ 'Dataprev | Empresa de Tecnologia e Informações da Previdência') juntamente com a participação da comunidade.

## Licença

Nesse projeto usamos a licença MIT.
