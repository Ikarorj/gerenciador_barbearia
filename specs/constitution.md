# Constituição do Projeto

Princípios que **toda** spec, plano e código devem seguir. Mudou algo aqui? Registre no histórico no final.

## 1. Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React + Vite + TypeScript |
| Estilo | Tailwind CSS v4 |
| Backend / Banco / Auth | Supabase (PostgreSQL, RLS, Edge Functions) |
| Lint | ESLint |

Sem backend próprio: lógica que exige segredo (WhatsApp, Pix) ou execução agendada vai para **Supabase Edge Functions** / **pg_cron**.

## 2. Arquitetura MVVM

```
View  →  ViewModel  →  Model  →  Supabase
```

| Camada | O que é | Pode | Não pode |
|---|---|---|---|
| **Model** | Tipos + services (`*Service.ts`) | Falar com o Supabase | Importar React |
| **ViewModel** | Custom hooks (`use*ViewModel.ts`) | Usar hooks, chamar o Model, guardar estado | Retornar JSX |
| **View** | Componentes `.tsx` | Renderizar e repassar eventos ao ViewModel | Chamar o Supabase ou ter regra de negócio |

### Estrutura de pastas

```
src/
├── features/
│   └── <funcionalidade>/
│       ├── model/
│       ├── viewmodel/
│       └── view/
└── shared/
    ├── lib/          # cliente Supabase, utilitários
    └── components/   # componentes de UI reutilizáveis
```

## 3. Regras de negócio inegociáveis

- **Nunca** permitir dois agendamentos no mesmo horário para o mesmo barbeiro — garantido **no banco**, não só no front.
- Horários salvos em **UTC**, exibidos em `America/Sao_Paulo`.
- Interface pensada **primeiro para celular**.
- Cliente agenda sem precisar criar senha.

## 4. Segurança

- Toda tabela tem **RLS ativado**.
- Chave `service_role` **nunca** no frontend.
- Arquivos `.env` nunca vão para o Git.

## 5. Convenções

- Código (variáveis, funções, arquivos) em **português**, exceto termos técnicos consagrados.
- Commits no padrão **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- Uma branch por spec, com o mesmo nome da pasta.

## Histórico

| Data | Mudança |
|---|---|
| 2026-10-18 | Versão inicial |
