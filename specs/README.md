# Specs — Spec-Driven Development (SDD)

Toda funcionalidade nasce aqui **antes** de virar código.

## Fluxo

```
spec.md  →  plan.md  →  tasks.md  →  código  →  revisão
(o quê)     (como)      (passos)
```

1. **spec.md** — O quê e por quê. Histórias de usuário e critérios de aceite. **Sem detalhes técnicos.**
2. **plan.md** — Como. Tabelas, camadas MVVM, telas, decisões técnicas.
3. **tasks.md** — Lista de passos pequenos e marcáveis, na ordem de execução.
4. **Código** — Só começa quando os três documentos estão revisados.
5. **Revisão** — Cada critério de aceite da spec foi atendido? Marque e feche.

> Se durante o código algo mudar, **atualize a spec primeiro**. A spec é a fonte da verdade.

## Como criar uma nova funcionalidade

1. Copie a pasta [`_templates/`](_templates/) para `specs/NNN-nome-da-funcionalidade/`
2. Use o próximo número livre (3 dígitos) e nome em `kebab-case`
3. Preencha `spec.md` → peça revisão → `plan.md` → `tasks.md`
4. Crie uma branch com o mesmo nome: `git checkout -b 001-agendamento-cliente`

## Princípios do projeto

Regras que valem para **todas** as specs: [constitution.md](constitution.md)

## Funcionalidades

| Nº | Funcionalidade | Status |
|---|---|---|
| 001 | Agendamento pelo cliente | 📝 A especificar |
| 002 | Painel do barbeiro (agenda do dia/semana) | ⏳ Pendente |
| 003 | Cadastro de serviços e barbeiros | ⏳ Pendente |
| 004 | Horários de trabalho e bloqueios | ⏳ Pendente |
| 005 | Lembretes e confirmação via WhatsApp | ⏳ Pendente |
| 006 | Lista de espera | ⏳ Pendente |
| 007 | Sinal via Pix | ⏳ Pendente |

**Legenda:** ⏳ Pendente · 📝 A especificar · 🔍 Em revisão · 🚧 Em desenvolvimento · ✅ Concluído
