# Teste Frontend - Fisgar 🛡️ ⚛️

Este é o repositório contendo a aplicação, desenvolvida como parte do teste técnico frontend da Fisgar, na qual consiste no desenvolvimento de uma aplicação web de listagem de imóveis que consuma dados de uma API REST fictícia.

## 🚀 Tech Stack

- ⚛️ [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- ⚡️ [Next](https://nextjs.org/docs) com [TypeScript](https://www.typescriptlang.org/)
- 📦 [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e com uso eficiente de espaço em disco
- 🎨 [Material UI](https://mui.com/) & [EmotionCSS](https://emotion.sh/docs/introduction)
- 🗺️ [React Leaflet](https://react-leaflet.js.org/) & [Leafletjs](https://leafletjs.com/)
- 🔍 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- 🪝 [Husky](https://typicode.github.io/husky/) para Git hooks
- 📡 [@tanstack/react-query](https://tanstack.com/query/latest) para gerenciamento de dados da API e caches
- 🔄 [Axios](https://axios-http.com/) para requisição da API
- 🧪 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) e [Jest](https://jestjs.io/) para testes Automatizados para componentes e funcionalidades.

## 📁 Estrutura do Projeto

```
├── public/   # Arquivos estáticos públicos (imagens, icons, etc)
├── src/
│   ├── app/      # Diretório principal do App Router
|   |   |__ globals.css
|   |   |
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/   # Componentes compartilhados/comuns
│   │   ├── Header/      # Header da nossa aplicação
│   │   |── PropertyList/  # Listagens dos imóveis
|   |   |__ SearchFilters/  # Filtro Global
|   |   |
|   |   |__ PropertyMap.tsx # Mapa
|   |   |__ PropertyCard.tsx # Card dos marcadores que aparecem no mapa
|   |   |
│   ├── config/   # Configuração do aplicativo
│   ├── hooks/    # Hooks compartilhados
│   ├── lib/      # Funções utilitárias
│   ├── providers/  # Provedores de contexto
│   ├── services/   # Serviços de API
│   ├── styles/    # Estilos globais
│   ├── types/    # Tipos TypeScript compartilhados
├── .env.example  # Exemplo de variáveis de ambiente
├── .eslintrc.js  # Configuração do ESLint
├── .gitignore    # Arquivos ignorados pelo Git
├── .prettierrc   # Configuração do Prettier
├── jest.config.ts # Configuração do Jest
├── next.config.ts # Configuração do Next.js
├── package.json   # Dependências e scripts
└── tsconfig.json  # Configuração do TypeScript
```

## 🛠️ Detalhes e Decisões Técnicas

### 1. Configurações de inicialização

Para garantir um padrão, seja a nível de sintaxe do código, como a nível de versionamento de códgio foi configurado o Husky, Commitlint, ESLint e do Prettier.

### 2. Especificalções Técnicas

Uma vez que foi pedido o desenvolvimento de uma aplicação web de listagem de imóveis que consuma dados de uma API REST fictícia. Foi configurado uma fake api usando o json server com alguns dados fictícios, adicionei um mapa de modo a ser mais interativo, o core da aplicação consiste em 3 pontos que são:

1. Consumo da API fictícia, onde é retornado os dados dos imóveis
2. O Filtro Global que basicamente é um componente de filtro que está sincronizado com um gerenciador de estado global, que serviu para a comunicação dos dados entre os componentes.
   2.2. Ainda dentro dos filtros foi implementado uma outra requisição utilizando a api open source da [Nominatim](https://nominatim.openstreetmap.org/ui/search.html) de modo a fazer a busca por endereços.
3. Os dados retornados seja da combinação dos filtros como do retorno da API.

### 3. Testes

Foram realizados alguns testes, na verdade bem simples por falta de ideia, os testes são:

1. Renderiza o cabeçalho
2. Renderiza os filtros de pesquisa
3. deve mostrar o botão de lista na versão mobile
4. Exibe o estado de carregamento quando as propriedades estão sendo carregadas

## 🚀 Começando

1. Clone o repositório
2. Instale as dependências: `pnpm install`
3. Instale o json-server: `npm install -g json-server`
4. Rode o servidor para a API fictícia: `json-server --watch db.json --port 3001`
5. Inicie o servidor de desenvolvimento: `pnpm dev`
6. Construa para produção: `pnpm build`
7. Para efeito de testes rode: `pnpm test`

###### Feito com ❤️ por Beans

## 📄 Licença

[MIT](/LICENSE)
