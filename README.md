# Web 2 - Prova de Suficiência

Este projeto é uma aplicação Next.js com API REST usando Prisma e autenticação JWT.

## Pré-requisitos

- Node.js 20+ instalado
- npm instalado
- Banco de dados PostgreSQL disponível

## Configuração do ambiente

1. Copie o arquivo de exemplo de variáveis de ambiente:

2. Preencha o arquivo `.env` com os valores corretos:

```env
NEON_DB_STRING="postgresql://usuario:senha@endereco:porta/banco?schema=public"
JWT_SECRET="uma-senha-secreta-qualquer"
```

> `NEON_DB_STRING` deve apontar para sua instância PostgreSQL.
> `JWT_SECRET` é usado para assinar os tokens JWT.

## Instalar dependências

```bash
npm install
```

## Gerar cliente Prisma e criar o banco

```bash
npx prisma generate
npx prisma migrate dev
```

## Popular o banco de dados (seed)

```bash
npx prisma db seed
```

O seed cria tipos e equipamentos iniciais no banco.

## Rodar o projeto

```bash
npm run dev
```

Abra no navegador:

- `http://localhost:3000` para o site principal
- `http://localhost:3000/docs` para a documentação Swagger da API

## Endpoints principais

- `/RestApiFurb/equipamentos`
- `/RestApiFurb/equipamentos/{id}`
- `/RestApiFurb/login`
- `/RestApiFurb/signUp`
- `/RestApiFurb/users`
- `/RestApiFurb/users/{id}`

## Observações

- A API usa autenticação JWT para rotas protegidas em `/RestApiFurb/users` e `/RestApiFurb/equipamentos/{id}`.
- O seed não popula usuários, apenas tipos e equipamentos.
- Se houver problemas de conexão, verifique o valor de `NEON_DB_STRING` no `.env`.

## Scripts úteis

- `npm run dev` — inicia o servidor em modo de desenvolvimento
- `npm run build` — gera a aplicação para produção
- `npm run start` — inicia a aplicação em modo de produção
- `npm run lint` — verifica qualidade de código com ESLint
