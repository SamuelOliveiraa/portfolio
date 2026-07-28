# Portfólio de Vendas — Samuel Oliveira

## Visão Geral

Este projeto é um portfólio profissional desenvolvido com Next.js, React e TypeScript, com foco em conversão, autoridade digital e geração de oportunidades de negócio. A proposta é apresentar Samuel Oliveira como especialista em desenvolvimento web, reforçando confiança para clientes que buscam soluções modernas, rápidas e orientadas a resultados.

## Objetivo do Projeto

O objetivo principal deste projeto é funcionar como um portfólio de vendas, ou seja, não apenas mostrar trabalhos, mas também:

- gerar confiança para visitantes e potenciais clientes;
- comunicar claramente os serviços oferecidos;
- estimular contato via WhatsApp, e-mail e redes sociais;
- destacar benefícios como performance, acessibilidade, SEO e experiência do usuário;
- transformar tráfego em oportunidade comercial.

## Principais Características

- Interface moderna e responsiva;
- Design focado em conversão;
- Seções estratégicas: destaque, serviços, sobre, processo, FAQ e contato;
- Navegação fluida e otimizada para dispositivos móveis;
- Suporte a múltiplos idiomas;
- Integração com formulário de contato e envio de e-mails;
- Otimizações para SEO, acessibilidade e performance.

## Stack Tecnológica

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl
- react-hook-form
- zod
- nodemailer

## Estrutura do Projeto

```text
src/
  app/                # Rotas e layout principal
  components/         # Componentes reutilizáveis e de layout
  constants/          # Dados e links constantes
  content/            # Textos e conteúdos dinâmicos
  lib/                # Utilitários
  providers/          # Providers de contexto e animações
  templates/          # Templates de e-mail
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 20+
- npm ou pnpm

## Instalação

```bash
npm install
```

## Execução Local

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000.

## Scripts Disponíveis

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera a build de produção
npm run start    # inicia a aplicação em modo produção
npm run lint     # executa a análise de código com ESLint
```

## Variáveis de Ambiente

Crie um arquivo .env.local na raiz do projeto com as variáveis necessárias, por exemplo:

```env
GA_ID=seu-google-analytics-id
EMAIL_USER=seu-email
EMAIL_PASS=sua-senha
```

## SEO e Acessibilidade

Este projeto foi estruturado com foco em:

- metadata otimizada para compartilhamento social;
- tags de Open Graph e Twitter Cards;
- navegação por teclado;
- semântica correta de headings e seções;
- foco visível em elementos interativos;
- suporte a tema claro/escuro;
- redução de movimento para usuários que preferem menos animações.

## Melhorias Recomendadas para Score de Lighthouse

Para manter resultados próximos de 95%+, recomenda-se:

- manter imagens otimizadas e com dimensões explícitas;
- continuar priorizando conteúdo acima da dobra;
- reduzir JavaScript não essencial para o primeiro carregamento;
- validar continuamente textos e links com foco em clareza comercial;
- monitorar performance em produção com Lighthouse e Web Vitals.

## Autor

Samuel Oliveira

## Licença

Este projeto é de uso pessoal e profissional. Consulte o autor antes de reutilizar partes significativas do código.
