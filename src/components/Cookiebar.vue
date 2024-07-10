<template>
  <br-cookiebar lang="pt-br" :content="content" @report="getReport"></br-cookiebar>
</template>

<script setup lang="ts">
const content = {
  "pt-br": {
    labels: {
      close: "Voltar",
      update: "Última atualização",
      categories: "Classes de cookies",
      enableAll: "Selecionar tudo",
      disableAll: "Desselecionar tudo",
      enableCategory: "Selecionar toda classe",
      disableCategory: "Desselecionar toda classe",
      enableCookie: "Selecionar",
      disableCookie: "Desselecionar",
      alwaysEnabled: "Sempre ativo",
      cookie: "Cookies",
      expiry: "Vencimento",
      domain: "Domínio",
      company: "Empresa",
      purpose: "Finalidade",
      description: "Descrição",
      acceptButton: "Aceitar",
      rejectButton: "Rejeitar cookies",
      optInButton: "Ver Políticas de Cookies",
      optOutButton: "Definir Cookies",
      notes: "Aviso sobre cookies",
    },
    intro: {
      observation:
        "Reprehenderit dolor tempor magna duis nisi cupidatat in. Labore aliquip officia incididunt adipisicing laborum sint aliquip dolor eiusmod. Quis aliquip culpa non reprehenderit mollit irure irure cupidatat nulla amet. Minim et aute laborum voluptate sint ea. Eiusmod exercitation ut voluptate veniam. Qui ipsum esse consequat sunt.",
      title: "Deserunt laboris velit cupidatat do cillum commodo labore.",
      update: "28/12/2021",
      foreword:
        "Commodo tempor culpa aliquip do aute nostrud nulla Lorem. Magna cupidatat elit aliquip eiusmod ad velit id. Dolore eiusmod mollit laboris ut aliquip commodo adipisicing. Aliquip deserunt occaecat exercitation do ullamco velit labore voluptate cillum aliquip. Exercitation tempor enim culpa sit in enim occaecat.",
    },
    all: {
      optIn: false,
      enable: false,
      alert: "Irure enim cillum ipsum proident culpa in exercitation consequat nulla dolor dolor pariatur.",
    },
    categories: [
      {
        id: "c1",
        name: "Aliquip anim voluptate non sint ullamco laborum.",
        optIn: true,
        description:
          "Laborum eiusmod magna incididunt Lorem eu. Exercitation ex qui id cupidatat labore adipisicing officia et esse ea magna veniam nulla nisi. Mollit anim anim deserunt occaecat in ut duis ea laborum. Ullamco reprehenderit anim duis cillum irure ut. Irure occaecat est id nisi elit mollit proident.",
      },
      {
        id: "c2",
        enable: true,
        name: "Do consequat occaecat esse non in aliquip commodo sunt Lorem voluptate.",
        description:
          "Id nulla id minim consequat ullamco dolor fugiat nisi quis elit proident. Eu pariatur ea aliquip laborum ullamco in. Exercitation ad do exercitation ex in ullamco veniam fugiat fugiat commodo deserunt ea pariatur proident. Laboris ex deserunt sit incididunt mollit quis excepteur ipsum culpa ea voluptate reprehenderit.",
      },
      {
        id: "c3",
        name: "Eiusmod aute laboris amet nostrud ea.",
        alert: "Non cillum laboris cupidatat aliquip proident consequat incididunt ullamco pariatur.",
        description:
          "Id adipisicing nostrud dolor sit proident elit laboris eiusmod fugiat in in dolor ut. Exercitation occaecat sit sit et labore qui anim quis minim mollit voluptate. Dolor incididunt dolor cupidatat consectetur sint sit laboris ea Lorem occaecat ad irure quis. Magna et est exercitation nisi esse laboris fugiat mollit mollit sit nulla aute cillum culpa. Adipisicing aute dolor aute minim occaecat commodo labore et. Est aute nisi qui laboris ut aliquip proident labore.",
      },
    ],
    cookies: [
      {
        id: "k1",
        categoryId: "c1",
        name: "lgpd-cookie-v2",
        expiry: "365 dias",
        domain: "serpro.gov.br",
        company: "Serpro",
        purpose: "Funcional / Preferências",
        description: "Ea ullamco duis culpa aliquip aliquip cupidatat.",
      },
      {
        id: "k2",
        categoryId: "c1",
        name: "__ac",
        expiry: "Sessão",
        domain: "serpro.gov.br",
        company: "Plone",
        purpose: "Autorização",
        description: "Ipsum tempor anim non voluptate incididunt ullamco.",
      },
      {
        id: "k3",
        categoryId: "c1",
        name: "__cp",
        expiry: "Sessão",
        domain: "serpro.gov.br",
        company: "Plone",
        purpose: "Funcional",
        description:
          "Exercitation ex ullamco nostrud sint duis consequat qui laborum deserunt sunt nisi labore labore.",
      },
      {
        id: "k4",
        categoryId: "c1",
        name: "statusmessages",
        expiry: "Sessão",
        domain: "serpro.gov.br",
        company: "Plone",
        purpose: "Funcional",
        description: "Labore aliquip enim proident enim est deserunt irure ea do exercitation laboris.",
      },
      {
        id: "k5",
        categoryId: "c2",
        name: "I18N_LANGUAGE",
        expiry: "Sessão",
        domain: "serpro.gov.br",
        company: "Plone",
        purpose: "Funcional",
        description: "Nisi magna deserunt commodo mollit mollit aliquip excepteur elit nisi.",
        alert: "Dolor aliqua quis sit non nostrud.",
      },
      {
        id: "k6",
        categoryId: "c2",
        name: "_GRECAPTCHA",
        expiry: "180 dias",
        domain: "google.com",
        company: "Google",
        purpose: "Funcional",
        description: "Ut Lorem nisi occaecat cillum aliquip culpa commodo.",
        alert: "Duis deserunt magna sint id magna pariatur pariatur ex.",
      },
      {
        id: "k7",
        categoryId: "c3",
        name: "_ga",
        expiry: "2 anos",
        domain: "serpro.gov.br",
        company: "Google",
        purpose: "Estatística",
        description: "Voluptate consequat consequat occaecat eiusmod do amet cillum commodo esse.",
        alert: "Aute reprehenderit ex nostrud nostrud labore.",
      },
      {
        id: "k8",
        categoryId: "c3",
        name: "_gid",
        expiry: "1 dia",
        domain: "serpro.gov.br",
        company: "Google",
        purpose: "Estatística",
        description: "Magna culpa ullamco occaecat proident tempor cillum qui nulla.",
        alert: "Eu amet labore Lorem et voluptate aute aute aute Lorem cupidatat consectetur.",
      },
      {
        id: "k9",
        categoryId: "c3",
        name: "_gat",
        expiry: "1 minuto",
        domain: "serpro.gov.br",
        company: "Google",
        purpose: "Estatística",
        description: "Laboris dolore anim consequat amet ea dolor excepteur Lorem.",
      },
    ],
    notes: [
      {
        question: "O que são cookies?",
        answer:
          "Os cookies são pequenos arquivos criados por sites visitados e que são salvos no computador do usuário, por meio do navegador (browser).",
      },
      {
        question: "Qual a durabilidade?",
        answer:
          "Todos os cookies armazenados têm uma data de vencimento e são eliminados depois dela. Geralmente, esta data é bem extensa e não possui um prazo padrão. A eliminação antes do vencimento pode ser feita manualmente pelo usuário. O armazenamento e a remoção, no entanto, são diferentes para cada navegador. Neste site, os cookies ficam registrados após a ação de clicar no botão 'Aceitar'. Você pode escolher customizá-los a qualquer momento no botão 'Redefinir Cookies'.",
      },
      {
        question: "Qual a proveniência?",
        answer:
          "Os cookies foram lançados na internet, em 1994, no navegador Netscape. Embora não armazenem dados de contas bancárias, por exemplo, eles podem guardar informações particulares como endereço pessoal, login e senhas de e-mail. Os cookies não estão apenas nos computadores, já que são armazenados em todos os dispositivos com um navegador, como smartphones, tablets etc.",
      },
      {
        question: "Qual a finalidade?",
        answer:
          "Os cookies são utilizados pelos sites principalmente para identificar e armazenar informações no navegador (browser) sobre os visitantes. Servem também para personalizar a página de acordo com o perfil, registrar dados estatísticos e de acompanhamento ou melhorar a performance da aplicação, facilitando o transporte de dados entre as páginas de um mesmo site.",
      },
    ],
    links: [
      {
        name: "Declaração de Conformidade com os Princípios de Proteção de Dados",
        url: "https://www.serpro.gov.br/privacidade-protecao-dados",
      },
    ],
  },
}

const getReport = (event: any) => {
  console.log(event.detail[0])
  event.target.setAttribute("hidden", "")
}
</script>
